import HeroSection from "../components/hero";
import React, {useState} from "react";
import NavBar from "../components/navbar";
import ContentSection from "../components/contentsection";
import Testimonials from "../components/testimonials";
import Community from "../components/community";
import Team from "../components/team";
import AppStore from "../components/appstore";
import News from "../components/news";
import Footer from "../components/footer";
import FooterBottom from "../components/footerbottom";

export default function Home() {
  const [userInfo,setUserInfo] = useState()

  const userDataHandler = (data) =>{
    const userData = {
      ...data,
      id : Math.random().toString(),
    }
   setUserInfo(userData)
  };

  return (
    <div>
      <NavBar/>
      <HeroSection onSaveData = {userDataHandler}/>
      <ContentSection/>
      <Testimonials/>
      <Community />
      <Team />
      <AppStore/>
      <News/>
      <Footer/>
      <FooterBottom/>
    </div>
  );
}
