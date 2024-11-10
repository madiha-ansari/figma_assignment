import React from 'react'
import Header from "../components/header/page"
import Image from 'next/image'

const Page = () => {
    return (
        <div>
            <Header />
            <div className='flex h-[189%] mt-7'>
                <div className='flex flex-col items-start m-16 justify-center w-[496px] top-316px left-176px space-y-3'>
                    <div className='flyIn-main font-bold font-libreBodoni text-2xl'>
                        <p>IMPECCABLE</p>
                        <p>CRAFTSMASHIP AND</p>
                        <p>FINESSE</p>
                    </div>
                    <div className='w-[920px] h-[147px]'>
                        <div className='slideIn-pic top-[533px] left-[171px] text-headerBackground font-medium text-1xl'>
                            <p>An example of intricate workmanship and detail, elegant</p>
                            <p>necklaces and long and short chains form a part of our</p>
                            <p>desirable collection.</p>
                        </div>
                        <button className='fly-in-main hover:bg-black text-lg font-libreBodoni p-10px bh-headerBackground rounded-lg h-[40px] w-[170px] mt-7 text-white '>Explore Now</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <Image
                        src="pic.png"
                        width={300}
                        height={400}
                        alt='img'
                        children="slideIn-pic"
                    />
                </div>
            </div>
        </div>
    )
}

export default Page
