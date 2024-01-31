import React from 'react';
import comp1 from '../../public/unsplash.png'
import comp2 from '../../public/notion.png'
import comp3 from '../../public/intercom.png'
import comp4 from '../../public/descript.png'
import comp5 from '../../public/grammerly.png'
import Image from 'next/image';


const Companies = () => {
    return (
        <div className='flex justify-center items-center pb-20'>
            <div className='space-y-10'>
                <h1 className="font-bold text-3xl text-center">More than 25,000 teams use Collabs</h1>

                <div className='flex items-center flex-col lg:flex-row gap-10'>
                    <Image src={comp1} width={150} />
                    <Image src={comp2} width={150} />
                    <Image src={comp3} width={150} />
                    <Image src={comp4} width={150} />
                    <Image src={comp5} width={150} />
                </div>
            </div>
        </div>
    );
};

export default Companies;