import collab from '../../public/collaboration.png'
import analyt from '../../public/analytics.png'
import cloud from '../../public/cloud.png'
import Image from 'next/image';

const Features = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            <div className='space-y-6'>
                <div className="flex items-center gap-32">
                    <h1 className='text-4xl font-semibold max-w-[250px] leading-relaxed'>Our Features you cab get</h1>
                    <p className='text-sm text-gray-400 max-w-xs leading-loose'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                    <button className='text-white bg-green-500 rounded-3xl py-3 px-4 font-medium'>Get Started</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div>
                        <Image src={collab} width={300} />
                        <div className='space-y-2 mt-3'>
                            <h1 className='font-semibold text-xl'>Collboration Teams </h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Here you can handle projects together with team virtually</p>
                        </div>
                    </div>
                    <div>
                        <Image src={cloud} width={300} />
                        <div className='space-y-2 mt-3'>
                            <h1 className='font-semibold text-xl'>Cloud Storage</h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Here you can handle projects together with team virtually</p>
                        </div>
                    </div>
                    <div>
                        <Image src={analyt} width={300} />
                        <div className='space-y-2 mt-3'>
                            <h1 className='font-semibold text-xl'>Daily analytics</h1>
                            <p className='text-xs text-gray-400 max-w-xs leading-relaxed'>Here you can handle projects together with team virtually</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Features;