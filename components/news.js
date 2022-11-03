import React from "react";
import firstImage from "../public/newsFirst.png";
import secondImage from "../public/newsSecond.png";
import thirdImage from "../public/newsThird.png"
import Image from "next/image";
function News() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-md-12 text-center mt-5 mb-5 pt-5 pb-5">
                   <p className="news-text">Get our Application</p>
                   <h1 className="news-top-heading">Our Latest News</h1>
                </div>
                <div className="col-12 col-md-4">
                    <Image src={firstImage} className="news-image w-100" />
                    <div className="news-content pt-4 pl-3">
                        <h4 className="news-sub-text pb-2">It Does Not Matter Hows Slowly go as Long</h4>
                        <p>Continue Reading
                        <a href="#" className="continue-link">
                        
                        </a>
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                <Image src={secondImage} className="news-image w-100" />
                    <div className="news-content pt-4 pl-3">
                        <h4 className="news-sub-text pb-2">Netbook Network Added New Photo Filter</h4>
                        <p>Continue Reading
                        <a href="#" className="continue-link">
                            
                        </a>
                        </p>
                    </div>

                </div>
                <div className="col-12 col-md-4">
                <Image src={thirdImage} className="news-image w-100" />
                    <div className="news-content pt-4 pl-3">
                        <h4 className="news-sub-text pb-2"> We Optimised Netbooks Better Navigation</h4>
                        <p>Continue Reading
                        <a href="#" className="continue-link ">
                            
                        </a>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default News;