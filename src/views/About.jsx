import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = ({id}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id={id} className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Welcome to my portfolio! As a passionate and dedicated full-stack developer, 
              I bring a blend of technical expertise and creative problem-solving skills to 
              every project I undertake. With a solid foundation in both front-end and back-end
              technologies, I thrive in developing robust and user-centric web applications that
              deliver exceptional user experiences.
            </p>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Beyond coding, I am a collaborative team player with excellent communication skills
              and a proactive approach to problem-solving. I thrive in fast-paced environments
              and enjoy working closely with cross-functional teams to turn ideas into reality.
            </p>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Explore my portfolio to discover a showcase of my projects, each demonstrating my
              passion for coding excellence, attention to detail, and commitment to delivering
              exceptional results. Let's connect and discuss how I can contribute to your next
              web development initiative!
            </p>
          </motion.div>
          <motion.div          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Using a combination of cutting-edge technologies and trusted open-source software,
              I specialize in architecting and developing user-centric websites that deliver
              optimal performance across a diverse range of devices, including smartphones,
              tablets, and desktops.
            </p>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              My approach integrates the latest advancements in web development with the stability
              and versatility of open-source solutions, ensuring that each website I create not
              only meets but exceeds the expectations of modern users.
            </p>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Whether it's harnessing the power of React.js for dynamic front-end experiences or deploying
              scalable back-end solutions with Node.js, I prioritize efficiency, scalability, and 
              accessibility to deliver seamless experiences that resonate with audiences on any device.
            </p>
          </motion.div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
