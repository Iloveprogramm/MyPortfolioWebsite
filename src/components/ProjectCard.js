import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // 用于导航

// 引入自定义图标
import htmlIcon from "../assets/img/html5.svg";
import cssIcon from "../assets/img/css3.svg";
import jsIcon from "../assets/img/javascript.svg";
import javaIcon from "../assets/img/java.svg";
import githubIcon from "../assets/img/github.svg";
import nodejsIcon from "../assets/img/nodejs.svg";
import csharpIcon from "../assets/img/csharp.svg";
import phpIcon from "../assets/img/php.svg";
import mysqlIcon from "../assets/img/mysql.svg";
import bootstrapIcon from "../assets/img/bootstrap.svg";
import gitIcon from "../assets/img/git.svg";
import swiftIcon from "../assets/img/swift.svg";
import processingIcon from "../assets/img/processing.svg";
import AzureIcon from "../assets/img/azure.svg";
import vsCodeIcon from "../assets/img/vscode.svg";
import saleforceIcon from "../assets/img/saleforce.svg";
import reactIcon from "../assets/img/react.svg";
import xamppIcon from "../assets/img/xampp.svg";
import MongoDBIcon from "../assets/img/mongodb.svg";
import NextjsIcon from "../assets/img/nextjs.svg";

// 映射技术栈名称与图标
const techIcons = {
  html: htmlIcon,
  css: cssIcon,
  js: jsIcon,
  java: javaIcon,
  github: githubIcon,
  nodejs: nodejsIcon,
  csharp: csharpIcon,
  php: phpIcon,
  mysql: mysqlIcon,
  bootstrap: bootstrapIcon,
  git: gitIcon,
  swift: swiftIcon,
  processing: processingIcon,
  azure: AzureIcon,
  vscode: vsCodeIcon,
  saleforce: saleforceIcon,
  react: reactIcon,
  xampp: xamppIcon,
  mongodb: MongoDBIcon,
  nextjs: NextjsIcon
};

export const ProjectCard = ({ id, title, description, imgUrl, githubUrl, youtubeUrl, techStack }) => {
  const navigate = useNavigate(); // 使用 useNavigate hook 来进行导航

  const handleViewDetails = () => {
    // 导航到项目详情页面，并传递项目的 ID
    navigate(`/projects/${id}`);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-btns">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="proj-btn github-btn">
                GitHub
              </a>
            )}
            {youtubeUrl && (
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="proj-btn youtube-btn">
                YouTube
              </a>
            )}
            <button onClick={handleViewDetails} className="proj-btn details-btn">
              View More
            </button>
          </div>
        </div>
        <div className="tech-stack">
          {techStack.map((tech, index) => (
            <span key={index} className={`tech-icon ${tech.toLowerCase()}`}>
              <img src={techIcons[tech.toLowerCase()]} alt={tech} />
            </span>
          ))}
        </div>
      </div>
    </Col>
  );
};
