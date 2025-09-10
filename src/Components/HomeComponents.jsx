import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

 // ========== Home Components start ========== //
 const HomeComponents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <section>
        <div className="container mx-auto px-4 py-10 mt-[60px] min-h-screen">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2 space-y-6" data-aos="fade-right">
              <h1 className="text-3xl md:text-4xl">
              MD. Jahidul Islam
              </h1>
              <div className="text-lg md:text-xl">
                <Typewriter
                  options={{
                    strings: [
                      'Front-End',
                      'Developer',
                      'with React',
                      'Developer',
                      'Full Stack',
                      'Developer',
                      'with Node.js',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  }}
                />
              </div>
              <div>
                <p className=" text-base md:text-lg max-w-md mx-auto md:mx-0">
                  A dedicated professional with proven ability to connect frontend and backend technologies to deliver cohesive user experiences. Seeking a Full Stack Developer role to utilize expertise in the React and Node.js ecosystems to build robust, high-performance applications and drive product innovation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
                <Link to="/about">
                  <button className="px-6 py-3 rounded-lg shadow-md hover:scale-105 transition bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
                    View Work
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-6 py-3 rounded-lg shadow-md hover:scale-105 transition bg-gradient-to-r from-pink-400 to-red-500 text-white">
                    Contact Me
                  </button>
                </Link>
              </div>
              <div>
                <h2 className="text-md md:text-lg mt-6">
                  Trusted by World Leading Brands <br /> Portfolio!
                </h2>
              </div>
            </div>

            {/* Right Section */}
            <div className="relative flex flex-col items-center md:w-1/2 pt-10" data-aos="fade-left">
              <img className="w-40 h-40 md:w-56 md:h-56 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg" src="/images/profile.png" alt="Jahidul Islam Profile"/>
              <div className="mt-6 text-center space-y-2">
                <h3 className="text-xl md:text-2xl">
                  MD. Jahidul Islam
                </h3>
                <div className="text-lg md:text-xl ">
                  <Typewriter
                    options={{
                      strings: [
                        'Front-End Developer!',
                        'with React',
                        'Backend',
                        'Node.js!',
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4 text-xl" data-aos="zoom-in">
                <Link className="" to="https://www.facebook.com/jahidul.islam.98621/" target="_blank"aria-label="Facebook"> <FaFacebook className="hover:text-[#3b5998] transition" />
                </Link>
                <Link to="https://github.com/md-jahid-islam" target="_blank" aria-label="GitHub">
                <FaGithub className="hover:text-gray-700  transition" />
                </Link>
                <Link to="https://www.linkedin.com/in/jahidul-islam-a5021b325" target="_blank" aria-label="LinkedIn">
                <IoLogoLinkedin className="hover:text-[#0077B5] transition" />
                </Link>
              </div>

              {/* Resume Download */}
              <div className="mt-6" data-aos="flip-up">
                <a href="/images/Zahidul Islam.pdf" download="Zahidul_Islam_Resume.pdf" className="w-[200px] h-[50px] bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition flex justify-center items-center hover:rotate-1 hover:shadow-lg"> Download Resume!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
 };

 //=========== Home Components end ============ //
 export default HomeComponents;
