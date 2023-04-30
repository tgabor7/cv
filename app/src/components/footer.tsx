import Image from 'next/image';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image width={32} height={32} src="" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  )
}

export default Footer;
