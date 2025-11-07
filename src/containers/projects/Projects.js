import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          const user = response.data.user;
          const pinned = user?.pinnedItems?.edges || [];
          if (pinned.length > 0) {
            setrepoFunction(pinned);
            return;
          }

          // Fallback to most-starred public repositories if no pins OR missing repositories in profile.json
          const repos = user?.repositories?.nodes || [];
          if (repos.length > 0) {
            const edgesLike = repos.map(node => ({ node }));
            setrepoFunction(edgesLike);
            return;
          }

          // Final fallback: fetch via GitHub REST API without token
          const username = (user && user.login) || (openSource.githubUserName || "");
          if (!username) {
            setrepoFunction([]);
            return;
          }
          fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=stargazers`)
            .then(res => (res.ok ? res.json() : Promise.reject(res)))
            .then(list => {
              const mapped = (list || []).map(r => ({
                node: {
                  name: r.name,
                  description: r.description,
                  forkCount: r.forks_count,
                  stargazers: { totalCount: r.stargazers_count },
                  url: r.html_url,
                  id: String(r.id),
                  diskUsage: r.size,
                  primaryLanguage: r.language
                    ? { name: r.language, color: undefined }
                    : null
                }
              }));
              setrepoFunction(mapped);
            })
            .catch(() => {
              setrepoFunction([]);
            });
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
