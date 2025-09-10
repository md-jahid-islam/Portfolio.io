import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt,  FaFigma, FaNodeJs, FaRegCalendarAlt,
  FaGithub,
  FaBootstrap
 } from 'react-icons/fa';
 import { DiMongodb } from 'react-icons/di';
 import { SiTailwindcss, SiFirebase, SiExpress, SiRsocket, SiNodemon, SiPostman } from 'react-icons/si';
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

 // ========= Academy Education Section part ========= // 
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
 // ========= Academy Education Section end ========= // 

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

 // ========= Professional Experience Section partstart ======== //
 const ExperienceSection = () => {
  const experiences = [
    {
      period: 'Creative It Institute — 2024',
      title: 'Frontend Development With React',
      description:
        'Hands-on frontend experience using Html5, Css3, Javascript, React, Redux, Tailwind CSS and Firebase. Focus on component architecture, responsive UI and accessibility.'
    },
    {
      period: 'Creative It Institute — 2025',
      title: 'Node.js & Backend (Express, MongoDB)',
      description:
      'Working knowledge of REST APIs, authentication (JWT), data modelling with Mongoose and connecting frontend to backend services.'
    }
  ];
   // ========= Professional Experience Section part end ======== //


  return (
    <section className="mt-8 bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Learned Experience</h2>
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

 // ========== Skill Pill start ========== // 
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

  // ========== Skill Pill end ========== // 
 // ========== Professional Skill Section part start ========== //
 const SkillSection = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Boostrap', icon: <FaBootstrap /> },
    { name: 'React-Redux', icon: <FaReact /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Git Bash', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Mongoose', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'Postmen', icon: <SiPostman /> },
    { name: 'Nodemoon', icon: <SiNodemon /> },
    { name: 'Socket.io', icon: <SiRsocket /> },
    { name: 'Cors', icon: <FaNodeJs /> },
    { name: 'Jwt', icon: <FaNodeJs /> },
    { name: 'Chart.js', icon: <FaNodeJs /> },
    { name: 'script.js', icon: <FaNodeJs /> },
    { name: 'Becrip type', icon: <FaNodeJs /> },
  ];
 
 // ========== Professional Skill Section part end ========== //

  return (
    <section className="mt-8 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 md:p-10 shadow-lg">
      <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">My Skills works Experience!</h2>
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
 
 // =========== Main Component =========== // 
 export default MainComponent;
