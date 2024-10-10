import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { projects } from './ProjectsData'; // 从 ProjectsData 导入项目数据
import { marked } from 'marked'; // 从 marked 导入

export const ProjectDetails = () => {
  const { id } = useParams(); // 从 URL 中获取项目 ID
  const project = projects.find((proj) => proj.id === parseInt(id)); // 查找相应项目

  // 使用 useEffect 来在组件加载时滚动到页面顶部
  useEffect(() => {
    window.scrollTo(0, 0); // 滚动到页面顶部
  }, []);

  if (!project) {
    return <div className="error-message">Project not found</div>;
  }

  return (
    <div className="project-details">
      {/* Project Header */}
      <div className="project-header">
        <h2>{project.title}</h2>
        <p className="project-date">Time and Duration: {project.date}</p>
      </div>

      {/* Project Cover Image */}
      <div className="project-cover">
        <img src={project.imgUrl} alt={`${project.title} cover`} className="cover-image" />
      </div>

      {/* Project Content */}
      <div className="project-content">
        {/* Project Overview */}
        <div className="project-description">
          <h3>
            <span className="icon">📄</span> Project Overview
          </h3>
          <div dangerouslySetInnerHTML={{ __html: marked(project.description) }} />
        </div>

        {/* Role in the Project */}
        <div className="project-role">
          <h3>
            <span className="icon">👨‍💻</span> Role
          </h3>
          <p>{project.role}</p>
        </div>

        {/* Learnings */}
        <div className="project-learnings">
          <h3>
            <span className="icon">📚</span> Learning Outcome
          </h3>
          <div dangerouslySetInnerHTML={{ __html: marked(project.learnings) }} />
        </div>

        {/* Tech Stack */}
        <div className="project-tech-stack">
          <h3>Tech Stack</h3>
          <div className="tech-icons">
            {project.techStack.map((tech, index) => (
              <div className="tech-item" key={index}>
                <img
                  className="project-tech-icon"
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Screenshots */}
        {project.screenshots && (
          <div className="project-screenshots">
            <h3>Project Screenshots</h3>
            <div className="screenshots">
              {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="screenshot-img"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
