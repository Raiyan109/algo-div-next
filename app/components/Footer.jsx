import Image from 'next/image';
import search from '../../public/footer-search.png'

const Footer = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            <div className="flex justify-between gap-96">
                <div className='flex flex-col gap-6 items-start'>
                    <h1 className='text-green-500 text-3xl font-bold'>Biccas</h1>
                    <p className='text-xs text-gray-400'>Get started with project</p>

                    <Image src={search} width={300} />
                </div>
                <div className='flex gap-32'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-xs text-gray-300'>Support</h1>
                        <h1 className='text-xs text-gray-400'>Help center</h1>
                        <h1 className='text-xs text-gray-400'>Account</h1>
                        <h1 className='text-xs text-gray-400'>About</h1>
                        <h1 className='text-xs text-gray-400'>Contact us</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-xs text-gray-300'>Support</h1>
                        <h1 className='text-xs text-gray-400'>Help center</h1>
                        <h1 className='text-xs text-gray-400'>Account</h1>
                        <h1 className='text-xs text-gray-400'>About</h1>
                        <h1 className='text-xs text-gray-400'>Contact us</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-xs text-gray-300'>Support</h1>
                        <h1 className='text-xs text-gray-400'>Help center</h1>
                        <h1 className='text-xs text-gray-400'>Account</h1>
                        <h1 className='text-xs text-gray-400'>About</h1>
                        <h1 className='text-xs text-gray-400'>Contact us</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;