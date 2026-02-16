import React, { useState } from 'react';
import Modal from './common/Modal';
import { Project, ProjectProps } from './types/types';

const categories = ['All', 'Web Design', 'Development'];

const Works: React.FC<ProjectProps> = ({ projectData }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWork, setSelectedWork] = useState<Project | null>(null);

  const filteredWorks =
    selectedCategory === 'All'
      ? projectData
      : projectData.filter(work => work.category === selectedCategory);

  const openModal = (work: Project) => setSelectedWork(work);
  const closeModal = () => setSelectedWork(null);

  return (
    <div className="bg-white w-full flex justify-center px-6 md:px-20 pt-6">
      <section className="max-w-7xl w-full">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-2xl tracking-widest text-[#4a9fd8] mb-2">PORTFOLIO</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">My Works</h2>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-col items-center space-y-4 mb-12 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-semibold ${selectedCategory === category ? 'text-[#4a9fd8]' : 'text-gray-800 hover:text-[#4a9fd8]'
                }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Works Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] z-10">
          {filteredWorks.map((work, idx) => (
            <div
              key={work.id}
              className={`
                relative rounded-lg cursor-pointer overflow-hidden group shadow-lg
                ${idx === 0 ? 'col-span-1 row-span-1' : ''}
                ${idx === 1 ? 'row-span-2' : ''}
                ${idx === 2 ? 'col-span-1 row-span-1' : ''}
                ${idx === 3 ? 'col-span-1 row-span-2' : ''}
                ${idx === 4 ? 'col-span-1 row-span-2' : ''}
              `}
            >
              <img
                src={work.image}
                alt={work.name}
                className="w-full filter grayscale h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button
                type="button"
                onClick={() => openModal(work)}
                className="
                  absolute top-4 right-4 bg-white rounded-full p-2 text-gray-700 cursor-pointer
                  opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0
                  transition-opacity transition-transform duration-300 z-20
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                </svg>
              </button>

              <div
                style={{ backgroundColor: 'rgba(199,81,66,0.8)' }}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 text-gray-700 group-hover:opacity-100 flex flex-col justify-center items-start p-6 text-white transition-opacity duration-300"
              >
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="uppercase tracking-wide text-sm mb-2">{work.category}</p>
                  <h3 className="text-2xl font-semibold">{work.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[250px] z-10">
          {filteredWorks.slice(0, 6).map((work, idx) => (
            <div
              key={work.id}
              className={`
        relative rounded-lg cursor-pointer overflow-hidden group shadow-lg
        ${idx === 0 ? 'md:col-span-1 md:row-span-1' : ''}
        ${idx === 1 ? 'md:row-span-2' : ''}
        ${idx === 2 ? 'md:col-span-1 md:row-span-1' : ''}
        ${idx === 3 ? 'md:col-span-1 md:row-span-2' : ''}
        ${idx === 4 ? 'md:col-span-1 md:row-span-2' : ''}
      `}
            >
              <img
                src={work.image}
                alt={work.name}
                className="w-full filter grayscale h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button
                type="button"
                onClick={() => openModal(work)}
                className="
          absolute top-4 right-4 bg-white rounded-full p-2 text-gray-700 cursor-pointer
          opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0
          transition-opacity transition-transform duration-300 z-20
        "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" />
                </svg>
              </button>

              <div
                style={{ backgroundColor: '#4a9fd8' }}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 text-gray-700 group-hover:opacity-100 flex flex-col justify-center items-start p-6 text-white transition-opacity duration-300"
              >
                <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="uppercase tracking-wide text-sm mb-2">{work.category}</p>
                  <h3 className="text-2xl font-semibold">{work.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Modal for selected work */}
        <Modal isOpen={!!selectedWork} onClose={closeModal}>
          {selectedWork && (
            <>
              <img src={selectedWork.image} alt={selectedWork.name} className="w-full rounded h-[450px] p-6 pb-0" />
              <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
                {/* Left Content */}
                <div className="flex-1 text-black">
                  <h2 className="text-2xl md:text-3xl font-serif mb-6">
                    {selectedWork.name}
                  </h2>
                  <p className="text-gray-600 mb-4 text-justify">
                    {selectedWork.description}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-1 text-sm font-semibold">
                    <span>Tags :</span>
                    {selectedWork?.tags.map((tag) => (
                      <span key={tag} className="text-gray-600 text-xs cursor-pointer">
                        {tag},
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Content */}
                <div className="bg-blue-50 h-[50vh] rounded-lg p-6 w-full md:w-60">
                  <ul className="space-y-3 text-sm text-black">
                    <li>
                      Project Type : <strong>{selectedWork.projectType}</strong>
                    </li>
                    <li>
                      Clien : <strong>{selectedWork.client}</strong>
                    </li>
                    <li>
                      Duration : <strong>{selectedWork.duration}</strong>
                    </li>
                    <li>
                      Task : <strong>{selectedWork.task}</strong>
                    </li>
                    <li>
                      Budget : <strong>{selectedWork.budget}</strong>
                    </li>
                  </ul>
                  <a href={selectedWork?.liveUrl ? selectedWork.liveUrl : '#'} className="inline-flex mt-4 bg-[#4a9fd8] hover:bg-[#2881bd] text-xs text-white py-2 px-4 rounded">
                    VIEW LIVE
                  </a>

                  <div className="mt-4 flex items-center text-sm text-black">
                    <span>Share this product :</span>
                    <div className="flex space-x-2 ml-2 text-blue-700 cursor-pointer">
                      <a href="/" aria-label="Share on Facebook">
                        <svg
                          fill="currentColor"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="/" aria-label="Share on Twitter">
                        <svg
                          fill="currentColor"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 00-7.86 4.1A12.94 12.94 0 013 4.89a4.48 4.48 0 001.39 6 4.48 4.48 0 01-2.03-.56v.06a4.48 4.48 0 003.6 4.39 4.52 4.52 0 01-2.02.07 4.48 4.48 0 004.18 3.12A9 9 0 013 19.54a12.89 12.89 0 007 2.05c8.4 0 13-7 13-13v-.59A9.22 9.22 0 0023 3z" />
                        </svg>
                      </a>
                      <a href="/" aria-label="Share on Google Plus">
                        <svg
                          fill="currentColor"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 8h-3v3h-2v-3h-3v-2h3V3h2v3h3v2zm-9 3a4 4 0 11.001-8.001A4 4 0 0112 11zm0 2c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </a>
                      <a href="/" aria-label="Share on LinkedIn">
                        <svg
                          fill="currentColor"
                          className="w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19.25h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.25h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.397c.749-.796 1.725-1.397 2.8-1.397 2.071 0 3.75 1.679 3.75 3.75v6.25z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </Modal>
      </section>
    </div>
  );
};

export default Works;
