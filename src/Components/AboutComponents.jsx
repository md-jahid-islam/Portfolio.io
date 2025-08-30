// import { div } from 'framer-motion/client';
// import React from 'react';
// import CountUp from 'react-countup';
// import { DiMongodb } from 'react-icons/di';
// import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaFigma, FaNode, FaNodeJs, FaCashRegister } from 'react-icons/fa';
// import { GiCorset } from 'react-icons/gi';
// import { MdHttps } from 'react-icons/md';
// import { SiTailwindcss, SiJquery, SiFirebase, SiExpress, SiPostman, SiNodemon, SiJsonwebtokens, SiMongoosedotws } from 'react-icons/si';
// import { TbCrystalBall, TbPhysotherapist } from 'react-icons/tb';

//  //========= About Section part start ========//
//  const AboutSection = () => (
//  <section className="about-section container mx-auto mt-5 px-4 sm:px-6 md:px-8 lg:px-16 p-8 rounded-lg shadow-lg">
//    {/* Section Title */}
//    <div className="relative text-center sm:text-left pt-28 flex justify-center items-center flex-wrap ">
//      <h2 className="text-3xl font-bold underline text-gray-900 dark:text-gray-300">About Me!</h2>
//      <div className="absolute sm:w-32 mx-auto sm:mx-0 "></div>
//    </div>
//    {/* About Details */}
//    <div className=" mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center">
//      <p className=" text-gray-900 dark:text-gray-300 leading-relaxed text-center font-bold lg:text-left lg:p-10 max-w-full sm:max-w-xl lg:max-w-3xl border-e-4 ">
//      Hi I'm Jahidul Islam is a passionate Frontend Developer specializing in React. He has over two years of experience building responsive and dynamic web applications using modern tools like React, Redux, and Tailwind CSS. With a keen eye for design, Jahidul also excels in integrating UI/UX principles, leveraging Figma for prototyping. He is proficient in technologies like JavaScript, Bootstrap, and Firebase. Currently, he is enhancing his backend skills by learning Node.js. Jahidul is committed to delivering high-quality, user-centric solutions. He is available for freelance opportunities and thrives on continuous learning and growth!.
//      </p>
    
//    {/* About Text Typewriter end */}

//      {/* Personal Details start */}
//      <div className="text-sm sm:text-base mt-10 lg:mt-0 lg:ml-10 text-gray-900 dark:text-gray-300 font-bold ">
//        {[{
//          label: 'Name', value: 'Jahidul Islam'
//        }, {
//          label: 'Nationality', value: 'Bangladesh'
//        }, {
//          label: 'Phone', value: '+8801540587085'
//        }, {
//          label: 'Email', value: 'jahidulislamwebbd@gmail.com'
//        }, {
//          label: 'Experience', value: '3+ years'
//        }, {
//          label: 'Freelance', value: 'Available'
//        }, {
//          label: 'Skype', value: 'jahidul Islam'
//        }, {
//          label: 'Language', value: 'Bangla, English'
//        }].map((item, index) => (
//          <div key={index} className="mb-2 flex space-x-2">
//            <span className="font-bold">{item.label}:</span>
//            <span>{item.value}</span>
//          </div>
//        ))}
//      </div>
//    </div>
//   </section>
//  );
//  {/* Personal Details end */}
//  //========= About Section part end ========//

//  //========== EducationSection part start ========//
//  const EducationSection = () => (
//  <div className="education-section container px-4 sm:px-6 lg:px-16 bg-gradient-to-l  p-8 rounded-lg shadow-lg font-semibold">
//    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 pt-10 text-center sm:text-left underline ">My Academy Education Background!</h2>
//    <div className="divider mt-2 mb-4 text-gray-900 dark:text-gray-300 font-bold "></div>

//    {[{
//      year: 'Degree ongoing (BSS-Department) Bachelor of Social Science-2025!',
//      title:'Brindhabon Govt College Habiganj!',
//      description: 'Jahidul Islam is a student at Habiganj Govt College, pursuing a Bachelors degree in Social Science with a focus on (Humanities). He began his studies in 2025.'
//    }, {
//      year:'Higher Secondary Certificate. -2023!',
//      title:'Kabir College Academy, Habiganj,',
//      description: 'Jahidul Islam completed his Higher Secondary Certificate (HSC) in (Humanities) at Habiganj Kabir College Academy in 2023.'
//    }, {
//      year:'Secondary School Certificate -2021!',
//      title:'Hazrat Shahjala (R.) High School Baniachong , Habiganj!',
//      description: 'Jahidul Islam completed his Secondary School Certificate (SSC) in (Commerce) at Hazrat Shahjala (Ra.) High School, Baniachong, Habiganj, in 2021.'
//    }].map((edu, index) => (
//      <div key={index} className="education-item mt-12">
//        <div className=" py-2 px-4  text-gray-900 dark:text-gray-300 font-semibold shadow-md transition text-xl rounded-md ">{edu.year}</div>
//        <h3 className=" title font-bold text-sm sm:text-base lg:mt-0  mt-2 text-gray-900 dark:text-gray-300">{edu.title}</h3>
//        <p className="description font-bold text-sm sm:text-base lg:mt-0  mt-2 text-gray-900 dark:text-gray-300">{edu.description}</p>
//      </div>
//    ))}
//  </div>
//  );

//  //========== EducationSection part end ========//
//  //========== ExperienceSection part start ========//
//  const ExperienceSection = () => (
//  <div className="experience-section container mt-[20px] px-4 sm:px-6 lg:px-16 bg-gradient-to-r text-gray-900 dark:text-gray-300 p-8 rounded-lg shadow-lg">
//    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-300 text-center sm:text-left underline ">My technology Experience Background!</h2>
//    <div className="divider text-gray-900 dark:text-gray-300] mt-2 mb-4"></div>
   
//    {[{
//      period:'Creative It Institute Uttara Dhaka Bangladesh -2024!',
//      title:'Frontend web Development, with React Development!',
//      description: 'As a Frontend Developer specializing in React, Jahidul Islam has experience with various web technologies including Html,Css, Javascript, React, Redux, Tailwind CSS, Bootstrap, Frameworks,Firebase,Firebase Authentication  is the process of verifying a users identity or the authenticity of a document It s used to protect systems, data, and networks from attacks. How it works Identification The user establishes their identity, usually with a username Authorization The system verifies that the user has permission to access the system Credentials The user provides an agreed-upon piece of information, such as a password, card, fingerprint, or voice recognition Why it important Authentication protects systems, data, and networks from attacks Its used when a server needs to know whos accessing its information or site Its used when a client needs to know that the server is who it claims to be Examples Multi-factor authentication  Requires users to provide two forms of verification before gaining access Single sign-on (SSO) Streamlines the verification process so that users only have to provide credentials at one access point!! '
//    }, { 
//      period:'Creative It Institute Uttara Dhaka Bangladesh -2025!',
//      title:'Node.Js Backend Developments Express.js Database MongoDB!',
//      description: 'Jahidul Islam is currently learning Node.js at Creative IT Institute. My skills include Backend Express.js ,Database MongoDB,Mongoose,Postman,API Development,RESTful API,Authentication and Authorization,Middleware,Error Handling,First Steps with Node.js,Node.js Basics,Node.js Modules,Node.js FiLesystem,Node.js HTTP Modele,Node.js Express.js,Node.js Moddules,Node.js NPM,Node.js Modules,Nodee.js!'
//    }].map((exp, index) => (
     
//      <div key={index} className="experience-item mt-12">
//        <div className="period py-2 px-4  text-gray-900 dark:text-gray-300 font-semibold shadow-md transition text-xl rounded-md">{exp.period}</div>   
//        <h3 className="title font-bold mt-5 sm:text-base lg:mt-0  text-gray-900 dark:text-gray-300 ">{exp.title}</h3>     
//        <p className="description  mt-2 text-gray-900 dark:text-gray-300 sm:text-base lg:mt-0 ">{exp.description}</p>     
//      </div>
//    ))}
   
//  </div>
//  );

//  //========== ExperienceSection part end ========//
//  //============= SkillSection part start ==========//
//  const SkillSection = () => (
//  <div className="skill-section container mt-16 px-4 sm:px-6 lg:px-16  p-8 rounded-lg shadow-lg">
//    <div className="flex justify-center items-center relative mb-4">
//      <h2 className="relative text-2xl font-bold text-gray-900 dark:text-gray-300 text-center sm:text-left underline "> My Coding Skills Fornt end with react.js || and Node.js Backend <br /> <p className=' flex justify-center items-center'>Express.js Database MongoBD!</p></h2>
//      <h3 className="absolute sm:w-[200px] pt-10"></h3>
//    </div>
//    <div className="divider mt-[100px] mb-8"></div>

//    <div className="skills grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-[40px] sm:mt-16">
//      {[{
//        name: 'HTML5', proficiency: 100, icon: <FaHtml5 size={40} className="text-[#E34F26]" />
//      }, {
//        name: 'CSS3', proficiency: 100, icon: <FaCss3Alt size={40} className="text-[#1572B6]" />
//      }, {
//        name: 'JavaScript', proficiency: 85, icon: <FaJs size={40} className="text-[#F7DF1E]" />
//      }, {
//        name: 'jQuery', proficiency: 95, icon: <SiJquery size={40} className="text-[#0769AD]" />
//      }, {
//        name: 'Bootstrap', proficiency: 90, icon: <FaBootstrap size={40} className="text-[#563D7C]" />
//      }, {
//        name: 'Figma', proficiency: 100, icon: <FaFigma size={40} className="text-[#F24E1E]" />
//      }, {
//        name: 'Tailwind CSS', proficiency: 75, icon: <SiTailwindcss size={40} className="text-[#38BDF8]" />
//      }, {
//        name: 'React Redux', proficiency: 90, icon: <FaReact size={40} className="text-[#61DAFB]" />
//      }, {
//        name: 'React Router DOM', proficiency: 80, icon: <FaReact size={40} className="text-[#61DAFB]" />
//      }, {
//        name: 'Git & GitHub', proficiency: 100, icon: <FaGitAlt size={40} className="text-[#F1502F]" />
//      }, {
//        name: 'Slick Slider', proficiency: 90, icon: <SiFirebase size={40} className="text-[#35e29a]" />
//      }, {
//        name: 'Firebase', proficiency: 80, icon: <SiFirebase size={40} className="text-[#FFCB2B]" />
//      }, {
//       name: 'Next.js', proficiency: 75, icon: <FaJs size={40} className="text-[#e434cc]" />    
//       }, {
//        name: 'Node.js', proficiency: 80, icon: <FaNode size={40} className="text-[rgb(43,93,255)]" />
//        }, {
//        name: 'Express', proficiency: 80, icon: <SiExpress size={40} className="text-[rgb(224,54,240)]" />
//        }, {
//        name: 'MongoDB', proficiency: 80, icon: <DiMongodb size={40} className="text-[#3546e7]" />
//        }, {
//        name: 'Mongoose', proficiency: 80, icon: <SiMongoosedotws size={40} className="text-[#f539bc]" />
//        }, {
//        name: 'Postman', proficiency: 80, icon: <SiPostman size={40} className="text-[#eb5136]" />
//        }, {
//        name: 'Ejs', proficiency: 80, icon: <FaNodeJs size={40} className="text-[#e2348b]" />
//        }, {
//        name: 'Nodemon', proficiency: 80, icon: <SiNodemon  size={40} className="text-[#fa36a8]" />
//        }, {
//        name: 'CORS', proficiency: 80, icon: <GiCorset size={40} className="text-[rgb(55,224,188)]" />  
//        }, {
//        name: 'JWT', proficiency: 80, icon: <SiJsonwebtokens size={40} className="text-[#3eee37]" />
//        }, {
//        name: 'HTTPS', proficiency: 80, icon: <MdHttps size={40} className="text-[rgb(43,213,255)]" />
//        }, {
//        name: 'Input Validation', proficiency: 80, icon: <FaCashRegister size={40} className="text-[rgb(142,43,255)]" />      
//        }, {
//        name: 'APIs', proficiency: 80, icon: <TbPhysotherapist size={40} className="text-[#2b39ff]" />      
//        }, {
//        name: 'bcrypt', proficiency: 80, icon: <TbCrystalBall size={40} className="text-[rgb(255,43,43)]" />
//      }].map((skill, index) => (
//        <div key={index} className="skill-item text-center transform transition duration-300 hover:scale-110">
//          {/* Proficiency Circle with CountUp */}
//          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-[#c9baba] flex justify-center items-center overflow-hidden transform transition-all duration-500 hover:bg-[rgb(32,54,255)] hover:text-white">
//            {/* Gradient Background */}
//            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 hover:bg-[#c0b0b0] opacity-30"></div>
//            {/* Proficiency Percentage */}
//            <CountUp end={skill.proficiency} suffix="%" duration={2} className="text-xl sm:text-2xl lg:text-3xl font-bold border-[#c0b0b0] hover:bg-[#c0b0b0] z-10" />
//          </div>

//          {/* Icon Inside Circle with Hover Effects */}
//          <div className="icon absolute inset-0 flex justify-center items-center transform transition-all duration-500">
//            <div className=" p-4 rounded-full border-4 text-gray-900 flex justify-center items-center transform transition-all duration-300 hover:bg-[#b8aaaa] hover:text-white hover:scale-110">
//             {skill.icon}
//            </div>
//          </div>

//          {/* Skill Name */}
//          <p className="skill-name mt-2 text-sm sm:text-base text-gray-900 dark:text-gray-300">{skill.name}</p>
//        </div>
//      ))}
//    </div>
//  </div>
//  );
 
//  //============= SkillSection part end ==========//
//  //============= MainComponent part start ===========//
//  const MainComponent = () => (
//  <div className="main-container">
//    <AboutSection />
//    <EducationSection />
//    <ExperienceSection />
//    <SkillSection />
//  </div>
//  );
 
//  //============= MainComponent part end ===========//
//  export default MainComponent;

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,  FaFigma, FaNodeJs, FaRegCalendarAlt
 } from 'react-icons/fa';
 import { DiMongodb } from 'react-icons/di';
 import { SiTailwindcss, SiJquery, SiFirebase, SiExpress } from 'react-icons/si';
 import { MdEmail, MdPhone } from 'react-icons/md';

 // ========== About Section ========== //
 const AboutSection = () => {
  const personal = [
    { label: 'Name:', value: 'Jahidul Islam' },
    { label: 'Nationality:', value: 'Bangladesh' },
    { label: 'Phone:', value: '+8801540587085', icon: <MdPhone className="inline-block ml-1" /> },
    { label: 'Email:', value: 'jahidulislamwebbd@gmail.com', icon: <MdEmail className="inline-block ml-1" /> },
    { label: 'Experience:', value: '3+ years' },
    { label: 'Freelance:', value: 'Available' },
    { label: 'Language:', value: 'Bangla, English' }
  ];

  return (
    <section className=" rounded-2xl shadow-lg p-6 md:p-10 lg:p-12 mt-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1">
          <h2 className="text-3xl font-extrabold mb-3">About Me!</h2>
          <p className="leading-relaxed text-sm md:text-base">
            Hi — I&apos;m <strong>Jahidul Islam</strong>, A dedicated professional with proven ability to connect frontend and backend technologies to deliver cohesive user experiences. Seeking a Full Stack Developer role to utilize expertise in the React and Node.js ecosystems to build robust, high-performance applications and drive product innovation.
          </p>
        </motion.div>

       {/* personal information */}
        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-80 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-inner"
          aria-label="Personal details">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Personal Details</h3>
          <dl className="space-y-2">
            {personal.map((p, i) => (
              <div key={i} className="flex justify-between items-center">
                <dt className="text-sm font-medium text-gray-700 dark:text-gray-300">{p.label}</dt>
                <dd className="text-sm ">{p.value} {p.icon || null}</dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
 };

 const EducationSection = () => {
  const education = [
    {
      year: '2025 — BSS (Ongoing)',
      title: 'Habiganj Govt College',
      description: 'Bachelor of Social Science (Humanities) — currently pursuing.'
    },
    {
      year: '2023 — HSC',
      title: 'Kabir College Academy, Habiganj',
      description: 'Higher Secondary Certificate (Humanities) completed in 2023.'
    },
    {
      year: '2021 — SSC',
      title: 'Hazrat Shahjala (R.) High School, Baniachong',
      description: 'Secondary School Certificate (Commerce) completed in 2021.'
    }
  ];

  return (
    <section className="mt-8 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Education</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((edu, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="p-4 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-700">

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">{edu.title}</h3>
              <time className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1"><FaRegCalendarAlt /> {edu.year}</time>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Creative It Institute — 2024',
      title: 'Frontend Development (React)',
      description:
        'Hands-on frontend experience using React, Redux, Tailwind CSS and Firebase. Focus on component architecture, responsive UI and accessibility.'
    },
    {
      period: 'Creative It Institute — 2025',
      title: 'Node.js & Backend (Express, MongoDB)',
      description:
      'Working knowledge of REST APIs, authentication (JWT), data modelling with Mongoose and connecting frontend to backend services.'
    }
  ];

  return (
    <section className="mt-8 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-4 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.period}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
 };

 // ========== Skill Pill ========== // 
 const SkillPill = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    className="flex flex-col items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
    <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-700">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-gray-100 dark:to-transparent opacity-40" />
      <div className="z-10 text-3xl">{icon}</div>
    </div>
    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</div>
  </motion.div>
 );

 // ========== Skill Section ========== //
 const SkillSection = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Redux', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Figma', icon: <FaFigma /> }
  ];

  return (
    <section className="mt-8 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((s, idx) => (
        <SkillPill key={idx} icon={s.icon} name={s.name} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          <CountUp end={16} duration={2} />+
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Projects completed</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          <CountUp end={2} duration={1.6} />+
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Years experience</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          <CountUp end={2} duration={1.8} />+
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Happy clients</div>
        </div>

        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl text-center shadow-sm">
          <div className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
          <CountUp end={10} duration={1.8} />+
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">UI components</div>
        </div>
      </div>
    </section>
  );
 };

 const MainComponent = () => {
  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
    </main>
  );
 };

 export default MainComponent;
