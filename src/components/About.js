import { Container, Row, Col, Card } from "react-bootstrap";
import { FaAward } from 'react-icons/fa';

export const About = () => {
  const techStack = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    backend: ["Node.js", "Java", "C#", "Express.js"],
    database: ["MySQL", "MongoDB", "Firebase"],
  };

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <h2>About Me</h2>
            <p>
              Hi, I'm Chenjun Zheng, a full-stack developer specializing in enterprise systems development. 
              I graduated from UTS with a major in Enterprise Systems Development. I've led projects such as 
              a book reservation system and a car rental platform, utilizing various frontend and backend technologies.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="main-tech-stack">Main Tech Stack</h3> {/* 添加 Main Tech Stack */}
          </Col>
        </Row>
        <Row className="tech-stack-section">
          <Col lg={4} md={6}>
            <Card className="tech-card">
              <Card.Body>
                <Card.Title className="tech-title frontend-title">Frontend</Card.Title> {/* 添加前端发光效果 */}
                <Card.Text className="tech-text">{techStack.frontend.join(", ")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="tech-card">
              <Card.Body>
                <Card.Title className="tech-title backend-title">Backend</Card.Title> {/* 添加后端发光效果 */}
                <Card.Text className="tech-text">{techStack.backend.join(", ")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card className="tech-card">
              <Card.Body>
                <Card.Title className="tech-title database-title">Database</Card.Title> {/* 添加数据库发光效果 */}
                <Card.Text className="tech-text">{techStack.database.join(", ")}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Certificates</h3>
            <ul className="certificates">
              <li><FaAward className="award-icon" /> ServiceRocket Internet Programming Prize for Undergraduate Students for 2024</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
