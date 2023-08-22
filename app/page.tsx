"use client";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { BsInstagram, BsStack } from "react-icons/bs"
import { FaEnvelope, FaFacebookF, FaPhone, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub,AiOutlineMail } from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import {GrLocationPin} from "react-icons/gr"



import { motion, AnimatePresence, useScroll } from "framer-motion";
export default function Home() {
  const {scrollYProgress}=useScroll()
  return (
    <>
    <main className=" md:max-lg:container mx-auto">
      {/* <nav className="w-full dark:bg-gray-900 top-0 fixed mb-13 z-10">
        <div className="lg:w-[90%]md:w-[100%] sm:w-[100%] flex flex-wrap  justify-between mx-auto p-4">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="#services"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="../public/cv.pdf"
                  className="block pl-3 pr-4 text-slate-200 px-2 py-2  border-gray-200   dark:text-white md:dark:text-blue-500"
                 target="_blank" 
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <motion.div className="bg-blue left-0 fixed  bg-slate-400 p-1"
    style={{
      scaleX:scrollYProgress,
      transformOrigin:"0%",
      position:"fixed",
    
      right:0,
      left:0,
      height:1
       
    }}
    >

        
    </motion.div>
      </nav> */}




    <Navbar
      fluid
    className="w-full dark:bg-gray-900 top-0 fixed mb-13 z-10"
    >
      <div className="lg:w-[90%]md:w-[100%] sm:w-[100%] flex flex-wrap  justify-between mx-auto p-4">
      <Navbar.Brand
      
        href=""
      >
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          
        </span>
      </Navbar.Brand>

      <Navbar.Toggle  />
      <Navbar.Collapse >
        <Navbar.Link
          active
          href="#services"
        >
          <p>
            Services
          </p>
        </Navbar.Link>
        <Navbar.Link href="#about"
        >
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#portfolio">
          Portfolio
        </Navbar.Link>
      
        <Navbar.Link href="#contact">
          Contact
        </Navbar.Link>

        <Navbar.Link href="public/cv.pdf" target="_blank">
          Resume
        </Navbar.Link>
      </Navbar.Collapse>
      </div>
     
      <motion.div className="bg-blue left-0 fixed  bg-slate-400 p-0.5 sm:max-md:hidden"
    style={{
      scaleX:scrollYProgress,
      transformOrigin:"0%",
      position:"fixed",
    top:"8%",
      right:0,
      left:0,
      height:1
       
    }}
    >

        
    </motion.div>
    </Navbar>
    



      
      <section className="flex sm:mt-12  sm:flex-col sm:gap-5 md:gap-5 md:flex-col lg:flex-row mt-10 justify-between lg:gap-5 sm:mx-auto sm:w-[90%] md:max-lg:w-[80%] md:mx-auto" id="about">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          className="lg:w-1/2 mt-5"
        >
          MY NAME IS
          <h1 className="text-3xl font-bold mt-5">
            Eghobamien <span style={{ color: "#7e74f1" }}>Vincent</span>
          </h1>
          <p className="text-start   font-thin font-mono mt-5 text-md lg:w-[90%] ">
            I have over a year of experience as a fullstack MERN developer,
            proficient in Mongo, Express, React, NextJS and Node.js. I
            specialize in front-end development using Next Js, React, TypeScript
            and I am skilled in JavaScript, HTML, CSS,Tailwind and Bootstrap. I
            am passionate about expanding my knowledge and constantly seeking
            new opportunities to learn and grow in my career. My journey as a
            developer is marked by a strong eagerness to acquire new skills and
            stay up-to-date with the latest industry trends.
          </p>
          <motion.footer
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            className="flex justify-between lg:w-[32%]  text-xl mt-5 "
          >
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileTap={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileFocus={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              animate={{
                rotate: 0,
              }}
              transition={{
                layout: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              layout
              href=""
            >
              <BsInstagram />
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileTap={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileFocus={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              animate={{
                rotate: 0,
              }}
              transition={{
                layout: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              layout
              target="blank"
              href="https://www.linkedin.com/in/eghobamien-vincent-03a124211/"
            >
              <FaLinkedin />
            </motion.a>{" "}
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileTap={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileFocus={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              animate={{
                rotate: 0,
              }}
              transition={{
                layout: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              layout
              target="blank"
              href="https://github.com/uvegh"
            >
              <AiFillGithub />
            </motion.a>{" "}
            <motion.a
              whileHover={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileTap={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              whileFocus={{
                scale: 1.3,
                rotate: [10, -10, 10, 0],
              }}
              animate={{
                rotate: 0,
              }}
              transition={{
                layout: {
                  type: "spring",
                  duration: 0.5,
                },
              }}
              layout
              href=""
            >
              <TbBrandTwitter />
            </motion.a>
          </motion.footer>
        </motion.div>
        <motion.div
          initial={{
            x: 1000,
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          animate={{
            x: [0, 3, 0],
          }}
          className="lg:w-1/2 lg:mx-auto"
        >
          <Image
            src="/profile.jpg"
            alt="me "
            className="lg:w-[80%] sm:w-[100%] rounded-lg"
            width="500"
            height="200"
            sizes='(max-width:"768px") 90vw  (max-width:"320px") 70vw '
          />
        </motion.div>
      </section>


      <section className="mt-5 font-mono font-light sm:mx-auto sm:w-[90%] md:max-lg:w-[80%] md:mx-auto" id="language">
        <motion.div 
        initial={{x:-100,opacity:0}}
        transition={{delay:0.2,duration:0.5}}
        whileInView={{
          x:0,
          opacity:1
        
        }}
        viewport={{once:true}}
        animate={{
          x:0
        }}
className="mt-10 mb-10"
        >
        <p className="font-light text-left font-mono text-xl ">MY LANGUAGES</p>
        <h1 className="text-left font-bold text-2xl opacity-50">i sPEAK</h1>
        </motion.div>
     

        <motion.div
        initial={{opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:0.2
        }}
        whileInView={{
          opacity:1
        }}
        className="grid lg:grid-cols-7 sm:grid-cols-2 md:grid-cols-4 text-slate-800  pb-10">



          <motion.section
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%]  md:w-[100%] sm:w-[100%] rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)100vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg1.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>
          
          <motion.section
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                        <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg2.jpg" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>


          <motion.section
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px) 90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg3.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>


          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg4.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>


          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes=" "
                alt="pf7" src="/lg5.webp" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>


          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg6.jpg" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg7.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg8.jpg" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1,  x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg9.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0,  x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%]  rounded-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf7" src="/lg10.png" width="50" height="30"/>
               
              </motion.div>

             


             
             
            </div>
          </motion.section>

         
        </motion.div>
      </section>

      <section className="mt-5 font-mono font-light sm:mx-auto sm:w-[90%] md:w-[80%] md:max-lg:mx-auto" id="services">
        <motion.div 
        initial={{x:-100,opacity:0}}
        transition={{delay:0.2,duration:0.5}}
        whileInView={{
          x:0,
          opacity:1
        
        }}
        viewport={{once:true}}
        animate={{
          x:0
        }}
className="mt-10 mb-10"
        >
        <p className="font-light text-center font-mono text-xl ">SERVICES</p>
        <h1 className="text-center font-bold text-2xl">Specializes In</h1>
        </motion.div>
     

        <motion.div
        initial={{opacity:0,
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duation:0.2
        }}
        whileInView={{
          opacity:1
        }}
        className="grid lg:grid-cols-3 md:grid-cols-1 text-slate-800 gap-6">



          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.6,
              delay: 0.6,
            }}
            className="rounded-md bg-slate-200 md:pb-8 md:p-0 lg:min-h-[200px] lg:p-5"
          >
            <div className="mt-5 ">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileTap={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileFocus={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                animate={{
                  rotate: 0,
                }}
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className="justify-center flex text-2xl cursor-pointer"
              >
                {" "}
                <BsStack />
              </motion.div>

              <h3 className="font-semibold text-xl text-center mt-3">
                Full Stack MERN{" "}
              </h3>
              <p className="my-auto mt-2 lg:text-center md:text-center font-mono md:mx-auto font-light md:max-lg:w-[90%] sm:w-[95%] sm:mx-auto sm:pb-5">
                Standard designing, building, and implementing your applications
                with MERN(Mongo Express React Js) Stack.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.5,
              delay: 0.6,
            }}
            className="rounded-md bg-slate-200  lg:min-h-[200px] lg:p-5 md:pb-8 md:p-0"
          >
            <div className="mt-5 ">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileTap={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileFocus={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                animate={{
                  rotate: 0,
                }}
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className="justify-center flex text-2xl cursor-pointer"
              >
                {" "}
                <BsStack />
              </motion.div>

              <h3 className="font-semibold text-xl text-center mt-3">
              Application Development
              </h3>
              <p className="my-auto mt-2 lg:text-center md:text-center sm:mx-auto sm:pb-5 sm:w-[95%] font-mono md:mx-auto font-light md:max-lg:w-[90%]">
              Both front-end and back-end technologies, understanding of the entire web development process, handling handle end-to-end application development and delivery of complete, integrated solutions
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay: 0.4,
            }}
            className="rounded-md bg-slate-200  md:pb-8 md:p-0 lg:min-h-[200px] lg:p-5"
          >
            <div className="mt-5 ">
              <motion.div
                whileHover={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileTap={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                whileFocus={{
                  scale: 1.3,
                  rotate: [10, -10, 10, 0],
                }}
                animate={{
                  rotate: 0,
                }}
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className="justify-center flex text-2xl cursor-pointer"
              >
                {" "}
                <BsStack />
              </motion.div>

              <h3 className="font-semibold text-xl text-center mt-3">
              Front End Development
              </h3>
              <p className="my-auto mt-2 lg:text-center md:text-center font-mono md:mx-auto font-light md:max-lg:w-[90%]sm:mx-auto sm:pb-5 sm:w-[95%]">
              Creating engaging user interfaces using technologies such as Nextjs, React,Bootstrap and Tailwind ensuring seamless interaction and intuitive user experiences.
              </p>
            </div>
          </motion.section>

          
        </motion.div>
      </section>

      <section className="mt-5 font-mono font-light sm:mx-auto sm:w-[90%] md:w-[80%] md:max-lg:mx-auto" id="portfolio">
        <motion.div 
        initial={{x:-100,opacity:0}}
        transition={{delay:0.2,duration:0.5}}
        whileInView={{
          x:0,
          opacity:1
        
        }}
        viewport={{once:true}}
        animate={{
          x:0
        }}
className="mt-10 mb-10"
        >
        <p className="font-light text-left font-mono text-xl ">MY WORKS</p>
        <h1 className="text-left font-bold text-2xl opacity-50">fEATURED pORTFOLIO</h1>
        </motion.div>
     

        <motion.div
        initial={{opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:0.2
        }}
        whileInView={{
          opacity:1
        }}
        className="grid  lg:grid-cols-3 md:grid-cols-1 text-slate-800  pb-10">

<Link href="https://main--calm-smakager-8b94b3.netlify.app/" target="_blank" >  
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf5" src="/pf7.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> Lookscout</h1>   
          <p> 
(Digital Marketing website)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Next js</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Typescript </p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Tailwind</p>
              
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>

          <Link href="https://centebestbuy-ui.netlify.app/" target="_blank">  
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf5" src="/pf5.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> E-commerce website</h1>   
          <p> 
(BestBuy.com replica)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> React</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Rest Api</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Bootstrap</p>
              
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>

          <Link href="https://centeblog.netlify.app/" target="_blank">  
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: [2, -2, 2, 0],
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf4" src="/pf4.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold ">   Blog Application</h1>   
          <p>(tumblr.com replica)

        

          </p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start  md:justify-evenly sm:justify-start sm:gap-3  ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> React</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Node</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Express</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Mongo</p>
               
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>

          <Link href="https://gavohms.netlify.app/" target="_blank"> 
          <motion.section
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf3" src="/pf3.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> Hospital Management system</h1>   
          <p> (Complete hospital and staff management system)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> React</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Node</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Express</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> MongoDB</p>
               
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>

          <Link href="https://uvegh.github.io/mahabisUI/" target="_blank"> 
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf2" src="/pf2.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> E-commerce website</h1>   
          <p> 
(mahabis.com large screen UI replica)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start  md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> HTML</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> CSS</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> js</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> jQuery</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Ajax</p>
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>

          <Link href="https://uvegh.github.io/SASSIHOLFORDUI/" target="_blank"> 
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf1" src="/pf1.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> E-commerce website</h1>   
          <p> (sassiholford.com large screen UI replica)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> HTML</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> CSS</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> js</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> jQuery</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Ajax</p>
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>


          <Link href="https://uvegh.github.io/BoltFood/" target="_blank"> 
          <motion.section
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              layout: {
                type: "spring",
              },
              duration: 0.4,
              delay:0.2
              
            }}

            whileHover={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileTap={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            whileFocus={{
              scale: 1.1,
              rotate: [5, -5, 5, 0],
            }}
            animate={{
              rotate: 0,
            }}
            className="p-4"
          >
            <div className="mt-5 ">
              <motion.div
               
                transition={{
                  layout: {
                    type: "spring",
                    duration: 0.5,
                  },
                }}
                className=" cursor-pointer"
              >
                <Image className="lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-t-md"
                sizes="(min-width:768px) 80vw (min-width:200px)90vw  (min-width:1000px) 100vw"
                alt="pf6" src="/pf6.png" width="500" height="200"/>
               
              </motion.div>

             


             <div className="bg-slate-200 rounded-b-md p-5 lg:min-h-[230px]">
              <section className="">
              <h1 className="font-bold "> 
              BoltFood UI</h1>   
          <p> (@boltfood.com ui replica)</p>
              </section>
         

             <h1 className="font-bold">Stack</h1>
              <div className="flex flex-wrap font-mono font-light rounded-b-lg drop-shadow-xl  lg:justify-start  md:justify-evenly sm:justify-start sm:gap-3   ">
                
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> HTML</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> CSS</p>
               <p className="border-slate-700 rounded p-2 border-spacing-2 border"> Bootstrap</p>
             
              </div>
             </div>
             
            </div>
          </motion.section>
          </Link>
        </motion.div>
      </section>

      <section className="sm:mx-auto sm:w-[90%] sm:gap-5 md:gap-5" id="experience">
      <motion.div 
        initial={{x:-100,opacity:0}}
        transition={{delay:0.2,duration:0.5}}
        whileInView={{
          x:0,
          opacity:1
        
        }}
        viewport={{once:true}}
        animate={{
          x:0
        }}
className="mt-10 mb-10"
        >
        <p className="font-light text-left font-mono text-xl ">CAREER PATH</p>
        <h1 className="text-left font-bold text-2xl opacity-50">wORK eXPERIENCE</h1>
        </motion.div>

<motion.main className="flex font-mono lg:flex-row sm:flex-col  sm:max-md:gap-y-8 lg:gap-3"
initial={{
  opacity:0,
  scale:0,
  x:100
}}
whileInView={{
  scale:1,
  opacity:1,
  x:0
}}
transition={{
  delay:0.2,
  duration:0.3
}}
>
  <div className="lg:w-[100%]">
    <Image className="rounded-md"  alt="rework" src="/rework.jpg" width="400" height="100"
    sizes="(min-width:768px) 90vw (min-width:200px) 90vw 22vw "
    />

  </div>

<div>
  <p className="font-bold text-xl">Full Stack Developer</p>
  <p className="sm:max-md:text-lg">
March 2021 -August 2023 </p>
<p>Rework Technologies Ltd is an indigenous Software Development,Academy and consultancy firm, with specialty in custom software solutions, data analytics and pioneers for Solutions Delivery.</p>
<p className="text-slate-700 flex"><GrLocationPin/> Fct-Abuja Nigeria</p>
<div>

</div>
<div className="group px-2 py-3 bg-slate-600 rounded-md mt-2 lg:w-[45%]  cursor-pointer hover:translate-x-7 duration-100 transition-all ease-in-out">
<Link href=""   className="">Learn more about Rework Technology</Link>
</div>

</div>

</motion.main>

        
      </section>

      <section className="sm:mx-auto sm:w-[90%] sm:gap-5 md:gap-5 " id="contact">
      <motion.div 
        initial={{x:-100,opacity:0}}
        transition={{delay:0.2,duration:0.5}}
        whileInView={{
          x:0,
          opacity:1
        
        }}
        viewport={{once:true}}
        animate={{
          x:0
        }}
className="mt-10 mb-10"
        >
        <p className="font-light text-left font-mono text-xl ">Contact </p>
        <h1 className="text-left font-bold sm:max-md:text-xl text-2xl opacity-50">cONNECT wITH mE..</h1>
        </motion.div>

<motion.main className="flex font-mono lg:flex-row text-2xl  sm:justify-center justify-center  gap-5"
initial={{
  opacity:0,
  scale:0,
  x:100
}}
whileInView={{
  scale:1,
  opacity:1,
  x:0
}}
transition={{
  delay:0.2,
  duration:0.3
}}
>
  <motion.a  className="cursor-pointer"
  initial={{
    x:-100,
    opacity:0
  }}
  whileInView={{
    x:0,
    opacity:1
  }}
  transition={{
    duration:0.5,
    delay:0.3
  }}
  whileHover={{
    scale:1.3,
    rotate:[5,-5,0]
  }}
  whileTap={{
    scale:1.3,
    rotate:[5,-5,0]
  }}
  animate={{
    rotate:0
  }}
  >
    
<FaPhone/>
  </motion.a>

<motion.a
initial={{
  x:-100,
  opacity:0
}}
whileInView={{
  x:0,
  opacity:1
}}
transition={{
  duration:0.5,
  delay:0.2
}}
whileHover={{
  scale:1.3,
  rotate:[5,-5,0]
}}
whileTap={{
  scale:1.3,
  rotate:[5,-5,0]
}}

animate={{
  rotate:0
}}
className="cursor-pointer"
target="blank"
              href="uveghobamien@gmail.com"
>
 <FaEnvelope/>

</motion.a>

<motion.a
initial={{
  x:-100,
  opacity:0
}}
whileInView={{
  x:0,
  opacity:1
}}
transition={{
  duration:0.5,
  delay:0.1
}}
whileHover={{
  scale:1.3,
  rotate:[5,-5,0]
}}
whileTap={{
  scale:1.3,
  rotate:[5,-5,0]
}} 
animate={{
  rotate:0
}}
className="cursor-pointer"
target="blank"
              href="https://www.linkedin.com/in/eghobamien-vincent-03a124211/"
>
 <FaLinkedin/>

</motion.a>

</motion.main>

        
      </section>


   
    </main>

<footer className="opacity-75 pt-5 pb-8 mt-12 ">
<div className="container mx-auto">
    <div className="">
        <div className="col-md-12">
           
            <p className="text-center ">Copyright ©2023 centeDev 
    
        - Design </p>
        </div>
    </div>
</div>
</footer>

</>

  );
}
