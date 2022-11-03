import logo from  '../public/Subtract.png';
import mainLogo from "../public/Subtract (1).png";
import Image from 'next/image';
import Link from 'next/link';
function NavBar() {
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">                         
                        <a className="navbar-brand " href="#">
                            <div className="image-logo-sub-2 pt-2">
                                <Image alt="image"src={logo} className="logo-sub-1 logo" />
                                <Image alt="image"src={mainLogo} className="logo-sub-2 logo" />
                                <span className="logo-head1"> NetBook</span>
                            </div>
                           
                          </a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-3 ml-3 mb-lg-0">
                              <li className="nav-item">
                                <a className="nav-link active" id="nav-home" aria-current="page" href="#">Home</a>
                              </li>
                              
                              <li className="nav-item dropdown pt-2">
                                <a>Profile</a>
                              </li>

                            </ul>

                        
                    
                      <div className="nav-form d-flex">
                       <Link href='/login'>
                       <button className="btn btn-primary login-btn" type="submit">Log In</button>
                       </Link>
                       <Link href='/signup'>
                       <button className="btn btn-secondary ms-1 login-btn" type="submit">Sign Up</button>
                       </Link>
                    </div>
                </div>
                </div>
                <hr className="navbar-line"/>
            </nav>
        </div>
    )
}

export default NavBar;