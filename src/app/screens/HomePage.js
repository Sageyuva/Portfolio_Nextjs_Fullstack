"use client"
import React from "react";
import Image from "next/image";
import hs from '../Styles/Hstyle.module.css'
import { Github, Download } from 'lucide-react';

const HomePage = () => {

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/images/Yuvaraj.pdf';
    downloadLink.download = 'Yuvaraj.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    alert("Resume downloaded");
  };

  return (
    <>
      <div className='h-[80px] w-[100%]'></div>
      <div className={hs.homemain}>

        <div className={hs.homet}>
          <h2 className={hs.hello}>Hello , I am  <br />
            <span className={hs.name}>
              Yuvaraj.D
            </span> <br />
            <span className={hs.mern}>Mern Stack Developer</span>
          </h2>

          <div className={hs.social}>
            <div className={hs.social1d}> Github <Github /></div>
            <div onClick={() => handleDownload()} className={hs.social1}> Download Resume <Download /></div>

          </div>
        </div>

        <div className={hs.homei}>
          <Image
            src="/images/main.png"
            width={500}
            height={500}
          />
        </div>

      </div>
    </>
  );
};

export default HomePage;
