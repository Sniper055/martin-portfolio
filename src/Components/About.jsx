import React from 'react'

const About = () => {

    

  return (
   <section className='bg-white item-stretch grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 mt-1 '>
    
<div   data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true"
    className="container max-w-3xl h-full  m-auto bg-blue-50 p-3 shadow-md rounded mt-5 flex flex-col">
    <h2 className='text-violet-600 text-center text-xl font-bold mt-1 mb-2 '>About Me</h2>
    <h2 className='text-violet-500 text-xl font-bold underline'><strong>Hi, I'm Kpornyuie Martin</strong></h2>
    <p className='text-lg text-gray-800'> I'm a passionate Database Administrator and Full Stack Developer with a deep love for 
        building scalable systems and clean user experiences. Whether it's optimizing complex
         queries or crafting responsive web applications, I thrive on solving problems 
         that make technology more efficient and accessible.</p>
</div>

<div  data-aos="fade-left" data-aos-duration="1500" data-aos-mirror="true"
    className='container max-w-3xl h-full m-auto bg-gray-100 p-3 shadow-md rounded mt-5 flex flex-col '> 
    <h2  className='text-violet-600 text-center text-xl font-bold mt-1 mb-2'> My Mission </h2>
    <p className=" text-gray-800"> To design and maintain robust digital systems
         that empower businesses and users alike. I believe in writing clean code,
          optimizing performance, and continuously
         learning to stay ahead in the tech world.</p>
</div>


<div    data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true"
    className='container max-w-3xl text-center h-full m-auto bg-violet-100 p-3 shadow-md rounded mt-5 flex flex-col '>
    <h2 className='text-violet-600 text-center text-xl font-bold mt-1 mb-2 '>What I Do </h2>
<ul className='list-disc list-inside  text-gray-800 text-left mt-2 '>
    <li><strong>Database Management :</strong> MYSQL,SQL Server</li>
    <li><strong>Full Stack Development :</strong> React, Node.js, Express, Tailwind Css,Bootstrap, </li>
    <li><strong>Tools & Platforms :</strong> Git, Github, VS Code, AWS</li>
</ul>
</div>


<div  data-aos="fade-left" data-aos-duration="1500" data-aos-mirror="true"
    className='container max-w-3xl m-auto h-full bg-blue-50 p-3 shadow-md rounded flex flex-col mt-5'>
    <h2 className="text-center font-bold text-xl text-violet-600">Outside the Terminal</h2>
    <p className='text-left text-gray-800 font-bold'>When I'm not debugging or deploying, I enjoy:</p>
    <ul className='tlist-disc list-inside  text-gray-800 text-left mt-2'>
        <li>Eploring new tech skills </li>
        <li>Listening to music</li>
        <li>Watching some cool movies </li>
    </ul>
</div>

   </section>
  )
}

export default About