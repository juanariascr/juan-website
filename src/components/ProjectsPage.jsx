import React from 'react';
import styles from './Cards.module.css'; // Use the shared card styles

const projects = [
  // ... your project data
];

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.cardTitle}>{project.title}</h2>
          <p className={styles.cardText}>{project.description}</p>
          <p className={styles.cardSubtitle}><strong>Technologies:</strong> {project.technologies}</p>
          <a href={project.link} className={styles.cardLink}>View Project</a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;