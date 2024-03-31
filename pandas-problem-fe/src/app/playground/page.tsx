"use client";
import Finalqlayout from '@/components/FinalQlayout/Finalqlayout';
import '../../app/globals.css';


import React from 'react';
import Topbar from '@/components/Topbar/Topbar';

type pageProps = {

};

const playground: React.FC<pageProps> = () => {

  return (
    <>
      <Topbar />
      <div className='bg-dark-layer-1'>
        <Finalqlayout></Finalqlayout>
      </div>
    </>
  );
};

export default playground;



