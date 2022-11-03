import firstImage from '../public/firstImage.png'
import secondImage from '../public/secondImage.png'
import thirdImage from '../public/thirdImage.png'
import fourthImage from '../public/fourthImage.png'
import Image from 'next/image';
function Team() {
    return (
        <div className='container'> 
            <div className='row'>
                <div className='col-12 col-md-12 team-text-content'>
                    <div className='team-text-content text-center'>
                        <p className='team-top-head'>Valuable Team</p>
                        <h3 className="team-heading">Our Active Members</h3>
                        <p class="team-sub-text">when an unknown printer took a galley of type and meeting fari scrambled it.</p>
                    </div>
                </div>
                <div className='col-12 col-md-12 text-center d-flex justify-content-center mt-5 mb-4'>
                        <div className='team-middle-card d-flex p-2 justify-content-between'>
                            <p className='mt-2 newst'>Newst</p>
                            <p className='mt-2 popular'>Popular</p>
                            <div className='active-btn-container pt-1'>
                                <button className='btn btn-primary  btn-active'>Active</button>
                            </div>
                        </div>

                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-4'>
                    <div class="profile-card pt-5">
                        <div className='text-center d-flex flex-column align-items-center'>
                            <Image src={firstImage} className="profile-image" />
                            <p className='profile-name'>Fahim Rahim</p> 
                            <p className='profile-tag'>@rahman</p>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-4'>
                    <div class="profile-card pt-5">
                        <div className='text-center d-flex flex-column align-items-center'>
                            <Image src={secondImage} className="profile-image" />
                            <p className='profile-name'>Kazi Rahman</p> 
                            <p className='profile-tag'>@Rahman</p>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-4'>
                    <div class="profile-card pt-5">
                        <div className='text-center d-flex flex-column align-items-center'>
                            <Image src={thirdImage} className="profile-image" />
                            <p className='profile-name'>Mastereo Ali</p> 
                            <p className='profile-tag'>@Master</p>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-3 mt-4'>
                    <div class="profile-card pt-5">
                        <div className='text-center d-flex flex-column align-items-center'>
                            <Image src={fourthImage} className="profile-image" />
                            <p className='profile-name'>Ali Karon</p> 
                            <p className='profile-tag'>@Ali</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team;