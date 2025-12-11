import React from 'react';

interface Logo {
  src: string;
  alt: string;
  link: string;
}

const logos: Logo[] = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg',
    alt: 'Boostrape',
    link: 'https://google.com',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    alt: 'React Logo',
    link: 'https://reactjs.org',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    alt: 'Tailwind',
    link: 'https://reactjs.org',
  },
  {
    src: 'https://logowik.com/content/uploads/images/angular9826.logowik.com.webp',
    alt: 'Angular',
    link: 'https://angular.com',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    alt: 'Nextjs',
    link: 'https://nextjs.org',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    alt: 'HTML',
    link: 'https://reactjs.org',
  },
];

// Define the width of one logo container in px (w-36 = 9rem = 144px)
const LOGO_WIDTH_PX = 144;

const RotatingLogos: React.FC = () => {
  const extendedLogos = [...logos, ...logos]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full md:w-1/2 max-w-[850px] mx-auto">
      <div
        className="flex space-x-12 items-center"
        style={{
          width: `${extendedLogos.length * LOGO_WIDTH_PX}px`,
          animation: `slideSteps 24s linear infinite`,  // smooth continuous scroll
          animationPlayState: 'running',
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {extendedLogos.map(({ src, alt, link }, index) => (
          <a
            href={link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-16" // 144px width to match animation
          >
            <img
              src={src}
              alt={alt}
              className="w-full object-contain filter grayscale hover:grayscale-0 cursor-pointer"
            />
          </a>
        ))}
      </div>
      <hr className='my-8' />
      <style>
        {`
          @keyframes slideSteps {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${logos.length * LOGO_WIDTH_PX}px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default RotatingLogos;
