import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaGraduationCap, FaSchool, FaTrophy } from 'react-icons/fa';
import TrackVisibility from 'react-on-screen';
import utsImg from "../assets/img/uts.jpeg"; // 统一使用UTS的图片
import highschoolImg from "../assets/img/highschool.png"; 
import utscollegeImg from "../assets/img/utscollege.png"; 
import { ScholarshipModal } from "./ScholarshipModal"; // 奖学金 Modal 组件
import certificateImg from "../assets/img/scholarship-certificate.png"; // 奖学金证书图片

export const Education = () => {
  const [showModal, setShowModal] = useState(false);

  const educationData = [
    {
      institution: "University of Technology Sydney (UTS)",
      degree: "Bachelor of Information Technology",
      major: "Major: Enterprise System Development",
      gpa: "GPA: 6.5/7.0",
      wam: "WAM: 86.5/100",
      period: "2022 - 2023",
      details: "During my studies, I developed a strong foundation in enterprise system development, focusing on object-oriented programming, API design, and database management. I led multiple projects, including a book reservation system and a car rental platform, where I was responsible for the full development cycle, from requirement gathering to deployment. These projects were built using Java, HTML, CSS, JavaScript, and MySQL. I also gained hands-on experience with modern frameworks like Spring Boot, React, and Node.js. As the team leader, I coordinated team efforts, ensured timely delivery, and implemented CI/CD pipelines using Azure Web Services, improving the scalability and reliability of the applications. I was awarded the Web Programming Scholarship for my excellence in both front-end and back-end development.",
      institutionLink: "https://www.uts.edu.au/",
      scholarship: "Scholarship on Web Programming",
      img: utsImg
    },
    {
      institution: "UTS College",
      degree: "Diploma of Information Technology",
      gpa: "GPA: 5.8/7.0",
      period: "2021-2022",
      details: "Completed the IT diploma program with a focus on foundational software engineering.",
      institutionLink: "https://utscollege.edu.au/",
      img: utscollegeImg
    },
    {
      institution: "Australian International High School",
      degree: "High School Certificate",
      period: "2019 - 2020",
      details: "Completed high school with a focus subjects.",
      institutionLink: "https://www.aihs.edu.au/",
      img: highschoolImg
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education</h2>
                  <div className="education-list">
                    {educationData.map((education, index) => (
                      <div className="education-item" key={index}>
                        <Row className="align-items-center">
                          <Col lg={4} className="education-img">
                            <Image src={education.img} alt={education.institution} fluid />
                          </Col>
                          <Col lg={8}>
                            <h3>
                              <FaSchool /> 
                              <a href={education.institutionLink} target="_blank" rel="noopener noreferrer">
                                {education.institution}
                              </a>
                            </h3>
                            <h4><FaGraduationCap /> {education.degree}</h4>
                            {education.major && <p>{education.major}</p>}
                            {education.gpa && <p>{education.gpa}</p>}
                            {education.wam && <p>{education.wam}</p>}
                            <span>{education.period}</span>
                            <p>{education.details}</p>
                            {education.scholarship && (
                              <>
                                <Button variant="link" onClick={() => setShowModal(true)}>
                                  <FaTrophy /> {education.scholarship}
                                </Button>
                                <ScholarshipModal show={showModal} handleClose={() => setShowModal(false)} img={certificateImg} />
                              </>
                            )}
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
