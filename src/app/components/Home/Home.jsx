 

import ParallaxContainer from "../About/ParallaxContainer";
import AboutSection from "./home-sections/About";
import QuoteSection from "./home-sections/Quote";
import CompanySection from "./home-sections/Company";
import DevelopmentSection from "./home-sections/Development";
 

import '../../about/AboutPage.scss'
 

 
import HeroSection from "./home-sections/Hero";
import TestimonialSection from "./home-sections/Testimonial";
import PortfolioSection from "./home-sections/Portfolio";
import TransformationSection from "./home-sections/Transformation";
import PopupForm from "./home-sections/popupForm";
 

 




function HomeCompo({ result }) {

 



  return (
    <>

      {result.map((ele) => (
        <div className="home_wrapper" key={ele.id}>


        
           <HeroSection  ele={ele} ParallaxContainer={ParallaxContainer}/>
        

          {/*about us section starts*/}
          <AboutSection ele={ele} />
          {/*about us section ends*/}





          {/*transformation section starts*/}
          <TransformationSection ele={ele} />
          {/*transformation section starts*/}




          {/*company section starts*/}
          <CompanySection ele={ele} />
          {/*company process section ends*/}





          {/*our development process starts*/}
          <DevelopmentSection ele={ele} result={result} />
          {/*our development process ends*/}




          {/*portfolio section starts*/}
          <PortfolioSection ele={ele} />
          {/*portfolio section ends*/}





          {/*testimonial section starts*/}
          <TestimonialSection ele={ele} />
          {/*testimonial section ends*/}



          {/*quote section ends*/}
          <QuoteSection ele={ele} />
          {/*quote section ends*/}
          
          
        </div>
      ))}
    </>
  );
}

export default HomeCompo;
