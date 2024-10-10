import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
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
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Book Online Order System",
      description: "A platform for book enthusiasts to explore, review, and order their favorite books. Built with HTML, CSS, JS, and PHP.",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Iloveprogramm/Online-Book-Order-System",
      youtubeUrl: "https://www.youtube.com/watch?v=j-UARIFWZSw",
      tag: "school",
      techStack: ["html", "css", "js", "php"],
    },
    {
      id: 2,
      title: "Online Car Rental System",
      description: "A digital platform to rent cars with a seamless user experience. Built with HTML, CSS, JS, PHP, and Ajax.",
      imgUrl: projImg2,
      githubUrl: "https://github.com/Iloveprogramm/Online-Car-Rental-System",
      youtubeUrl: "https://www.youtube.com/watch?v=tKUiPdZDjmI",
      tag: "school",
      techStack: ["HTML", "CSS", "JS", "PHP"],
    },
    {
      id: 3,
      title: "Online Grocery Store",
      description: "An e-commerce platform for users to browse and purchase groceries. Developed using HTML, CSS, JS, and PHP.",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Iloveprogramm/Online-Grocery-Store-",
      youtubeUrl: "https://www.youtube.com/watch?v=9LE65U2C4Us",
      tag: "school",
      techStack: ["HTML", "CSS", "JS", "PHP"],
    },
    {
      id: 4,
      title: "Interactive Musician",
      description: "A media project where users can explore and interact with music in real-time. Built with Processing.",
      imgUrl: projImg4,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Musician-Interactive-Media-Project",
      youtubeUrl: "https://www.youtube.com/watch?v=FqcUiQCaFD0",
      tag: "school",
      techStack: ["Processing"],
    },
    {
      id: 5,
      title: "IoTBay",
      description: "An IoT device shopping platform. Built with Java and JSP.",
      imgUrl: projImg5,
      githubUrl: "https://github.com/Iloveprogramm/Bubble-Game",
      youtubeUrl: "https://www.youtube.com/watch?v=-yDrw09LneY",
      tag: "school",
      techStack: ["Java"],
    },
    {
      id: 6,
      title: "Human Resources Management System",
      description: "A system built with Salesforce to manage employee information.",
      imgUrl: projImg6,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Musician-Interactive-Media-Project",
      youtubeUrl: "https://www.youtube.com/watch?v=s4LRRLpeHTs",
      tag: "school",
      techStack: ["saleforce"],
    },
    {
      id: 7,
      title: "DataDynamics",
      description: "A data visualization project that visually represents complex data. Built with Processing.",
      imgUrl: projImg7,
      githubUrl: "https://github.com/Iloveprogramm/DataDynamics-UTS-Data-Visualisation-Project",
      youtubeUrl: "https://www.youtube.com/watch?v=cnO1_OhwSMg",
      tag: "school",
      techStack: ["Processing"],
    },
    {
      id: 8,
      title: "Bubble Game",
      description: "A simple iOS game where users tap on bubbles to score points. Built with iOS.",
      imgUrl: projImg8,
      githubUrl: "https://github.com/Iloveprogramm/Bubble-Game",
      youtubeUrl: "https://youtu.be/QsO4aNXrckw",
      tag: "school",
      techStack: ["swift"],
    },
    {
      id: 9,
      title: "Interactive Mirror",
      description: "A mirror interface with interactive features. Built with Processing.",
      imgUrl: projImg9,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Mirror",
      youtubeUrl: "https://www.youtube.com/watch?v=xyEW542EM-I",
      tag: "school",
      techStack: ["Processing"],
    },
    {
      id: 10,
      title: "Hospital Management System",
      description: "A hospital management system developed using C#.",
      imgUrl: projImg10,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Mirror",
      youtubeUrl: "https://www.youtube.com/watch?v=xyEW542EM-I",
      tag: "school",
      techStack: ["Csharp"],
    },
    {
      id: 11,
      title: "Simple Banking System",
      description: "A simple banking system developed with C#.",
      imgUrl: projImg11,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Mirror",
      youtubeUrl: "https://www.youtube.com/watch?v=xyEW542EM-I",
      tag: "school",
      techStack: ["Csharp"],
    },
    {
      id: 12,
      title: "TextEditor",
      description: "A basic text editor built with C#.",
      imgUrl: projImg12,
      githubUrl: "https://github.com/Iloveprogramm/Interactive-Mirror",
      youtubeUrl: "https://www.youtube.com/watch?v=xyEW542EM-I",
      tag: "school",
      techStack: ["Csharp"],
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are some of the key projects I have developed, showcasing my expertise in web development and software engineering.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">School Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Self-taught Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects
                          .filter(project => project.tag === "school")
                          .map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                        ))}
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects
                          .filter(project => project.tag === "self-taught")
                          .map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                        ))}
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
