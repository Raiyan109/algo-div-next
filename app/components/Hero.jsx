import React from 'react';
import hero from '../../public/Group 138.png'
import Image from 'next/image';
import lineImg from '../../public/Vector 32.png'
import { RxVideo } from "react-icons/rx";

const Hero = () => {
    return (
        <div className='my-20'>
            <div className='flex justify-center items-center'>
                <div className='flex-1 flex flex-col justify-center items-center gap-12'>
                    <h1 className="text-6xl font-bold max-w-sm">
                        We’re here to Increase your Productivity
                    </h1>
                    <Image src={lineImg} width={400} />
                    <h5 className='text-sm max-w-sm leading-relaxed font-medium'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</h5>
                    <div className='flex justify-between items-center gap-32'>
                        <button className='text-white bg-green-400 rounded-3xl py-3 px-4 font-medium'>Try free trial</button>
                        <button className='flex items-center gap-5 outline-none border-none bg-transparent'>
                            <RxVideo className='text-lg' />
                            View demo
                        </button>
                    </div>
                </div>
                <div className="flex-1 justify-center items-center flex">
                    <Image src={hero} />
                </div>
            </div>
        </div>
    );
};

export default Hero;