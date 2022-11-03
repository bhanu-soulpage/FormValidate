import React from "react";
import firstIcon from '../public/First-Icon.png';
import secondIcon from '../public/Second-Icon.png';
import thirdIcon from '../public/Third-Icon.png';
import fourthIcon from '../public/Fourth-Icon.png';
import fifthIcon from '../public/Fifth-Icon.png';
import sixthIcon from  '../public/Sixth-Icon.png';
import Image from "next/image";
function Community () {
    return (
        <div className="community-bg-container">
            <div className="container">
            <div className="row ">
                <div className="col-12 col-md-12 text-center mt-5">
                    <p className="our-cm">Our Community</p>
                    <h3>Community Main Feature</h3>
                    <p className="sub-text-community">The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>
            </div>
            <div className="row community-cards-section">
                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                        <Image src={firstIcon} className="community-icon"/>
                        <div className="pt-2 text-content">
                            <h6 className="community-head">Members , Friends</h6>
                            <p className="community-text">Members, Friends Connection ( like followers ), Private Message</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                            <Image src={secondIcon} className="community-icon"/>
                            <div className="pt-2 text-content">
                                <h6 className="community-head">Groups</h6>
                                <p className="community-text">Your users can create groups to let other users to join and talk</p>
                            </div>
                    </div>

                </div>

                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                            <Image src={thirdIcon} className="community-icon"/>
                            <div className="pt-2 text-content">
                                <h6 className="community-head">Forums</h6>
                                <p className="community-text">Forum is ready by BBPress. Your users can make topics and talk.</p>
                            </div>
                    </div>

                </div>

                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                            <Image src={fourthIcon} className="community-icon"/>
                            <div className="pt-2 text-content">
                                <h6 className="community-head">Custom Module</h6>
                                <p className="community-text">You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.</p>
                            </div>
                    </div>

                </div>

                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                            <Image src={fifthIcon} className="community-icon"/>
                            <div className="pt-2 text-content">
                                <h6 className="community-head">List Builder</h6>
                                <p className="community-text">Members, Groups list can be modified by drag & drop live builder.</p>
                            </div>
                    </div>

                </div>
                
                <div className="col-12 col-md-6 mt-3">
                    <div className="community-card d-flex p-3 pt-4">
                            <Image src={sixthIcon} className="community-icon"/>
                            <div className="pt-2 text-content">
                                <h6 className="community-head">List Scroll Effects</h6>
                                <p className="community-text">8 different scroll effects are ready.You can always change by your tastes.</p>
                            </div>
                    </div>

                </div>


            </div>

        </div>
        </div>
    )
}

export default Community;