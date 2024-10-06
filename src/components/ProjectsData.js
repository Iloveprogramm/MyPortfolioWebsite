import projImg1 from "../assets/img/BookOnlineOrderSystem.png";
import projImg2 from "../assets/img/CarRentalSystem.png";
import projImg3 from "../assets/img/OnlineGroceryStore.png";
import projImg4 from "../assets/img/Interactive-Musician.png";
import projImg5 from "../assets/img/IoTBay.png";
import projImg6 from "../assets/img/HumanResourcesManagementSystem.jpeg";
import projImg7 from "../assets/img/DataDynamics.png";
import projImg8 from "../assets/img/BubbleGame.png";
import projImg9 from "../assets/img/Interactive-Mirror.png";
import projImg10 from "../assets/img/HospitalManagementSystem.jpeg";
import projImg11 from "../assets/img/SimpleBankingSystem.jpeg";
import projImg12 from "../assets/img/TextEditor.jpeg";

import htmlIcon from "../assets/img/html5.svg";
import cssIcon from "../assets/img/css3.svg";
import jsIcon from "../assets/img/javascript.svg";
import phpIcon from "../assets/img/php.svg";
import javaIcon from "../assets/img/java.svg";
import githubIcon from "../assets/img/github.svg";
import nodejsIcon from "../assets/img/nodejs.svg";
import csharpIcon from "../assets/img/csharp.svg";
import mysqlIcon from "../assets/img/mysql.svg";
import bootstrapIcon from "../assets/img/bootstrap.svg";
import gitIcon from "../assets/img/git.svg";
import swiftIcon from "../assets/img/swift.svg";
import processingIcon from "../assets/img/processing.svg";
import azureIcon from "../assets/img/azure.svg";
import vsCodeIcon from "../assets/img/vscode.svg";
import saleforceIcon from "../assets/img/saleforce.svg";
import reactIcon from "../assets/img/react.svg";
import xamppIcon from "../assets/img/xampp.svg";
import mongodbIcon from "../assets/img/mongodb.svg";
import nextjsIcon from "../assets/img/nextjs.svg";

export const projects = [
  {
    id: 1,
    title: "Book Online Order System",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A platform for book enthusiasts to explore, review, and order their favorite books. Built with HTML, CSS, JS, and PHP.",
    imgUrl: projImg1,
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon }
    ],
    role: "Front-End Developer",
    learnings: "Learned more about working with PHP and improved my knowledge on backend integration."
  },
  {
    id: 2,
    title: "Online Car Rental System",
    date: "2023-07-15",  // 添加项目创建时间
    description: "A digital platform to rent cars with a seamless user experience. Built with HTML, CSS, JS, PHP, and Ajax.",
    imgUrl: projImg2,
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon }
    ],
    role: "Full-Stack Developer",
    learnings: "Enhanced my understanding of Ajax and real-time data processing."
  },
  {
    id: 3,
    title: "Online Grocery Store",
    date: "2023-06-15",  // 添加项目创建时间
    description: "An e-commerce platform for users to browse and purchase groceries. Developed using HTML, CSS, JS, and PHP.",
    imgUrl: projImg3,
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon }
    ],
    role: "Full-Stack Developer",
    learnings: "Improved my front-end skills and learned about managing e-commerce platforms."
  },
  {
    id: 4,
    title: "Interactive Musician",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A media project where users can explore and interact with music in real-time. Built with Processing.",
    imgUrl: projImg4,
    techStack: [
      { name: "Processing", icon: processingIcon }
    ],
    role: "Media Developer",
    learnings: "Developed real-time interaction systems and learned how to handle multimedia processing."
  },
  {
    id: 5,
    title: "IoTBay",
    date: "2023-06-15",  // 添加项目创建时间
    description: "An IoT device shopping platform. Built with Java and JSP.",
    imgUrl: projImg5,
    techStack: [
      { name: "Java", icon: javaIcon },
      { name: "JSP", icon: githubIcon }
    ],
    role: "Back-End Developer",
    learnings: "Gained expertise in Java web development and handling IoT device data."
  },
  {
    id: 6,
    title: "Human Resources Management System",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A system built with Salesforce to manage employee information.",
    imgUrl: projImg6,
    techStack: [
      { name: "Salesforce", icon: saleforceIcon }
    ],
    role: "Salesforce Developer",
    learnings: "Acquired knowledge on using Salesforce for HR system development."
  },
  {
    id: 7,
    title: "DataDynamics",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A data visualization project that visually represents complex data. Built with Processing.",
    imgUrl: projImg7,
    techStack: [
      { name: "Processing", icon: processingIcon }
    ],
    role: "Data Visualization Developer",
    learnings: "Enhanced my skills in data visualization and working with large datasets."
  },
  {
    id: 8,
    title: "Bubble Game",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A simple iOS game where users tap on bubbles to score points. Built with Swift.",
    imgUrl: projImg8,
    techStack: [
      { name: "Swift", icon: swiftIcon }
    ],
    role: "iOS Developer",
    learnings: "Gained experience in iOS game development and working with Swift."
  },
  {
    id: 9,
    title: "Interactive Mirror",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A mirror interface with interactive features. Built with Processing.",
    imgUrl: projImg9,
    techStack: [
      { name: "Processing", icon: processingIcon }
    ],
    role: "Interactive Developer",
    learnings: "Developed interactive experiences using physical computing."
  },
  {
    id: 10,
    title: "Hospital Management System",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A hospital management system developed using C#.",
    imgUrl: projImg10,
    techStack: [
      { name: "C#", icon: csharpIcon }
    ],
    role: "C# Developer",
    learnings: "Learned about building management systems and handling sensitive data."
  },
  {
    id: 11,
    title: "Simple Banking System",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A simple banking system developed with C#.",
    imgUrl: projImg11,
    techStack: [
      { name: "C#", icon: csharpIcon }
    ],
    role: "C# Developer",
    learnings: "Enhanced my understanding of financial applications and secure transactions."
  },
  {
    id: 12,
    title: "TextEditor",
    date: "2023-06-15",  // 添加项目创建时间
    description: "A basic text editor built with C#.",
    imgUrl: projImg12,
    techStack: [
      { name: "C#", icon: csharpIcon }
    ],
    role: "C# Developer",
    learnings: "Learned about building lightweight desktop applications."
  }
];
