import React from 'react'
import Navbar from './common/Navbar'
import profile from '../assets/images/gola.png'
import TypingText from './TypingText'
import { ProfileDataProps } from './types/types'

const Home: React.FC<ProfileDataProps> = ({ ProfileData }) => {
    const roles = ProfileData.workExperience.map(job => job.role);

    return (
        <div style={{ overflow: 'clip' }} className="min-h-screen w-full bg-[#1F2233] text-white flex flex-col">
            {/* Navbar */}
            <Navbar ProfileData={ProfileData} />

            {/* Main content */}
            <main className="flex-1 w-100 container justify-around mx-auto px-8 mt-24 flex flex-col md:flex-row">
                <div className="w-1/2 min-w-[fit-content] self-center">
                    <p className="text-[#4a9fd8] text-xl md:text-3xl tracking-widest mb-2">HELLO I'M</p>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight uppercase mb-2">{ProfileData.name}</h1>
                    <p className="mb-6 text-md md:text-2xl w-auto md:w-[40rem] flex flex-col md:flex-row text-white font-bold">
                        A PASSIONATE
                        &nbsp;
                        <TypingText words={roles.slice(0, 4)} />
                    </p>
                    <button className="bg-[#4a9fd8] text-xs md:text-base px-6 py-3 rounded text-white font-semibold hover:bg-[#2881bd] transition">
                        SAY HELLO
                    </button>
                </div>

                <div className="mt-10 md:mt-0 slider-img">
                    <img
                        src={profile}
                        alt="profile"
                    />
                </div>
            </main>

            {/* Social icons */}
            <div className="absolute z-10 right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 text-white text-xl">
                <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:text-[#4a9fd8]">f</a>
                <a href="https://x.com/i/flow/login" aria-label="Twitter" className="hover:text-[#4a9fd8]">t</a>
                <a href="https://www.linkedin.com/login" aria-label="LinkedIn" className="hover:text-[#4a9fd8]">in</a>
                <a href="https://www.instagram.com/?hl=en" aria-label="YouTube" className="hover:text-[#4a9fd8]">▶</a>
            </div>
        </div>
    )
}

export default Home