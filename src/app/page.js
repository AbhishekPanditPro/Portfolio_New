"use client";
import Image from "next/image";
import "./page.css";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Typewriter from "./components/Typewriter"

import { useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);
  const [blur, setBlur] = useState(false);

  const [learnMore, setLearnMore] = useState(false);
  const [clickMain, setClickMain] = useState(true);


  






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
      name: "github",
      href: "https://github.com/AbhishekPanditPro",
      src: "/github.svg",
    },
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/abhishek-pandit1/",
      src: "/linkedin.svg",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/ab.hishekpandit/",
      src: "/instagram.svg",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/abu.abhishek100",
      src: "/facebook.svg",
    },
  ];


  // const blurBackground = ()=>{
  //   const main = document.getElementsByTagName("main")
  //   main[0].style.backgroundColor = "white"
  //   console.log("i ma printing the element")
  //   console.log(main);;
  // }

  const info = [`I am a fast paced, collaborative and  solution-driven software engineer. I graduated this past spring with a major in Computer Science from Kent State University. I have a couple years of project experience across school teams and a current internship.` 
  ,`I am working as a software engineer intern at  Gao Tek, I am working with customizing a WordPress E Commerce website where I am handling bulk CSV product imports and building plugin-free PHP/JS features like an AJAX live search. I emphasized in web fundamentals, REST APIs, data modeling and documentation. `,`
  


I’ve also contributed to a more than half-dozen projects where I partnered with classmates, faculty to turn requirements into working systems. Some of the projects that I worked are, first, Image Explainer app. It was primarily build for visually impaired people to recognize surrounding with a voice. I built using a react native with gemini vision AI application from the ground zero. At the end of the project, I was able to ship the app to the production level. Second, I worked on a website called NEO Volleyball. It was built for automating excel based workflow into digital workflow. I was able to automate most of the digital tasks including with team and game scheduling and data analytics. Third, I worked in ecommerce food delivery project were I leveraged the use of cognitive principles to attract users, engage them for a longer period of  time merged with interactive UI/UX design. I also worked in some Machine Learning projects and researched in inference LLMs and blockchain.`]




  return (
    <main>
      <Navbar />
      <div className="backgroundBlur">
      <div
        id="deployment-631ca725-945a-4602-ad6e-d2459413e64a"
        style={{
          display: showChatbot ? "block" : "none",
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "400px",
          height: "500px",
          zIndex: 1000,
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      />
    </div>
     
      <script
        src="https://studio.pickaxe.co/api/embed/bundle.js"
        defer
      ></script>

  
    
      <button
        onClick={() => {setShowChatbot(!showChatbot);}}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          zIndex: 1001,
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.3s ease",
          transform: showChatbot ? "rotate(90deg)" : "rotate(0deg)",

        }}
        onMouseEnter={(e) => {
          if (!showChatbot) {
            e.target.style.backgroundColor = "#0056b3";
            e.target.style.transform = "scale(1.1)";
          }
        }}
        onMouseLeave={(e) => {
          if (!showChatbot) {
            e.target.style.backgroundColor = "#007bff";
            e.target.style.transform = "scale(1)";
          }
        }}
      >
        {showChatbot ? "×" : "💬"}
      </button>
      
      {/* this pops up after clicking the Learn More */}
      {learnMore && (<div className="myInformation" onClick={() =>{
        setLearnMore(false)
      }}>
        <div className="allInformation"onClick={(e)=>{e.stopPropagation()}} >
          <h2>About Me</h2>
          <hr />
          {info.map((each_info)=>(
            <p className="textInformation" key={each_info}>{each_info}</p>
          ))}
          <button className="closeInformation" onClick={()=>{setLearnMore(false)}}>Close</button>
            
        </div>
      </div>)}

      <Section id="home" title="Home">
      
        
        <div className="mainContainer">
          <div className="container2">
            <div className="aboutMe">
              <div className="myname">
                <p className="hi">Hi, I&apos;m</p>

                <h1>
                  <Typewriter
                    texts={[
                      "Abhishek Pandit",
                      "Software Engineer",
                      "Full Stack Developer",
                      "ML Developer"
                    ]}
                    period={2000}
                  />
                </h1>
              </div>
              <p id="bio">
                a software engineer who thrives at the intersection of
                machine-learning research and full-stack development, always
                looking to turn ideas into scalable products; off the keyboard,
                you&apos;ll catch me chasing a soccer ball or hiking the nearest
                trail.
              </p>
              <div className="medias">
                <button className="moreAbout" onClick={()=> {
                  setLearnMore(true);
                  setClickMain(false);
                }}>Learn More</button>
                {socialLinks.map((link) => (
                  <a
                    className="socialUrl"
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
                src="/abhi.png"
                fill
              
                alt="My Pic"
                onClick={() => setShowChatbot(!showChatbot)}
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
                    <hr />
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
            <Image
                className=""
                src="/download.svg"
                 width={40}
                height={40}
                
              alt="resume download"
               
              />
            Resume
          </button>
        </div>
      </Section>
    </main>
  );
}



