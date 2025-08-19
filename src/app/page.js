"use client";
import Image from "next/image";
import "./page.css";
import Navbar from "./components/navbar";
import Section from "./components/section";

import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  const projects = [
    {
      id: "project1",
      title: "Accessing Student Performance",
      field: "ML Model",
      description:
        "Ever wonder if we can predict whether a student will get a math problem right or wrong? Our team took on this challenge using the MathE learning dataset. We developed a sophisticated model using a powerful machine learning technique called XGBoost to analyze various factors like the student&apos;s country, the math topic, and even the specific question. To make our predictions even smarter, we engineered new insights from the data, creating unique metrics for student skill, question difficulty, and even the difficulty of an entire topic. After extensive fine-tuning, our model successfully achieved an accuracy of 72.35%, providing a promising new tool that could one day help identify struggling students and improve how math is taught online.",
      linkk:
        "https://github.com/Overfitters-Anonymous/MLDL-Final-Project/blob/main/MathE%20dataset%20analysis%20with%20XGBoost%20and%20Deep%20Learning%20models%20Final%20Report.pdf",
    },
    {
      id: "project2",
      title: "Image Explainer",
      field: "Gen AI App",
      description:
        "Ever wished you could get a little more insight into the world around you? With Image Explainer, you can. Simply snap a photo, and our app, powered by Gemini AI, will describe what it sees in detail. We originally created this as a tool to help visually impaired individuals explore their environment, and now we&apos;ve made it available for everyone to enjoy. Plus, with audio descriptions enabled by default, you can hear the story behind your pictures.",
      linkk: "https://github.com/AbhishekPanditPro/Lamar",
    },
    {
      id: "project3",
      title: "NEO Volleyball",
      field: "Website",
      description:
        "The North East Ohio Volleyball Platform is a comprehensive digital system designed to transform volleyball management from traditional methods to a more streamlined and efficient process. Our mission is to enhance accessibility for all users—including League Managers, Referees, and Players—by providing a secure, user-friendly platform with role-based features tailored to their specific tasks. By moving record-keeping and performance analytics online, the system offers powerful tools for game scheduling, team management, and up-to-date league statistics, helping to effectively streamline the management of multiple leagues.",
      linkk:
        "https://github.com/CapstoneNEOproject/volleyball_system/tree/main",
    },
    {
      id: "project4",
      title: "FoodieGoodie",
      field: "Website",
      description:
        "Have you ever wondered what makes a website so enjoyable that you can&apos;t wait to come back? That&apos;s the core question we explored with FoodieGoodie. This project is more than just an e-commerce site; it&apos;s a deep dive into how thoughtful, cognitive design can create a delightful user experience. We experimented with everything from the psychology of colors and the shape of a food container to a playful, animated checkout system. The goal was to discover how these small details could work together to help users navigate faster, more efficiently, and ultimately, make them excited to return. Built from the ground up with HTML, CSS, and JavaScript, FoodieGoodie is our playground for understanding how to make web interactions feel less like a task and more like a joy.",
      linkk: "https://github.com/TheRealestDiehl/FoodieGoodie",
    },
    {
      id: "project5",
      title: "Pixel Painter",
      field: "Website & Game",

      description:
        "Pixel Painter is more than just a game; it&apos;s the result of a journey to experience what it&apos;s truly like to work in a real-world software engineering team. From the start, our goal was to build not only a fun game and website using p5.js, HTML, and CSS but also to embrace the entire development lifecycle. We challenged ourselves by applying professional methodologies like Agile and Waterfall, ensuring everything we built was rigorously tested, optimized, and retested for quality. To keep our team in sync and our process smooth, we used advanced collaboration tools like GitHub&apos;s Kanban boards and Actions, mirroring a modern tech workflow. This project was our opportunity to put classroom theories into practice, culminating in a final product that we were proud to showcase.",
      linkk:
        "https://github.com/Delta-Group-Software-Engineering-2023/Delta-10_Pixel_Painter_Software_Engineering_Spring2023",
    },
    {
      id: "project6",
      title: "Drishti Nepal",
      field: "Mobile Application",
      description:
        "For the tens of thousands of visually impaired individuals in Nepal, simple daily tasks like paying for groceries can be a significant challenge, creating moments of uncertainty and dependence. Project Drishti was born from a desire to address this, offering an acute insight into a world of possibilities through AI. Our mobile application empowers visually impaired users by instantly recognizing Nepalese currency bills through their phone&apos;s camera and announcing the value aloud in the Nepali language. Designed with deep respect for our users, the app works entirely offline, is completely free of ads for a smooth experience, and includes a history feature to help track spending. Drishti is more than just a currency reader; it&apos;s an open-source, community-driven initiative with a vision to become a full-fledged daily assistant, and we invite everyone to help us build a more accessible world.",
      linkk:
        "https://drishtinepal.medium.com/drishti-an-acute-insight-into-ai-407e417028ce",
    },
  ];

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abhishek_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const logo = () => {
    const link = document.createElement("a");
    link.href = "https://github.com/AbhishekPanditPro";
    link.click();
  };

  const socialLinks = [
    {
      name: "facebook",
      href: "https://www.facebook.com/abu.abhishek100",
      src: "/facebook.png",
    },
    {
      name: "github",
      href: "https://github.com/AbhishekPanditPro",
      src: "/github.png",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/abhishek-pandit1/",
      src: "/linkedin.png",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/ab.hishekpandit/",
      src: "/instagram.png",
    },
  ];

  return (
    <main>
      <Navbar />
      
      {/* Chatbot Container - Hidden by default */}
      <div 
        id="deployment-631ca725-945a-4602-ad6e-d2459413e64a" 
        style={{
          display: showChatbot ? 'block' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          width: '400px',
          height: '500px',
          zIndex: 1000,
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}
      />
      <script src="https://studio.pickaxe.co/api/embed/bundle.js" defer></script>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 1001,
          fontSize: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: showChatbot ? 'rotate(45deg)' : 'rotate(0deg)'
        }}
        onMouseEnter={(e) => {
          if (!showChatbot) {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (!showChatbot) {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'scale(1)';
          }
        }}
      >
        {showChatbot ? '×' : '💬'}
      </button>

      <Section id="home" title="Home">
        <div className="mainContainer">
          <div className="container2">
            <div className="aboutMe">
              <div className="myname">
                <h1>Abhishek Pandit</h1>
              </div>
              <p id="bio">
                I&apos;m a software engineer who thrives at the intersection of
                machine-learning research and full-stack development, always
                looking to turn ideas into scalable products; off the keyboard,
                you&apos;ll catch me chasing a soccer ball or hiking the nearest
                trail.
              </p>
              <div className="medias">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      className="logo"
                      src={link.src}
                      width={45}
                      height={45}
                      alt={link.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="myimage">
              <Image
                className="roundedImg"
                src="/abhishek.png"
                fill
                sizes="(max-width: 768px) (max-width: 300px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="My Pic"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="mainProject">
          <ul className="listProject">
            {projects.map((project) => (
              <li
                key={project.id}
                className="projects"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="project-background"></div>
                <h3>{project.title}</h3>
                <h4>{project.field}</h4>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (project) {
                return (
                  <>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    {project.linkk && (
                      <a
                        href={project.linkk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project
                      </a>
                    )}
                  </>
                );
              }

              return <p>Project details not found.</p>;
            })()}

            <button
              onClick={() => setSelectedProject(null)}
              className="project-close"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Section id="resume" title="Resume">
        <div className="mainResume">
          <div className="iframe-container">
            <iframe src="/resume.html" />
          </div>

          <button className="download" onClick={downloadPDF}>
            DOWNLOAD RESUME
          </button>
        </div>
      </Section>
    </main>
  );
}