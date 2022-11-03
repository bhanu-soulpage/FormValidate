
function Footer() {
    return (
    <div className='container-fluid footer-bg'> 
        <div className='container'>
            <div className='row pt-3 pb-5'>
                <div className='col-6 col-md-2 pt-5 pb-4'>
                    <div>
                        <h6 className='footer-head'>Home</h6>
                        <div className='d-flex flex-column footer-elements pt-2'>
                            <p>Home</p>
                            <p>Community</p>
                            <p>Events</p>
                            <p>Contact</p>
                        </div>
                    </div>

                </div>
                <div className='col-6 col-md-2 pt-5 pb-4'>
                <div>
                        <h6 className='footer-head'>Resources</h6>
                        <div className='d-flex flex-column footer-elements pt-2'>
                            <p>Blog</p>
                            <p>News</p>
                            <p>Guides</p>
                            <p>Help Center</p>
                        </div>
                    </div>

                </div>
                <div className='col-6 col-md-2 pt-5 pb-4'>
                <div>
                        <h6 className='footer-head'>Community</h6>
                        <div className='d-flex flex-column footer-elements pt-2'>
                            <p>Newsfeed</p>
                            <p>Profile</p>
                            <p>Friends</p>
                            <p>Forums</p>
                        </div>
                    </div>

                </div>
                <div className='col-6 col-md-2 pt-5 pb-4'>
                <div>
                        <h6 className='footer-head'>Main Links</h6>
                        <div className='d-flex flex-column footer-elements pt-2'>
                            <p>Members</p>
                            <p>Activity</p>
                            <p>Groups</p>
                            <p>Private Group</p>
                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-4 d-flex flex-column justify-content-center'>
                    <div>
                        <h4 className='footer-bottom-head '>Subscribe Cikle<br/> Newsletter</h4>
                        <p className='footer-bottom-text '>Subscribe to be the first one to know about updates. Enter your email</p>
                        <div class="input-group mt-4">
                            <input type="text" class="form-control" placeholder="E-Mail Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class=" subscribe-btn1" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>
                </div>
                {/* Footer bottom section */}
                {/* <div className='col-12 col-md-12 footer-bottom-bg mb-0 p-3 '>
                    <div className='d-flex flex-row justify-content-between footer-bottom-sec'>
                        <p>Besnik Creative Agency.</p>
                        <div className="image-logo-sub-2 pt-2">
                                <img src={logo} className="logo-sub-1 logo" />
                                <img src={mainLogo} className="logo-sub-2 logo" />
                                <span className="logo-head"> NetBook</span>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className='icon-bg'>
                                <FaTwitter/>
                            </div>
                            <div className='icon-bg'>
                                <FaInstagram/>
                            </div>
                            <div className='icon-bg'>
                                <FaFacebookF/>
                            </div>
                            <div className='icon-bg'>
                                <FaLinkedinIn/>
                            </div>

                        </div>
                           
                    </div> 

    </div>*/}
            </div>
        </div>
    </div>

    )
}

export default Footer;