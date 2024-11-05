import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import './education.css';


const Education = ({id}) => {
  const theme = useContext(ThemeContext);

  const education = [
    {
      "school": "SSM College of Engineering",
      "level": "BE",
      "title": "Electronics and Communication Engineering",
      "percentage": 80,
      "description": "Successfully completed Bachelor of Engineering in Electronics and Communication Engineering (ECE) from SSM College of Engineering in 2024."
    },
    {
      "school": "Government Girls Hr. Sec. School, Komarapalayam",
      "level": "HSC",
      "title": "High School",
      "percentage": 64,
      "description": "Successfully Completed Higher Secondary Education, at Government Girls Hr. Sec. School, Komarapalayam."
    },
    {
      "school": "J.K.K.Rangammal Government Girls Hr. Sec. School, Komarapalayam",
      "level": "SSLC",
      "title": "Secondary School",
      "percentage": 82,
      "description": "Successfully Completed Secondary School Education (SSLC), at J.K.K.Rangammal Government Girls Hr. Sec. School, Komarapalayam."
    }
  ];

  const handlecerteficate = () => {
    const certficate = 'https://drive.google.com/file/d/15761EFOk3dcjEsnq_WId9rgMggPmfoJZ/view?usp=drivesdk'
    window.open(certficate,'_blank')
}
  return (
    <div id={id}
      className={
        theme.state.darkMode ? "pb-20 bg-fixed bg-gray-100" : "pb-20 bg-black"
      }
      
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20"
        id="education"
      >
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Education
        </h2>
        <div className="">
          
          <div className="education-container">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3 className='edu-title' data-text={edu.title}>{edu.title}</h3>
            <p className='edu-school'>{edu.school}</p>
            <p className='edu-per'>{edu.level} - {edu.percentage}%</p>
            <p className='edu-desc'>{edu.description}</p>
            
          </div>
        ))}
      </div>
        </div>
        <h2
          className={
            theme.state.darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center pt-20"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white pt-20"
          }
        >
          Certification
        </h2>

        <div className="education-container">
          <div className='education-item mb-5 '>
          <h3 className='edu-title'>FULL STACK DEVELOPMENT (MERN)</h3>
          <p className='edu-school'>GUVI Chennai</p>
          <p className='edu-desc'>The Full Stack Development (MERN) course at GUVI Chennai provided comprehensive training in MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend development. </p>
          <div className="flex justify-center align-items-center">
          <button className='bg-blue-500 text-white px-4 py-2 w-30 rounded-md hover:bg-indigo-400' onClick={handlecerteficate}>View Certificate</button>
        </div>

    </div>
</div>
      </div>
    </div>
  );
};

export default Education;
