import React from 'react'
import projects from '../Projects.json'
import {Link } from 'react-router-dom'

const Portfolio = ({isHome = false}) => {
    const HomeProjects = isHome ? projects.slice(0, 3) : projects
  return (
     <section className="bg-white p-6 mt-2">
      <h2 className="text-center text-3xl font-bold text-violet-600 mb-8">
        My Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HomeProjects.map((project) => (
          <div
            key={project.id}
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-violet-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 flex-grow">{project.description}</p>
              <div className="mt-3">
                <p className="text-sm text-gray-500 mb-1">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="bg-violet-100 text-violet-700 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  )
}

export default Portfolio