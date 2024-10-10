import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // 引入AOS的CSS样式

// 导入所有语言图标
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

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 初始化AOS，动画持续1秒
  }, []);

  // 定义技能列表及其对应的颜色和分类
  const skills = [
    // 前端技能
    { icon: htmlIcon, name: "HTML", level: "Advanced", color: "#E34F26", category: "Frontend" },
    { icon: cssIcon, name: "CSS", level: "Advanced", color: "#1572B6", category: "Frontend" },
    { icon: jsIcon, name: "JavaScript", level: "Intermediate", color: "#F7DF1E", category: "Frontend" },
    { icon: reactIcon, name: "React", level: "Learning", color: "#61DAFB", category: "Frontend" },
    { icon: bootstrapIcon, name: "Bootstrap", level: "Intermediate", color: "#563D7C", category: "Frontend" },
    { icon: NextjsIcon, name: "Next.js", level: "Learning", color: "#FFFFFF", category: "Frontend" },

    
    // 后端技能
    { icon: nodejsIcon, name: "Node.js", level: "Learning", color: "#339933", category: "Backend" },
    { icon: javaIcon, name: "Java", level: "Intermediate", color: "#007396", category: "Backend" },
    { icon: phpIcon, name: "PHP", level: "Intermediate", color: "#777BB4", category: "Backend" },
    { icon: mysqlIcon, name: "MySQL", level: "Intermediate", color: "#4479A1", category: "Backend" },
    { icon: csharpIcon, name: "C#", level: "Intermediate", color: "#68217A", category: "Backend" },
    { icon: MongoDBIcon, name: "MongoDB", level: "Intermediate", color: "#47A248", category: "Backend" },
    { icon: xamppIcon, name: "XAMPP", level: "Intermediate", color: "#FB7A24", category: "Backend" },
    
    // 工具类技能
    { icon: githubIcon, name: "GitHub", level: "Advanced", color: "#181717", category: "Tools" },
    { icon: gitIcon, name: "Git", level: "Advanced", color: "#F05032", category: "Tools" },
    { icon: swiftIcon, name: "Swift", level: "Intermediate", color: "#FA7343", category: "Tools" },
    { icon: processingIcon, name: "Processing", level: "Intermediate", color: "#333333", category: "Tools" },
    { icon: AzureIcon, name: "Azure", level: "Intermediate", color: "#008AD7", category: "Tools" },
    { icon: vsCodeIcon, name: "VS Code", level: "Advanced", color: "#007ACC", category: "Tools" },
    { icon: saleforceIcon, name: "Salesforce", level: "Intermediate", color: "#00A1E0", category: "Tools" },
  ];

  // 根据技能分类和熟练度进行排序
  const sortedSkills = skills.slice().sort((a, b) => {
    const levelOrder = ["Advanced", "Intermediate"];
    if (a.category === b.category) {
      return levelOrder.indexOf(a.level) - levelOrder.indexOf(b.level);
    }
    return a.category.localeCompare(b.category);
  });

  // 按照分类显示技能
  const renderSkillsByCategory = (category) => (
    <div key={category}>
      <h3>{category} Skills</h3>
      <div className="skills-grid-layout">
      {sortedSkills
        .filter(skill => skill.category === category)
         .map((skill, index) => (
         <div className="skill-item" key={index} data-aos="fade-up">
            <img  src={skill.icon} alt={`${skill.name} icon`} style={{ filter: `drop-shadow(2px 4px 6px ${skill.color})` }} />
         <div className="skill-info">
          <h5>{skill.name}</h5>
          <p>{skill.level}</p>
         </div>
    </div>
  ))}
      </div>
    </div>
  );

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>My Skills</h2>
              <p>Here are the languages and tools I have worked with. Hover over the icons to see my proficiency level.</p>
              
              {["Frontend", "Backend", "Tools"].map(category => renderSkillsByCategory(category))}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
