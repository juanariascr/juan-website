import React from 'react';
import { motion } from 'framer-motion';

// Animation variants for section reveals
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Animation variants for list items (e.g., skill pills, bullet points)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ResumePage = () => {
  return (
    <div className="relative p-8 overflow-hidden min-h-screen">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 animate-gradient-xy"></div>

      <div className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-95 shadow-2xl rounded-xl p-8 md:p-12 my-8 border border-gray-200">

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="text-center mb-8"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Juan Diego Arias Martinez</h1>
          <div className="text-lg text-gray-700 space-x-4">
            <span>juannariasscr@gmail.com</span> |
            <a href="https://linkedin.com/in/juan-arias-martinez2001" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-300">LinkedIn</a> |
            <a href="https://github.com/juanariascr" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-300">GitHub</a> |
            <span>805-980-8335</span>
          </div>
          {/* Download PDF Button */}
          {/* Ensure your resume.pdf is in the public folder */}
          <motion.a
            href="/Resume 2024.pdf" // Updated to match your file name from prompt
            download="Juan_Diego_Arias_Martinez_Resume.pdf"
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume PDF
          </motion.a>
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mb-10 p-6 bg-blue-50 bg-opacity-80 rounded-lg shadow-inner"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-500 pb-3 mb-5">Summary</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Highly motivated and results-oriented Computer Science professional with a Master's emphasis in Cybersecurity and a Bachelor's in Computer Science. Currently a Software Engineer II taking on complex projects and collaborating with cross-functional teams to deliver high-quality, scalable software solutions. Seeking to leverage strong programming skills in React, TypeScript, Java (Spring Boot), and Kotlin to deliver impactful technical solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-purple-500 pb-3 mb-5">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <strong className="block text-gray-800 text-xl mb-3">Programming Languages:</strong>
              <div className="flex flex-wrap gap-2">
                {['Javascript', 'TypeScript', 'React', 'Java', 'Kotlin', 'C', 'Python'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-md font-semibold hover:bg-purple-200 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div>
              <strong className="block text-gray-800 text-xl mb-3">Backend Frameworks & Tools:</strong>
              <div className="flex flex-wrap gap-2">
                {['Spring Boot', 'Jenkins', 'SonarQube', 'Postman', 'SQL Developer', 'Android Studio'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-md font-semibold hover:bg-purple-200 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <strong className="block text-gray-800 text-xl mb-3">Certifications & Languages:</strong>
              <div className="flex flex-wrap gap-2">
                {['AWS Cloud Practitioner', 'Bilingual in Spanish and English'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-md font-semibold hover:bg-purple-200 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Work Experience Section - Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-green-500 pb-3 mb-8">Work Experience</h2>

          <ol className="relative border-s border-gray-300 ml-4 pl-4 md:ml-0 md:pl-0 md:border-s-0 md:grid md:grid-cols-2 md:gap-x-12">

            {/* Software Engineer II */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-1 md:col-end-2 md:ms-0 md:text-right md:pr-8 md:border-r-2 md:border-green-300"
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-right-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Software Engineer II</h3>
              <p className="text-md text-gray-600 mb-2">MasterCard International Inc | March 2025 - Present</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Lead and manage more complex software projects and responsibilities, ensuring timely delivery and adherence to architectural standards.</li>
                <li>Collaborate extensively with cross-functional teams (product, design, QA) to define requirements and deliver high-quality, high-performing, and scalable software solutions.</li>
                <li>Contribute significantly to backend development using Java Spring Boot to build robust and efficient APIs and services.</li>
                <li>Continue to enhance the robustness and scalability of frontend applications using React and TypeScript, ensuring seamless user experiences and maintainability.</li>
              </ul>
            </motion.li>

            {/* Software Engineer */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-2 md:col-end-3 md:ms-0 md:pl-8 md:border-l-2 md:border-green-300"
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-left-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Software Engineer</h3>
              <p className="text-md text-gray-600 mb-2">MasterCard International Inc | August 2023 - February 2025</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Worked on a React application using TypeScript and SCSS, achieving full unit test coverage with Jest.</li>
                <li>Reduced all bugs to achieve "A" ratings across SonarQube metrics: reliability, security, security review, and maintainability, significantly enhancing code quality and stability.</li>
                <li>Delivered risk management and analytical solutions for banking institutions, including acquirers and issuers.</li>
                <li>Contributed to the modularization of an application to enhance maintainability and streamline deployment.</li>
                <li>Isolated common components into individual modules for easy import and reuse throughout the app.</li>
              </ul>
            </motion.li>

            {/* Android Developer */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-1 md:col-end-2 md:ms-0 md:text-right md:pr-8 md:border-r-2 md:border-green-300"
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-right-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Android Developer</h3>
              <p className="text-md text-gray-600 mb-2">Santa Clara University | January 2022 - June 2023</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Developed a Kotlin-based front-end solution to enhance customer access to product sustainability labels.</li>
                <li>Transitioned the application from iOS to Android using Android Studio.</li>
                <li>Collaborated with backend and iOS teams to maintain and update libraries, ensuring ongoing software evolution.</li>
              </ul>
            </motion.li>

            {/* Corporate Relations Director */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-2 md:col-end-3 md:ms-0 md:pl-8 md:border-l-2 md:border-green-300"
            >
              <div className="absolute w-3 h-3 bg-green-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-left-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Corporate Relations Director</h3>
              <p className="text-md text-gray-600 mb-2">Society of Hispanic Professional Engineers - SHPE | May 2022 - June 2023</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Networked with college recruiters and companies in order to create partnerships and bring sponsorship.</li>
                <li>Organized Resume Workshops, LinkedIn Workshops, and networking events with other organizations.</li>
              </ul>
            </motion.li>
          </ol>
        </motion.div>

        {/* Personal Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-orange-500 pb-3 mb-5">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1: Micro-Frontends in React Project */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Micro-Frontends in React Project</h3>
              <p className="text-md text-gray-600 mb-4">Mastercard</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Contributing to the modularization of an application to enhance maintainability and streamline deployment.</li>
                <li>Isolating common components into individual modules for easy import and reuse throughout the app.</li>
              </ul>
              {/* Add project image/demo link here if available */}
            </motion.div>

            {/* Project 2: SafeRides: Web Development Project */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">SafeRides: Web Development Project</h3>
              <p className="text-md text-gray-600 mb-4">Hack for Humanity Hackathon</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Implemented a full frontend website by using Vue Js and Node Js.</li>
                <li>Developed a vision eye test, reading test, and a reaction game test that examines if a person is suitable to drive.</li>
              </ul>
              {/* Add project image/demo link here if available */}
            </motion.div>
          </div>
        </motion.div>

        {/* Education Section - Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-teal-500 pb-3 mb-8">Education</h2>
          <ol className="relative border-s border-gray-300 ml-4 pl-4 md:ml-0 md:pl-0 md:border-s-0 md:grid md:grid-cols-2 md:gap-x-12">
            {/* Masters */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-1 md:col-end-2 md:ms-0 md:text-right md:pr-8 md:border-r-2 md:border-teal-300"
            >
              <div className="absolute w-3 h-3 bg-teal-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-right-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Santa Clara University</h3>
              <p className="text-md text-gray-600">Santa Clara, CA</p>
              <p className="text-md text-gray-700">Masters in Computer Science and Engineering with emphasis in Cybersecurity | Expected 2025</p>
            </motion.li>

            {/* B.S. */}
            <motion.li
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-10 ms-4 md:col-start-2 md:col-end-3 md:ms-0 md:pl-8 md:border-l-2 md:border-teal-300"
            >
              <div className="absolute w-3 h-3 bg-teal-500 rounded-full mt-1.5 -start-1.5 border border-white md:-start-1.5 md:left-auto md:-left-[1.5px] md:top-[14px]"></div>
              <h3 className="text-xl font-bold text-gray-900">Santa Clara University</h3>
              <p className="text-md text-gray-600">Santa Clara, CA</p>
              <p className="text-md text-gray-700">B.S. Computer Science | September 2019 - December 2022</p>
            </motion.li>
          </ol>
        </motion.div>

        {/* Involvement/Interests Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
          className="p-6 bg-gray-50 bg-opacity-80 rounded-lg shadow-inner"
        >
          <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-pink-500 pb-3 mb-5">Involvement/Interests</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li>Business Resource Group at Mastercard: YoPros, Latin (Mentor for new hires)</li>
            <li>Swimming, Waterpolo, Biking, Soccer, Cooking, Gaming PCs</li>
          </ul>
        </motion.div>

      </div>

      {/* Add custom Tailwind keyframes for background animation */}
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default ResumePage;