import signup from '../../public/people-signup.png'
import getStarted from '../../public/get-started.png'
import bar from '../../public/people-bar.png'
import people1 from '../../public/people-1.png'
import people2 from '../../public/people-2.png'
import people3 from '../../public/people-3.png'
import people4 from '../../public/people-4.png'
import people5 from '../../public/people-5.png'
import Image from 'next/image'

const People = () => {
    return (
        <div className='flex justify-center items-center py-24'>
            <div className="flex gap-20">
                <div className='flex-1 flex flex-col justify-start items-start gap-8'>
                    <h1 className="text-4xl font-bold max-w-sm text-white leading-normal">
                        People are Saying About DoWhith
                    </h1>
                    <h5 className='text-sm max-w-sm leading-relaxed font-medium text-gray-400'>Everything you need to accept to payment and grow your money of manage anywhere on planet</h5>
                    <Image src={bar} className='place-self-start' width={40} />
                    <h5 className='text-sm max-w-sm leading-relaxed font-medium text-gray-400'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</h5>
                    <h5 className='text-sm max-w-sm leading-relaxed font-medium text-gray-400'>_ Aria Zinanrio</h5>
                    <div className='flex justify-between items-center gap-3'>
                        <Image src={people1} width={50} />
                        <Image src={people2} width={50} />
                        <Image src={people3} width={50} />
                        <Image src={people4} width={50} />
                        <Image src={people5} width={50} />
                    </div>
                </div>
                <div className="flex-1 justify-center items-center flex">
                    <Image src={getStarted} />
                </div>
            </div>
        </div>
    );
};

export default People;