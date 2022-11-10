import React from 'react';
import { FaBeer, FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='h-48 bg-black text-white flex'>
                <div className='w-1/2'>
                    <p className='text-center py-24'><span className='text-red-500 font-bold'>&copy;PHOTO TIPS</span></p>
                </div>
                <div className='w-1/2 flex'>
                    <div className='w-1/2 my-16'>
                        <p>Nakipur </p>
                        <p>Shyamnagor,Shatkhira</p>
                        <p> Kulna, Bangladesh</p>
                    </div>
                    <div className=' flex my-24'>
                        <a href="https://www.facebook.com"><FaFacebook className='text-4xl mr-5'></FaFacebook></a>
                        <a href="https://www.instagram.com"> <FaInstagram className='text-4xl mr-5'></FaInstagram></a>
                        <a href="https://www.twitter.com"> <FaTwitter className='text-4xl mr-5'></FaTwitter></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;