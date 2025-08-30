import React, { useMemo, useState } from "react";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

 // =========== 3D Tilt Card (per-card state) ===========//
 function ServiceCard({ service, index, expanded, toggleExpand }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, dz: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - card.left) / card.width;
    const py = (e.clientY - card.top) / card.height; 
    // =========== rotateY & rotateX =========== //
    const ry = (px - 0.5) * 14;
    const rx = (0.5 - py) * 14;
    setTilt({ rx, ry, dz: 16 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0, dz: 0 });

  // ========= two slide-in directions (left/right) + subtle 3D entry ============= //
  const itemVariants = useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 40,
        x: index % 2 === 0 ? -24 : 24,
        rotateX: -8,
      },
      show: {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        transition: { type: "spring", stiffness: 140, damping: 18, delay: index * 0.05 },
      },
    }),
    [index]
  );

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="relative text-center p-5 rounded-2xl shadow-lg bg-white/90 dark:bg-neutral-900/70 backdrop-blur border border-black/5 dark:border-white/5 transition-all duration-300 group"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(${tilt.dz}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      <motion.img
        src={service.imgSrc}
        alt={service.title}
        className="w-20 h-20 mx-auto rounded-xl mt-2 will-change-transform"
        style={{ transform: "translateZ(28px)" }}
        initial={{ opacity: 0, y: 12, rotateY: -8 }}
        whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.06 }}/>

      <motion.h2 className="mt-3 text-base md:text-sm font-semibold tracking-tight"
        style={{ transform: "translateZ(22px)" }}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25, delay: 0.08 }}>
        {service.title}
      </motion.h2>

      <button onClick={() => toggleExpand(service.id)}
        className="block mt-3 text-sm mx-auto rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
        style={{ transform: "translateZ(18px)" }}
        aria-expanded={expanded === service.id}
        aria-controls={`svc-${service.id}-panel`}>
        <TbArrowLeftFromArc className={`inline-block text-lg transition-transform duration-300 ${expanded === service.id ? "rotate-180" : ""}`} />
      </button>

      {/* Expanded Panel */}
      <motion.div
        id={`svc-${service.id}-panel`}
        initial={false}
        animate={expanded === service.id ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden mt-2"
        style={{ transform: "translateZ(12px)" }}>
        <ul className="list-disc list-inside text-sm text-left space-y-1">
          {service.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
        <Link to="#" className="mt-3 inline-block text-sm font-medium hover:text-[#008DDA] focus:outline-none focus:ring-2 focus:ring-[#008DDA] rounded-xl">
          Read More
        </Link>
      </motion.div>

      {/* Subtle Gloss/Light following the cursor */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
          "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.12), transparent 40%)",
        }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
      />
    </motion.div>
  );
}

const ServicesComponents = () => {
  //=========== useState part start ==========//
  const [expanded, setExpanded] = useState(null);
  const [servicesToShow, setServicesToShow] = useState(8); // show more initially for nicer slides
  //=========== useState part end ==========//

  //========== allServices part start ========//
  const allServices = [
    {
      id: 1,
      title: "Firebase Development",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "/images/firebase.png",
      details: [
        "Authentication",
        "Realtime Database & Firestore",
        "Cloud Storage",
        "Firebase Hosting",
        "Cloud Functions",
        "Firebase Analytics",
        "Firebase Crashlytics",
        "Firebase Remote Config",
        "Firebase Cloud Messaging (FCM)",
      ],
    },
    {
      id: 2,
      title: "Visual Branding API",
      description:
      "A aliquam hac quis habitant dolor nunc metus sed. Sed commodo mauris purus molestie fames.",
      imgSrc: "/images/brand.png",
      details: ["Brand.dev", "BrandAPI", "MyBrandAPI"],
    },
    {
      id: 3,
      title: "React Development",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo mauris purus molestie fames.",
      imgSrc: "/images/react.png",
      details: [
        "Custom React Website design ",
        "React Component Library Development",
        "React Performance Optimization",
        "React-based Single Page Applications (SPA)",
        "UI/UX Design with React",
        "React Web Maintenance",
        "Cloud Services Integration",
        "Security Solutions for React",
        "Custom React Dashboard Development",
      ],
    },
    {
      id: 4,
      title: "Web Development",
      description:
      "Diam lacus faucibus eget dolor phasellus aliquam sit in. Eget ultricies turpis elit augue cras mauris lorem mauris.",
      imgSrc: "/images/webdevelop.png",
      details: [
        "Custom Website Development",
        "Front-end Web Development",
        "Back-end Web Development",
        "E-commerce Web Development",
        "Web Application Development",
        "UI/UX Design and Prototyping",
        "Web Hosting and Deployment",
        "Web Security Services",
        "Website Redesign & Maintenance",
        "Cloud Services & Web App Hosting",
        "Real-Time Web Applications",
      ],
    },
    {
      id: 5,
      title: "AI Simple Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc:
      "https://images.unsplash.com/photo-1678483789107-0029c61fdcca?q=80&w=1528&auto=format&fit=crop",
      details: ["Machine Learning", "AI Chatbots", "Data Analysis", "Automation Solutions"],
    },
    {
      id: 7,
      title: "Node.js Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/node.png",
      details: ["API Creation", "Server-side Logic", "Authentication", "Database Integration"],
    },
    {
      id: 8,
      title: "Backend Express.js Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/express.png",
      details: ["Middleware Setup", "Routing", "REST API Development", "Authentication"],
    },
    {
      id: 9,
      title: "Database MongoDB Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/mongodb.png",
      details: ["Data Modeling", "Mongoose ODM", "Aggregation Pipelines", "Indexing"],
    },
    {
      id: 10,
      title: "Mongoose Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/mongoose.png",
      details: ["Schema Design", "Population", "Validation", "Hooks"],
    },
    {
      id: 11,
      title: "APIs Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/apis.png",
      details: ["RESTful APIs", "Postman Testing", "Authentication", "CRUD Operations"],
    },
    {
      id: 12,
      title: "EJS Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/ejs.png",
      details: ["Template Engine", "Layout Management", "Dynamic Rendering", "Server-side Views"],
    },
    {
      id: 13,
      title: "Postman Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/postman.png",
      details: ["API Testing", "Environment Setup", "Collections", "Automation"],
    },
    {
      id: 14,
      title: "Nodemon Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/nodemon.png",
      details: ["Auto-Reload", "Local Dev Setup", "Efficient Debugging"],
    },
    {
      id: 15,
      title: "HTTPS Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "/images/https.png",
      details: ["SSL Certificates", "Secure Servers", "HTTPS Setup", "Data Protection"],
    },
  ];
  
  // ========== allServices part end ======== //

  // ======== Toggle the expanded service ========== //
  const toggleExpand = (id) => setExpanded((prev) => (prev === id ? null : id));

  // ======== Load more services ========== //
  // ============= Container variants for staggered mounting ============ //
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl mt-11 font-semibold">
        I'm Jahidul Islam — Full Stack Developer from Uttara, Azampur, Dhaka!
        </h2>
        <h3 className="text-lg md:text-xl underline mt-2">My All Skills!</h3>
        <p className="mt-4 text-sm md:text-base text-black/80 dark:text-white/80">
          An experienced Full Stack Developer skilled in React, Node.js, and REST APIs, with a strong focus on building dynamic, <br />
          user-centric web applications. Dedicated to writing clean, scalable code and delivering seamless digital experiences.
        </p>
      </div>

      {/* Services Grid with two kinds of 3D slide animations: alternating left/right + tilt on hover */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {allServices.slice(0, servicesToShow).map((service, idx) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={idx}
            expanded={expanded}
            toggleExpand={toggleExpand}
          />
        ))}
      </motion.div>     
    </div>
  );
 };

 // ============= Services Components End =========== // 
 export default ServicesComponents;
