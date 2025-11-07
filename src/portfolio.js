import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
// import contactMail from "./assets/lottie/email.json"; // ❌ احذف أو عطّل هذا السطر


// ================= Splash Screen =================
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// ================= Illustration =================
const illustration = {
  animated: true,
};

// ================= Greeting Section =================
const greeting = {
  username: "Adham Wahba",
  title: "Hi all, I'm Adham 👋",
  subTitle: emoji(
    "Flutter Developer specializing in building fast, beautiful, and scalable mobile and web apps using Flutter & Dart 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1CRMQKCTc3aQi7ckpfPX2aWBkpfy8Sulb/view?usp=sharing",
  displayGreeting: true,
};

// ================= Social Media Links =================
const socialMediaLinks = {
  github: "https://github.com/adham-wahbaa",
  linkedin: "https://www.linkedin.com/in/adhamwahba/",
  gmail: "adhamwahba93@gmail.com",
  facebook: "https://www.facebook.com/domv.emad/",
  instagram: "https://www.instagram.com/x.domix_21/",
  display: true,
};

// ================= Skills Section =================
const skillsSection = {
  title: "What I Do",
  subTitle: "FLUTTER DEVELOPER WHO BUILDS BEAUTIFUL CROSS-PLATFORM APPS",
  skills: [
    emoji("⚡ Building responsive and high-performance mobile apps for Android & iOS using Flutter"),
    emoji("⚡ Designing clean, modern, and user-friendly UI using Flutter widgets & Material Design"),
    emoji("⚡ Integrating REST APIs, Firebase, and real-time databases seamlessly"),
    emoji("⚡ Applying clean architecture, Bloc, Provider, and Riverpod for scalable state management"),
    emoji("⚡ Publishing apps to Play Store and App Store, including CI/CD pipelines and app maintenance"),
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fab fa-android" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "REST API", fontAwesomeClassname: "fas fa-plug" },
    { skillName: "Figma", fontAwesomeClassname: "fab fa-figma" },
  ],
  display: true,
};

// ================= Education Section =================
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Faculty of Science – Department of Software Industry and Multimedia",
      logo: require("./assets/images/alex.png"),
      subHeader: "Bachelor’s in Software Industry and Multimedia",
      duration: "Expected Graduation: 2026",
      desc: "Comprehensive background in computer science — from data structures and algorithms to AI, game development, and software testing — with hands-on experience in real-world projects.",
      descBullets: [
        "Well-rounded developer with experience in data structures, algorithms, and object-oriented programming",
        "Skilled in building, testing, and validating robust software systems",
        "Explored AI, game development, and modern programming techniques across multiple domains"
      ],

    },
  ],
};


// ================= Tech Stack =================
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Flutter Development", progressPercentage: "85%" },
    { Stack: "Firebase Integration", progressPercentage: "75%" },
    { Stack: "UI/UX & Design Implementation", progressPercentage: "80%" },
  ],
  displayCodersrank: true,
};

// ================= Work Experience =================
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Developer Intern",
      company: "National Telecommunication Institute: NTI",
      companylogo: require("./assets/images/nti.jpeg"),
      date: "2025 - 2026",
      desc: "Worked on developing full-featured Flutter apps with a focus on clean code, responsive UI, and seamless user experience. Collaborated with mentors and developers to deliver production-ready apps.",
    },
    {
      role: "Flutter Developer Intern",
      company: "Information Technology Institute (ITI)",
      companylogo: require("./assets/images/iti.png"),
      date: "2025 - 2025",
      desc: "Worked on developing high-quality Flutter applications with a focus on responsive UI, state management, and clean architecture. Collaborated with a team to build real-world projects integrating Firebase and REST APIs. Gained experience in Agile development and software testing.",
    },
  ],
};

// ================= Projects Section =================
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Some of My Favorite Flutter Projects",
  projects: [
    {
      image: require("./assets/images/chatapp.png"),
      projectName: "Chat App",
      projectDesc:
        "A real-time chat application built with Flutter and Firebase, featuring authentication, live messaging, and media sharing with a clean, modern UI.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adham-wahbaa/chat-app"
        }
      ]
    },
    {
      image: require("./assets/images/todo.png"),
      projectName: "To-Do App",
      projectDesc:
        "A task management application built with Flutter and Firebase. Supports adding, editing, and organizing tasks with real-time sync and local caching for offline use.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adham-wahbaa/TODO-App"
        }
      ]
    }, {
      image: require("./assets/images/movies.png"),
      projectName: "Movies Night",
      projectDesc:
        "A movie discovery app built with Flutter that integrates with The Movie Database (TMDb) API. Features trending movies, detailed info pages, and an elegant, responsive UI with smooth animations.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/adham-wahbaa/moviesnight"
        }
      ]
    },
  ],
  display: true,
};

// ================= Contact Info =================
const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle:
    "Have an idea or want to collaborate on a project? Let’s build something great together!",
  number: "+20-01275854854",
  email_address: "adhamwahba93@gmail.com",
  display: true,
};

// ================= Talk Section =================
const talkSection = {
  title: "Talks",
  subtitle: "Some of my talks",
  talks: [],
  display: false,
};

// ================= Resume Section =================
const resumeSection = {
  title: "Resume",
  subtitle: "Download My Resume",
  display: true,
};

// ================= Open Source Section =================
const openSource = {
  showGithubProfile: true,
  display: true,
  githubUserName: "adham-wahbaa", // your username here
};

// ================= Achievement Section =================
const achievementSection = {
  title: "Achievements",
  subtitle: "A few highlights of my journey so far",
  achievementsCards: [
    {
      title: "Flutter Developer Track - NTI",
      subtitle:
        "Completed Flutter training with hands-on projects and advanced concepts in UI/UX, Firebase, and state management.",
      image: require("./assets/images/airbnbLogo.png"),
      footerLink: [],
    },
  ],
  display: false,
};

// ================= Blog Section =================
const blogSection = {
  title: "Blogs",
  subtitle: "I love sharing what I learn about Flutter, Firebase, and clean software development.",
  blogs: [
    {
      title: "Getting Started with Flutter",
      description:
        "A step-by-step guide to building your first Flutter app — covering setup, widgets, and responsive design principles.",
      link: "https://medium.com/@adhamwahba/getting-started-with-flutter",
    
    },
    {
      title: "Mastering State Management in Flutter",
      description:
        "Exploring Provider, Bloc, and Riverpod — understanding how to manage app state effectively for scalable Flutter apps.",
      link: "https://medium.com/@adhamwahba/state-management-in-flutter",
  
    },
    {
      title: "Integrating Firebase into Your Flutter App",
      description:
        "A complete guide to connecting Firebase Authentication, Firestore, and Push Notifications to your Flutter projects.",
      link: "https://medium.com/@adhamwahba/integrating-firebase-with-flutter",
  
    },
    {
      title: "Building Clean and Scalable Flutter Codebases",
      description:
        "How to structure your Flutter apps using clean architecture principles — separating UI, logic, and data layers for better maintainability.",
      link: "https://medium.com/@adhamwahba/clean-code-practices-for-flutter",

    },
    {
      title: "From Algorithms to Apps",
      description:
        "How a deep understanding of data structures, algorithms, and software fundamentals helps you write efficient, reliable Flutter code.",
      link: "https://medium.com/@adhamwahba/from-algorithms-to-apps",
  
    }
  ],
  display: true,
};

// ================= Podcast Section =================
const podcastSection = {
  title: "Podcasts",
  subtitle: "Featured Flutter Talks",
  podcasts: [],
  display: false,
};

// ================= Twitter Details =================
const twitterDetails = {
  userName: "adhamWahba", //Replace "twitter" with your twitter username without @
  display: false,
};

// ================= Misc =================
const isHireable = true;

// ================= Export All =================
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  resumeSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};