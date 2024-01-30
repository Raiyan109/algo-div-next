import React from 'react';
import starFull from '../../public/star-full.png'
import star from '../../public/star.png'
import activity from '../../public/activity 1.png'
import pie from '../../public/pie-chart 1.png'
import command from '../../public/command 1.png'
import Image from 'next/image';

const Support = () => {
    return (
        <div className='bg-gradient-to-r from-blue-50 to-blue-50 flex justify-center items-center py-24'>
            <div className='flex  justify-center gap-40'>
                <div className='flex-1 space-y-6'>
                    <h1 className='text-4xl font-semibold max-w-md'>How we support our pratner all over the world</h1>
                    <p className='text-sm text-gray-400 max-w-lg leading-relaxed'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
                    <div className='flex items-center gap-20'>
                        <div className='space-y-2'>
                            <Image src={starFull} width={100} />
                            <h1 className='text-sm font-medium'>4.9/5 ratings</h1>
                            <p className='text-sm text-gray-400'>Databricks</p>
                        </div>
                        <div className='space-y-2'>
                            <Image src={star} width={100} />
                            <h1 className='text-sm font-medium'>4.9/5 ratings</h1>
                            <p className='text-sm text-gray-400'>Databricks</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-5'>
                    <div className='flex items-start gap-3'>
                        <div className='bg-white p-2 rounded-sm shadow-lg'>
                            <Image src={activity} width={20} />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-semibold text-xl'>Publishing</h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <div className='bg-white p-2 rounded-sm shadow-lg'>
                            <Image src={pie} width={20} />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-semibold text-xl'>Analytics</h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Plan, collaborate, and publishing your contetn that drivees meaningful engagement</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-3'>
                        <div className='bg-white p-2 rounded-sm shadow-lg'>
                            <Image src={command} width={20} />
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-semibold text-xl'>Engagement</h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Plan, collaborate, and publishing your contetn that </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;