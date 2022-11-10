import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' my-10 mx-auto ' style={{height:'500px'}}>
            <div className="hero w-3/4 mx-auto rounded " style={{ backgroundImage: `url("https://resources.pulse.icc-cricket.com/ICC/photo/2019/07/07/df88ae9a-7a89-48e3-adf3-f641f160a14c/Shakib.jpg")`, height:'500px' }}>
                <div className="hero-overlay bg-opacity-96"></div>
                <div className="hero-content text- text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Tips Of Photography</h1>
                        <p className="mb-5 text-xl">I provide great secret of Photography, by which you will be able to take the best pricture.Visit our website , review our work and learn how to take best picture even by your mobile.</p>
                        <Link to='/allservices'><button className="btn btn-primary">Services</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;