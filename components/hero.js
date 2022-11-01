import React from "react";
import Link from 'next/link';
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
                        <img src = 'https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?w=740&t=st=1667295798~exp=1667296398~hmac=7f50943c06361857dd5fa60ad6e3fe332502f04498cb5fb473ad5685c94e27ad' className="hero-image w-100"/>
                    </div>

            </div>
        </div>
        </div>
    )
}

export default HeroSection ;