import React from 'react';
import { FaMedal, FaPenSquare, FaRegCheckCircle, FaSearch } from 'react-icons/fa';

const Exsection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-blue-200 mb-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2020/08/19/Pictures/_c2db1b98-e1c6-11ea-8b6e-0e7400ed2071.jpg" />
                    <div className='ml-10'>
                        <h1 className="text-5xl font-bold">Passionate Photographer</h1>
                        <p className="py-6">I am a Passionate Photographer and i took thoused of picture.Some of my picture are all wide populer.I became national champiagn of photograpy for two times and the next year i took place on fifth position in the world competition.</p>
                        <div className='flex mb-5'><FaRegCheckCircle className='text-3xl text-green-500 mr-3'></FaRegCheckCircle><p className='text-xl font-semibold'>National Geography Photographer</p></div>
                        <div className='flex mb-5'><FaRegCheckCircle className='text-3xl text-green-500 mr-3'></FaRegCheckCircle><p className='text-xl font-semibold'>National Champion </p></div>
                        <div className='flex mb-5'><FaRegCheckCircle className='text-3xl text-green-500 mr-3'></FaRegCheckCircle><p className='text-xl font-semibold'>International 5th </p></div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-96 bg-base-200 py-10">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold flex mb-16"><FaSearch className='text-blue-400 mr-10'></FaSearch>Watch Review</h1>
                        <h1 className="text-5xl font-bold flex my-16"><FaPenSquare className='mr-10'></FaPenSquare>Write review </h1>
                        <h1 className="text-5xl font-bold flex"><FaMedal className='text-yellow-500 mr-10'></FaMedal> Won Price</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exsection;