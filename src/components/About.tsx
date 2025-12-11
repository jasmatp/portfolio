import React from 'react'
import profile from '../assets/images/profilepic.png'
import dotedimg from '../assets/images/about-dott.webp'
// import signture from '../sign.png'
import { useInView } from 'react-intersection-observer'
import { ProfileDataProps } from './types/types'

const About: React.FC<ProfileDataProps> = ({ ProfileData }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    const roles = ProfileData.workExperience.map(job => job.role);

    return (
        <div className="bg-primary flex items-center justify-center px-6 pt-6">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Image Section */}
                <div ref={ref} className="about-img-over relative md:col-span-5 flex justify-center md:justify-start">
                    <div className={`about-color-shape-bg position-absolute z-0 ${inView ? 'left-to-right-animation' : 'hidden-left'
                        }`}></div>

                    <div className={`z-[-1] about-shape-dotted secondary-bg dottedimg absolute my-32 ${inView ? 'left-to-right-animation' : 'hidden-left'
                        }`}>
                        <img alt="dots" loading="lazy" width="402" height="320" decoding="async" data-nimg="1" src={dotedimg} />
                    </div>

                    <div className={`mb-24 z-1 bg-gray-900 cursor-box about-profile rounded-xl ${inView ? 'left-to-right-animation' : 'hidden-left'
                        }`}>
                        {/* Profile Image */}
                        <img
                            src={profile}
                            alt="profile"
                            width={488}
                            height={488}
                            className="rounded-lg max-w-full h-[328px] md:h-[520px] z-10 shadow-lg"
                        />
                    </div>
                </div>


                {/* Text Section */}
                <div className="md:col-span-7 flex flex-col justify-center text">
                    <p className="text-[#4a9fd8] tracking-widest mb-4 uppercase text-sm md:text-2xl font-semibold">About Me</p>
                    <h2 className="text-2xl md:text-4xl font-bold mb-0 md:mb-8 text-gray-900">
                        I Develop System That Works
                    </h2>
                    <p title={ProfileData.profile1} className="text-gray-600 mb-6 h-18 text-justify line-clamp-3">
                        {ProfileData.profile1}
                    </p>
                    <p title={ProfileData.profile2} className="text-gray-600 mb-8 h-18 text-justify line-clamp-3">
                        {ProfileData.profile2}
                    </p>

                    {/* Info grid */}
                    <div className="block md:grid md:grid-cols-2 gap-y-3 max-w-xl mb-10 text-gray-900">

                        <div className='flex'>
                            <div className="grid font-semibold">
                                <span>Name</span>
                                <span>Phone</span>
                                <span>Age</span>
                                <span>Email</span>
                            </div>
                            <div className='grid ml-4'>
                                <span>{ProfileData.name}</span>
                                <span>{ProfileData.contact.phone}</span>
                                <span>{ProfileData.DOB}</span>
                                <span>{ProfileData.contact.email}</span>
                            </div>
                        </div>
                        <div className='flex ml-0 md:ml-2'>
                            <div className="grid font-semibold">
                                <span>Occupation</span>
                                <span>Nationality</span>
                                <span>Education</span>
                                <span>Freelance</span>
                            </div>
                            <div className='grid ml-4'>
                                <span>{roles[1]}</span>
                                <span>Indian</span>
                                <span>{ProfileData.education[0].title}</span>
                                <span>Available</span>
                            </div>
                        </div>

                    </div>

                    {/* Signature & title */}
                    <div className="flex items-center space-x-4">
                        <div className="signature pr-45">
                            {/* <img alt='signature' loading='lazy' width={178} height={99} src={signture} /> */}
                        </div>
                        {/* <div className="text-gray-700 text-sm md:text-base">
                            <span className="font-bold">Company Name</span> Software Engineer, Google Inc.
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About