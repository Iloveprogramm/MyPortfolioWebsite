import { Container, Row, Col } from "react-bootstrap";
import { FaBriefcase, FaCalendarAlt, FaVideo } from 'react-icons/fa';  // 使用图标
import aura from "../assets/img/aura.png";  // 示例图片路径
import TwoPeck from "../assets/img/TwoPeck.png"; 
import skey from "../assets/img/skey.png"; 
import MKJ from "../assets/img/MKJ.png"; 
import hire from "../assets/img/HIRE.png"; 
export const IndustryExperience = () => {
  // IT 工作部分
  const itExperiences = [
    {
      role: "Waiting for You to Hire Me!",
      company: "Looking for IT Position",
      imageUrl: hire,  // 占位图片路径
      date: "Available Now",
      location: "Sydney, New South Wales, Australia",
      description: "Currently looking for an IT position. Ready to contribute to your company's success!",
      videoSrc: null,  // 当前没有视频，保持为null
    }
  ];

  // 其他工作部分
  const otherExperiences = [
    {
      role: "Senior Painter",
      company: "Aqualand Australia",
      imageUrl: aura,  // 使用导入的图片
      date: "Mar 2024 - Jul 2024",
      location: "North Sydney, New South Wales, Australia",
      description: "Serving as a painter for AUREATEBUILD, focusing on detailed painting tasks for AQUALAND's construction project.",
      videoSrc: "https://www.example.com/video1",  // 视频链接
    },
    {
      role: "Junior Two Peck Chicken Staff",
      company: "Two Peck Crispy Chicken",
      imageUrl: TwoPeck,  // 替换为相应的图片
      date: "Sep 2023 - Apr 2024",
      location: "Chatswood, New South Wales, Australia",
      description: "Responsible for customer service and kitchen work, managing orders and food preparation.",
    },
    {
      role: "Junior Tutor",
      company: "S'Key Education Consultant",
      imageUrl: skey,  // 替换为相应的图片
      date: "Jul 2023 - Sep 2023",
      location: "Sydney, New South Wales, Australia",
      description: "Part-time tutor offering support to students in various subjects.",
    },
    {
      role: "Mid-Level Painter",
      company: "MKJ Projects",
      imageUrl: MKJ,  // 替换为相应的图片
      date: "Jun 2023 - Jul 2023",
      location: "Hunters Hill, New South Wales, Australia",
      description: "Handled painting work for MKJ Projects, applying wood oil to floors.",
      videoSrc: "https://www.instagram.com/reel/C1Jdj-Xi_iM/",  // 视频链接
    }
  ];

  return (
    <section className="industry-experience" id="experience">
      <Container>
        <Row>
          <Col>
            <h2>Industry Experience</h2>
          </Col>
        </Row>

        {/* IT 工作部分 */}
        <h3>IT Experience</h3>
        <div className="timeline">
          {itExperiences.map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <Row>
                  <Col md={4}>
                    <img src={experience.imageUrl} alt="IT Experience" className="experience-image" />
                  </Col>
                  <Col md={8}>
                    <h3>{experience.role}</h3>
                    <p><FaCalendarAlt className="icon" /> {experience.date}</p>
                    <p>{experience.description}</p>
                    <p>{experience.location}</p>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>

        {/* 其他工作部分 */}
        <h3>Other Work Experience</h3>
        <div className="timeline">
          {otherExperiences.map((experience, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">
                <FaBriefcase />
              </div>
              <div className="timeline-content">
                <Row>
                  <Col md={4}>
                    <img src={experience.imageUrl} alt="Work Experience" className="experience-image" />
                  </Col>
                  <Col md={8}>
                    <h3>{experience.role}</h3>
                    <p><FaCalendarAlt className="icon" /> {experience.date}</p>
                    <p>{experience.description}</p>
                    <p>{experience.location}</p>
                    {experience.videoSrc && (
                      <div className="video-player">
                        <FaVideo className="icon" />{" "}
                        <a href={experience.videoSrc} target="_blank" rel="noopener noreferrer">
                          Watch Video
                        </a>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
