import React from 'react';
import tick from '../../public/Subtract.png'
import rightImg from '../../public/benefit-img.png'
import money from '../../public/money.png'
import income from '../../public/income.png'
import amanda from '../../public/amanda.png'
import greenImg from '../../public/green-img.png'
import Image from 'next/image';

const Benefit = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            <div className='flex items-start gap-80'>
                <div className='flex-1 space-y-14'>
                    <h1 className='text-4xl font-bold max-w-xs'>What Benifit Will You Get</h1>
                    <div className='flex flex-col gap-7'>
                        <div className='flex items-center gap-3'>
                            <Image src={tick} width={25} />
                            <h1 className='text-sm font-medium'>Free Consulting With Experet Saving Money</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={tick} width={25} />
                            <h1 className='text-sm font-medium'>Online bangking</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={tick} width={25} />
                            <h1 className='text-sm font-medium'>Investment report every month</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={tick} width={25} />
                            <h1 className='text-sm font-medium'>Free Consulting With Experet</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Image src={tick} width={25} />
                            <h1 className='text-sm font-medium'>Online transaction</h1>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <Image src={rightImg} width={400} />
                    <Image src={amanda} width={200} className='absolute top-10 -left-20' />
                    <Image src={greenImg} width={30} className='absolute top-56 -left-12' />
                    <Image src={income} width={150} className='absolute top-24 -right-12' />
                    <Image src={money} width={200} className='absolute -bottom-6 -left-14' />
                </div>
            </div>
        </div>
    );
};

export default Benefit;