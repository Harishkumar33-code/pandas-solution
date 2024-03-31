import Link from 'next/link';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
type TopbarProps = {

};

const Topbar: React.FC<TopbarProps> = () => {

    return (
        <><nav className='class="relative flex h-[50px] w-full shrink-0 items-center px-5 bg-dark-layer-1 text-dark-gray-7"'>
            <div className={`flex w-full items-center justify-between max-w-[1200px] mx-auto`}>
                <div className="flex items-center"> {/* Updated alignment for the first child */}
                    <Link href='/' className='h-[22px] text-2xl font-bold text-nav-green'>
                        Pandas
                    </Link>
                </div>
                <div className='flex items-center gap-4 flex-1 justify-center'>
                    <div
                        className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                    >
                        <FaChevronLeft />
                    </div>
                    <Link
                        href='/'
                        className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
                    >
                        <div>
                            <BsList />
                        </div>
                        <p className='text-1.5xl font-bold text-nav-green'>Problem List</p>
                    </Link>
                    <div
                        className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                    >
                        <FaChevronRight />
                    </div>
                </div>
            </div>

        </nav></>)
}
export default Topbar;