import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TbArrowLeftFromArc } from "react-icons/tb";

// ======= Single Project Card ======= //
function ProjectCard({ project, index, expanded, toggleExpand }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, dz: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - card.left) / card.width;
    const py = (e.clientY - card.top) / card.height;
    const ry = (px - 0.5) * 14;
    const rx = (0.5 - py) * 14;
    setTilt({ rx, ry, dz: 16 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0, dz: 0 });

  // animation variant
  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 40, x: index % 2 === 0 ? -20 : 20 },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          type: "spring",
          stiffness: 140,
          damping: 18,
          delay: index * 0.05,
        },
      },
    }),
    [index]
  );

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      className="relative text-center p-5 rounded-2xl shadow-lg bg-white/90 dark:bg-neutral-900/70 backdrop-blur border border-black/5 dark:border-white/5 transition-all duration-300 group"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.dz}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-xl mt-2 will-change-transform"
        style={{ transform: "translateZ(28px)" }}
        initial={{ opacity: 0, y: 12, rotateY: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 160, damping: 16 }}
      />

      <motion.h2
        className="mt-3 text-lg font-semibold"
        style={{ transform: "translateZ(22px)" }}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
      >
        {project.title}
      </motion.h2>

      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
        {project.category}
      </p>

      <button
        onClick={() => toggleExpand(project.title)}
        aria-label={`Toggle details for ${project.title}`}
        className="block mt-3 text-sm mx-auto rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
        style={{ transform: "translateZ(18px)" }}
        aria-expanded={expanded === project.title}
        aria-controls={`proj-${project.title}-panel`}
      >
        <TbArrowLeftFromArc
          className={`inline-block text-lg transition-transform duration-300 ${
            expanded === project.title ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded Details */}
      <motion.div
        id={`proj-${project.title}-panel`}
        initial={false}
        animate={expanded === project.title ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden mt-2"
        style={{ transform: "translateZ(12px)" }}
      >
        <div className="flex justify-center gap-4 mt-3">
          <Link
            to={project.liveLink}
            target="_blank"
            className="px-4 py-2 bg-[#FF204E] text-white rounded-full hover:bg-[#008DDA] transition duration-300"
          >
            View Live
          </Link>
          <Link
            to={project.githubLink}
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-[#008DDA] transition duration-300"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ======= Portfolio Main Component ======= //
const Portfolio = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      image: "/images/code.png",
      title: "Code shortener website",
      category: "React",
      liveLink: "https://code-shortener-dash.lovable.app/",
      githubLink:
        "https://github.com/md-jahid-islam/Filter-website-design-Responsive-.git",
    },
    {
      image: "/images/time.png",
      title: "Daily Students Study Plan",
      category: "Html, Css, JavaScript",
      liveLink: "https://routine-plan.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Routine-Plan-.git",
    },
    {
      image: "/images/orbi.png",
      title: "Orbi Project E-Shopping",
      category: "React",
      liveLink: "https://orebi-showp-website-e-commerce.vercel.app/",
      githubLink:
        "https://github.com/md-jahid-islam/OREBI-E-COMMERCE-WEBSITE.git",
    },
    {
      image: "/images/mixedit.png",
      title: "Mixedit-UP",
      category: "React",
      liveLink: "https://mixedit-up-sepia.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Mixedit-UP.git",
    },
    {
      image: "/images/html.png",
      title: "Doctor Care website",
      category: "HTML, CSS, JavaScript",
      liveLink:
        "https://html-css-js-crash-course-doctor-care-project-main.vercel.app/#home",
      githubLink:
        "https://github.com/md-jahid-islam/html-css-js-crash-course-doctor-care-project-main.git",
    },
    {
      image: "/images/filltervercel.png",
      title: "Filtter website E-commerce Brand",
      category: "Brand react react-router-dom react-icons web-vitals react-scripts ",
      liveLink: "https://filter-website-development.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/filter-website-development.git",
    },
    {
      image: "/images/chepsdeals.png",
      title: "Corporate Brand",
      category: "reduxjs toolkit ,testing-library jest-dom , testing-library react ,react-redux, react-router-dom ,react-scripts ,react-slick ,react-toastify ,sass ,slick-carousel ,web-vitals ",
      liveLink: "https://cheap-deals-iota.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Cheap-Deals-E-commerce-Shop.git",
    },
    {
      image: "/images/apple.png",
      title: "Cryp to Apple Website",
      category: " React, gsap react , react-three drei , react-three fiber ,gsap ,three  ",
      liveLink: "https://filter-website-development-xg39.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Apple-Project-design.git",
    },
    {
      image: "/images/furniture.png",
      title: "Doctore Website Branding",
      category: "Html , Css, Javascript , Responsive",
      liveLink: "https://furniture-figma-project.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Furniture-figma-project.git",
    },
    {
      image: "/images/carrental.png",
      title: "Car Rental E-commerce website ",
      category: " aos react react-dom react-icons tailwindcss",
      liveLink: "https://car-rental-website-design.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Car-Rental-website-design.git",
    },   
    {
      image: "/images/traveling.png",
      title: "Traveling",
      category: " react.js react router dom tailwind.css javascript farmwork bootstrap!!",
      liveLink: "https://traveling-jet.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Traveling.git",
    },
    {
      image: "/images/dasboard.png",
      title: "Dasboard",
      category: " date-fns react react-date-range react dom react icons react-router-dom recharts sass",
      liveLink: "https://taberna-dashboard.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/Dashboard-.git",
    },
    {
      image: "/images/Eshop.png",
      title: "News Pro",
      category: "aos react-icons react-dom react-router-dom react-slick slick-carousel ",
      liveLink: "https://e-commerce-shop-five-zeta.vercel.app/",
      githubLink: "https://github.com/md-jahid-islam/E-commerce-shop.git",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id) => setExpanded((prev) => (prev === id ? null : id));

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mt-10">Portfolio!</h2>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
        </p>
      </div>

      {/* Category Buttons */}
     

      {/* Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      >
        {filteredProjects.map((proj, idx) => (
          <ProjectCard
            key={proj.title}
            project={proj}
            index={idx}
            expanded={expanded}
            toggleExpand={toggleExpand}
          />
        ))}
      </motion.div>
    </div>
  );
};

 export default Portfolio;
