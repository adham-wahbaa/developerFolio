/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};
const greeting = {
  title: "Hi, I'm Adham Wahba 👋",
  logo_name: "AdhamWahba",
  subTitle:
    "Flutter Developer | Mobile App Engineer | NTI Certified | ITI Trainee | HackerRank AC Member. Passionate about building high-quality cross-platform mobile applications with Flutter and Firebase, focusing on performance, scalability, and clean architecture.",
  resumeLink: "mailto:adhamwahba93@gmail.com",
  portfolio_repository: "https://github.com/adham-wahbaa"
};

const socialMediaLinks = {
  github: "https://github.com/adham-wahbaa",
  linkedin: "https://www.linkedin.com/in/adhamwahba/",
  gmail: "adhamwahba93@gmail.com"
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Building clean, responsive, and scalable mobile apps using Flutter",
  skills: [
    "⚡ Develop high-performance cross-platform apps using Flutter & Dart",
    "⚡ Integrate Firebase & REST APIs for backend and authentication",
    "⚡ Implement clean architecture and modern state management (Bloc, Provider, Riverpod)",
    "⚡ Design elegant, responsive UIs with attention to detail"
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "logos:flutter" },
    { skillName: "Dart", fontAwesomeClassname: "logos:dart" },
    { skillName: "Firebase", fontAwesomeClassname: "logos:firebase" },
    { skillName: "Git", fontAwesomeClassname: "logos:git-icon" },
    { skillName: "VS Code", fontAwesomeClassname: "logos:visual-studio-code" },
    { skillName: "Android Studio", fontAwesomeClassname: "logos:android-icon" }
  ]
};

const educationInfo = {
  schools: [
    {
      schoolName: "Faculty of Science – Department of Software Industry and Multimedia",
      logo: require("./assets/images/education.png"),
      subHeader: "Bachelor’s in Software Industry and Multimedia",
      duration: "Expected Graduation: 2026",
      descBullets: [
        "Specialized in mobile app development and multimedia systems",
        "Gained hands-on experience through NTI and ITI Flutter programs"
      ]
    }
  ]
};

const certifications = {
  certifications: [
    {
      title: "Flutter & Dart Certificate",
      subtitle: "National Telecommunication Institute (NTI)",
      description: "90h Flutter mobile app development training"
    },
    {
      title: "Summer Training Program – Flutter",
      subtitle: "Information Technology Institute (ITI)",
      description: "60h intensive mobile development training"
    },
    {
      title: "Flutter Bootcamp Certificate",
      subtitle: "HackerRank",
      description: "Recognized as one of the top contributors and AC Member"
    }
  ]
};

const projects = {
  data: [
    {
      id: "1",
      name: "Chatify App",
      url: "https://github.com/adham-wahbaa",
      description: "A WhatsApp-like chat app built with Flutter and Firebase, featuring real-time messaging and authentication."
    },
    {
      id: "2",
      name: "Weatherly",
      url: "https://github.com/adham-wahbaa",
      description: "A weather forecasting app using Flutter with API integration and responsive UI."
    },
    {
      id: "3",
      name: "TaskFlow",
      url: "https://github.com/adham-wahbaa",
      description: "A task management app focusing on clean architecture and Riverpod state management."
    }
  ]
};

const contactInfo = {
  title: "Get in Touch",
  subtitle:
    "I’m open to Flutter freelance projects, collaborations, or full-time opportunities. Let’s build something amazing together!",
  email_address: "adhamwahba93@gmail.com"
};

const theme = {
  defaultTheme: "dark"
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  certifications,
  projects,
  contactInfo,
  theme
};