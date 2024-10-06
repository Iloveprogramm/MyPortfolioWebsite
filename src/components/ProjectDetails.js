import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './ProjectsData';

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div className="error-message">Project not found</div>;
  }

  return (
    <div className="project-details">

      <div className="project-header">
        <h2>{project.title}</h2>
        <p className="project-date">Creation Date: {project.date}</p>
      </div>

      {/* Project Cover */}
      <div className="project-cover">
        <img src={project.imgUrl} alt={`${project.title} cover`} className="cover-image" />
      </div>

      <div className="project-content">
        <div className="project-description">
          <h3>
            <span className="icon">📄</span> Project Overview
          </h3>
          <p>{project.description}</p>
        </div>

        <div className="project-role">
          <h3>
            <span className="icon">👨‍💻</span> Role
          </h3>
          <p>{project.role}</p>
        </div>

        <div className="project-learnings">
          <h3>
            <span className="icon">📚</span> Learnings
          </h3>
          <p>{project.learnings}</p>
        </div>

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
