import Image from 'next/image';
import tick from '../../public/Subtract.png'
const Plan = () => {
    const data = [
        {
            id: 1,
            name: 'Free',
            desc: 'Have a go and test your superpowers dfdfddf',
            price: 0,
            first: '2 Users',
            second: '2 Files',
            third: 'Public Share & Comments',
            fourth: 'Chat Support',
            fifth: 'New Income apps',
            button: 'Signup for free'
        },
        {
            id: 2,
            name: 'Pro',
            desc: 'Experiment the power of infinite possibilities',
            price: 8,
            first: '4 Users',
            second: 'All apps',
            third: 'Unlimited editable exports',
            fourth: 'Folders and collab',
            fifth: 'All incomming apps',
            button: 'Go to pro'
        },
        {
            id: 3,
            name: 'Business',
            desc: 'Unveil new superpowers and join the Design Leaque',
            price: 16,
            first: 'All features of pro',
            second: 'Account success manager',
            third: 'Single sign in SSO',
            fourth: 'Co conception program',
            fifth: 'Collaboraion soon',
            button: 'Go to business'
        },
    ]
    return (
        <div className='flex justify-center items-center py-24'>
            <div className='space-y-8 mt-3'>
                <div className="space-y-2 flex flex-col justify-center items-center">
                    <h1 className='font-semibold text-5xl text-center max-w-[450px] leading-normal'>Choose Plan
                        That’s Right For You</h1>
                    <p className='text-xs text-gray-400 max-w-[450px] leading-relaxed text-center'>Choose plan that works best for you, feel free to contact us </p>
                </div>
                <div className="flex justify-center items-center">
                    <label className="switch relative inline-block w-60 h-12 ">
                        <input type="checkbox" className="opacity-0 w-0 h-0" />
                        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-white rounded-xl flex justify-around items-center">
                            <h1 className="z-10 text-white font-medium">Bill Monthly</h1>
                            <h1 className="z-10 text-white font-medium">Bill Yearly</h1>
                        </span>
                    </label>
                </div>
                <div className="flex justify-center items-center">
                    <div className="flex items-center flex-col md:flex-row flex-wrap gap-4">
                        {/* {
                            data.map(({ id, name, desc, price, first, second, third, fourth, fifth, button }) => ( */}
                        <div className="bg-white  rounded-2xl py-4 px-3 card-container">
                            <div className="space-y-3">
                                <h1 className='font-semibold text-xl text-center max-w-[250px] leading-normal'>Free</h1>
                                <p className='text-xs text-gray-400 max-w-[250px] leading-relaxed text-center'>Have a go and test your superpowers</p>
                                <div className="text-center relative">
                                    <p className="absolute top-0 text-sm right-36">$</p>
                                    <h1 className="text-4xl font-bold">0</h1>
                                </div>

                                <div className='bg-blue-50  p-6 rounded-xl '>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium '>2 Users</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>2 Files</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Public Share & Comments</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Chat Support</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>New Income apps</h1>
                                        </div>
                                        <div className='flex justify-center items-center mt-3'>
                                            <button className='text-green-400 bg-white even:bg-green-300 rounded-xl py-3 px-9 font-medium shadow-lg'>Signup for free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#54BD95]  rounded-2xl py-4 px-3">
                            <div className="space-y-3">
                                <h1 className='font-semibold text-xl text-center max-w-[250px] leading-normal text-white'>Free</h1>
                                <p className='text-xs  max-w-[250px] leading-relaxed text-center text-white'>Have a go and test your superpowers</p>
                                <div className="text-center relative text-white">
                                    <p className="absolute top-0 text-sm right-36">$</p>
                                    <h1 className="text-4xl font-bold ">0</h1>
                                </div>
                                <div className='flex justify-center items-center mt-3'>
                                    <button className=' rounded-xl py-2 px-5 font-medium shadow-lg bg-[#79d6b2] text-white text-sm'>Save $50 a year</button>
                                </div>
                                <div className='bg-white p-6 rounded-xl '>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium '>2 Users</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>2 Files</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Public Share & Comments</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Chat Support</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>New Income apps</h1>
                                        </div>
                                        <div className='flex justify-center items-center mt-3'>
                                            <button className='text-white bg-[#54BD95] rounded-xl py-3 px-9 font-medium'>Signup for free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl py-4 px-3 card-container">
                            <div className="space-y-3">
                                <h1 className='font-semibold text-xl text-center max-w-[250px] leading-normal'>Free</h1>
                                <p className='text-xs text-gray-400 max-w-[250px] leading-relaxed text-center'>Have a go and test your superpowers</p>
                                <div className="text-center relative">
                                    <p className="absolute top-0 text-sm right-36">$</p>
                                    <h1 className="text-4xl font-bold">0</h1>
                                </div>

                                <div className='bg-blue-50  p-6 rounded-xl '>
                                    <div className='flex flex-col gap-3'>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium '>2 Users</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>2 Files</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Public Share & Comments</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>Chat Support</h1>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <Image src={tick} width={18} />
                                            <h1 className='text-sm font-medium'>New Income apps</h1>
                                        </div>
                                        <div className='flex justify-center items-center mt-3'>
                                            <button className=' rounded-xl py-3 px-9 font-medium shadow-lg text-[#54BD95]'>Signup for free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* )) */}
                        {/* } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plan;