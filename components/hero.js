import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import HeroImage from '../public/Herobg.jpg';
function HeroSection() {
    return (
        <div className="hero-bg-container">
            <div className="container">
            <div className="row  p-4">
                    <div className="col-12 col-sm-6 col-md-6 d-flex flex-column justify-content-center">
                            <div className="btn-hero-network">
                                <button className="btn hero-network-btn1">NetBook Community</button>
                            </div>
                            <div>
                                <h1 className="hero-head">Making Login Forms in an Easy Way </h1>
                            <p className="hero-sub-head">More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                            </div>
                            <div className="d-flex ">
                            <Link href="/signup">
                                    <button className="btn btn-secondary p-3 btn-signup">Signup</button>
                                </Link>
                                <Link href="/login">
                                    <button className="btn btn-primary btn-signup p-3">Login</button>
                                </Link>
                            </div>
                    </div>
            
                    <div className="col-12 col-sm-6 col-md-6">
                        <Image alt="img" src ={HeroImage} className="hero-image w-100 h-100"/>
                    </div>

            </div>
        </div>
        </div>
    )
}

export default HeroSection ;