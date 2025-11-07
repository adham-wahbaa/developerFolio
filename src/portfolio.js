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
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true,
};

// ================= Social Media Links =================
const socialMediaLinks = {
  github: "https://github.com/tahagaber",
  linkedin: "https://www.linkedin.com/in/taha-gaber-87b1a9375/",
  gmail: "tahagaber175@gmail.com",
  facebook: "https://www.facebook.com/tahax01/",
  instagram: "https://www.instagram.com/taha_gaber9/",
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
      schoolName: "BATU - Borg El Arab Technical University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor's Degree in Software Engineering",
      duration: "2024 - 2027",
      desc: "Focused on software engineering fundamentals, embedded systems, and real-world project development combining both software and hardware applications.",
      descBullets: [
        "Each semester includes a major graduation-style project that integrates multiple subjects, blending software and hardware components.",
        "Gained hands-on experience in building complete systems using Flutter, IoT, and microcontrollers.",
        "Developed problem-solving, teamwork, and project management skills through continuous practical projects.",
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
  displayCodersrank: false,
};

// ================= Work Experience =================
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Flutter Developer Intern",
      company: "NTI",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "2025 - 2026",
      desc: "Worked on developing full-featured Flutter apps with a focus on clean code, responsive UI, and seamless user experience. Collaborated with mentors and developers to deliver production-ready apps.",
    },
  ],
};

// ================= Projects Section =================
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Some of My Favorite Flutter Projects",
  projects: [
    {
      image: require("./assets/images/stanfordLogo.png"),
      projectName: "Booky – Reading Tracker App",
      projectDesc:
        "A Flutter app that helps users track reading progress, manage books, and sync data using Firebase backend.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/tahagaber/Java_3d_project" },
      ],
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "TravelMate – Travel Planner",
      projectDesc:
        "Cross-platform Flutter app that allows users to plan trips, discover destinations, and share itineraries with friends.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/tahagaber/Smart-Vision-Glass" },
      ],
    },
  ],
  display: true,
};

// ================= Contact Info =================
const contactInfo = {
  title: emoji("Contact Me ☎"),
  subtitle:
    "Have an idea or want to collaborate on a project? Let’s build something great together!",
  number: "+20-01276800187",
  email_address: "tahagaber175@gmail.com",
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
  display: true,
};

// ================= Blog Section =================
const blogSection = {
  title: "Blogs",
  subtitle: "I love sharing what I learn!",
  blogs: [
    {
      title: "Getting Started with Flutter",
      description:
        "A comprehensive guide to start building beautiful and responsive mobile apps using Flutter & Dart.",
      link: "https://medium.com/@tahagaber/getting-started-with-flutter-123456",
      image: require("./assets/images/stanfordLogo.png"),
    },
    {
      title: "State Management in Flutter",
      description:
        "Exploring Bloc, Provider, and Riverpod for scalable and maintainable Flutter applications.",
      link: "https://medium.com/@tahagaber/state-management-in-flutter-789012",
      image: require("./assets/images/stanfordLogo.png"),
    },
    {
      title: "Integrating Firebase with Flutter",
      description:
        "Learn how to integrate Firebase services like Firestore, Auth, and Storage in your Flutter apps.",
      link: "https://medium.com/@tahagaber/integrating-firebase-with-flutter-345678",
      image: require("./assets/images/stanfordLogo.png"),
    },
    {
      title: "Flutter UI Tips & Tricks",
      description:
        "Practical tips to create modern, smooth, and visually appealing Flutter UI using widgets effectively.",
      link: "https://medium.com/@tahagaber/flutter-ui-tips-tricks-901234",
      image: require("./assets/images/stanfordLogo.png"),
    },
    {
      title: "Flutter UI Tips & Tricks",
      description:
        "Practical tips to create modern, smooth, and visually appealing Flutter UI using widgets effectively.",
      link: "https://medium.com/@tahagaber/flutter-ui-tips-tricks-901234",
      image: require("./assets/images/stanfordLogo.png"),
    },
    {
      title: "Flutter UI Tips & Tricks",
      description:
        "Practical tips to create modern, smooth, and visually appealing Flutter UI using widgets effectively.",
      link: "https://medium.com/@tahagaber/flutter-ui-tips-tricks-901234",
      image: require("./assets/images/stanfordLogo.png"),
    },
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
  userName: "Taha_Gaber",
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