import mobileImage from '../public/mobile muckup.png'
import AppImage from '../public/AppStore.png';
import PlayImage from '../public/PlayStore.png';
import Image from 'next/image';
function AppStore(){
    return(
        <div className='container-fluid app-store-bg '>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 d-flex flex-column justify-content-center pt-5'>
                        <div className="app-text-container text-left">
                            <p className='app-top-text'>Get our Application</p>
                            <h3 className='app-head'>You Can Easily Find This App....</h3>
                            <p className='app-sub-text'>I say chap that's suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                        </div>
                        <div className='app-image-content mr-auto'>
                            <Image  alt="img" src={AppImage} className="app-image" />
                            <Image alt="img" src={PlayImage} className="app-image" />
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div>
                            <Image alt="img" src={mobileImage} className="mobile-img w-100 h-100"/>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AppStore;