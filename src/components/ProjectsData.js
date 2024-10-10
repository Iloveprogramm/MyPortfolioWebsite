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
import bookWe from "../assets/projectImage/Book-We.png";
import bookCart from "../assets/projectImage/Book-Cart.png";
import bookTest from "../assets/projectImage/Book-Test.png";

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
import bookOrderSystemBlog from "../assets/img/BookBLOG.pdf";



export const projects = [
  {
    id: 1,
    title: "Book Online Order System",
    date: "2023-08 to 2023-10", // 项目从2023年8月到2023年10月
    description: `The **Book Online Order System** is an online platform that allows users to browse, order, and manage book purchases. Developed as a capstone project for the *41026 Advanced Software Development* course, it follows **agile development methodologies** to ensure collaboration and iterative progress.
  
  __Key Features__:
  - **Book Management**: Administrators can manage the book catalog (add, update, delete).
  - **Order Management**: Users can place orders and track their purchase history.
  - **User Management**: Includes user registration, login, and account management.
  - **Payment Integration**: Secure online payment processing.
  - **Review and Search**: Users can search for books and leave reviews.
  - **Wishlist and Shipping Management**: Users can manage wishlists and shipping details.
  
  __Tech Stack__:
  __Frontend__: **HTML, CSS, JavaScript, Bootstrap**
  __Backend__: **PHP, PHPUnit**
  __Database & Server__: **XAMPP, MySQL**
  __CI/CD__: **Azure (YAML-based CI/CD pipeline)**
  __Deployment__: **000webhost, FTP**
  __Email Service__: **PHPMailer**
  
  __Team Structure__:
  - **Chenjun Zheng (Team Leader)**: Book and Order Management
  - **Yuxin Liu**: User Management, Payment Integration
  - **Mandana Ebrahimian**: Reviews, Search Functionality
  - **Matthew Georgans**: Shipping, Wishlist Management
  
  The project was deployed on **000webhost** with **Azure CI/CD pipelines** ensuring automated testing and smooth deployment.
  
 If you would like to see more detailed information about this project, including the development process, challenges, and learnings, please refer to the [Book Online Order System Blog (PDF)](${bookOrderSystemBlog}).`,
    imgUrl: projImg1,
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon },
      { name: "BootStrap", icon: bootstrapIcon },
      { name: "Xampp", icon: xamppIcon }
    ],
    screenshots: [bookWe,bookCart, bookTest], 
    role: "Team Leader & Full Stack Developer",
    learnings: `As the **Team Leader & Full Stack Developer**, this project provided me with valuable hands-on experience in leading a development team and managing both frontend and backend tasks. I deepened my understanding of **Agile development methodologies**, ensuring collaboration and iterative progress throughout the project. I also became proficient in **Continuous Integration (CI)** and **Continuous Deployment (CD)**, utilizing **Azure Web Services** and **YAML files** to implement a full CICD pipeline. Additionally, I gained significant experience in **automated testing** using **PHPUnit**, which enhanced the reliability of the system. The project further solidified my skills in using **PHPMailer** for email services and deploying the system via **000webhost** with **FTP** integration. Overall, this project enhanced my technical abilities, leadership skills, and practical knowledge of **DevOps** practices, including automated testing and deployment strategies.`
  },
  {
    id: 2,
    title: "Online Car Rental System",
    date: "2023-04 to 2023-06",
    description: `The **Online Car Rental System** is a dynamic, simulated online car rental portal for the company "Hertz-UTS". The platform streamlines the process of renting cars by allowing customers to browse through various car categories, view detailed information, and manage their reservations through a shopping cart system.`,
    keyFeatures: [
      "Car Categories: Display available cars from multiple categories (Sedan, Wagon, SUV), with dynamic data loading from a JSON file.",
      "Reservation Management: Allow customers to add, modify, and remove cars from their reservation cart.",
      "Error Handling: Handle edge cases like adding unavailable cars or checking out without any cars in the cart.",
      "AJAX Integration: Asynchronous data retrieval ensures that data changes in the backend are dynamically reflected."
    ],
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon },
      { name: "BootStrap", icon: bootstrapIcon },
      { name: "Xampp", icon: xamppIcon }
    ],
    role: "Full-Stack Developer",
    learnings: `As a Full-Stack Developer, this project enhanced my skills in designing and implementing a fully functional car rental system. I gained hands-on experience in AJAX for asynchronous data handling, session management for customer carts, and dynamic data loading using JSON. This project also improved my ability to handle edge cases like unavailable cars, ensuring a seamless user experience. Additionally, I strengthened my understanding of PHP and session management for building robust web applications.`,
    imgUrl: projImg2
  },  
  {
    id: 3,
    title: "Online Grocery Store",
    date: "2023-02 to 2023-04",  // 添加项目创建时间
    description: "An e-commerce platform for users to browse and purchase groceries. Developed using HTML, CSS, JS, and PHP.",
    imgUrl: projImg3,
    techStack: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "PHP", icon: phpIcon },
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
    date: "2023-02 to 2023-05",  // 添加项目创建时间
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
