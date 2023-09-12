'use client'
import { ClassicNavbar } from '@/components/elements/navbar/navbar';
import MainHero from '@/components/section/hero/mainHero';
import Preposition from '@/components/section/proposition/preposition';
import Benefits from '@/components/section/benefits/benefits';
import Depo from '@/components/section/depo/depo';
import CallToAction from '@/components/section/calltoaction/calltoaction';
import Footer from '@/components/elements/footer/footer';

export default function Home() {

  return (
    <>  
        <ClassicNavbar/>

        <div id='hero'>
          <MainHero
            title="Renovate Your Amsterdam House"
            subtitle="With 3W Your Renovation Idea Comes True"
            description="Bellow you find more about our company, services, what our costumers say about our services and how you can schedule a free visit of our team at your house to know more about your idea."
            button="Know More"
          />
        </div>

        <div id='services'>
          <Preposition 
            title="Save up to 20% in your renovation"
            firstParag="Our experienced professionals are committed to delivering top-quality renovation services that will transform your space into the home of your dreams. In our image gallery, you can find our newest works, showcasing before-and-after photos of each project."
          />
        </div>

        <div id='benefits'>
          <Benefits 
            title="Main Reasons to Renovate With Us"
            description="Discover the Value of Our Free Renovation Consultation - Your Path to Informed Decisions, Cost Savings, and a Dream Renovation."
            firstBenefit="Personalized Guidance"
            firstBenefitDesc="Our experts will provide tailored advice to meet your unique renovation needs."
            secondBenefit="Budget Optimization"
            secondBenefitDesc="Discover cost-effective strategies to get the most value out of your project."
            thirdBenefit="Project Planning"
            thirdBenefitDesc="Get a head start with expert insights into design, materials, and timelines."
          />
        </div>
        
        <CallToAction
          title="Schedule a meeting to plan your renovation project"
          description=" Et autem eveniet ut accusantium reprehenderit tenetur fuga laborum sapiente, a praesentium fugit, recusandae maiores ea dolorem?"
        />

        <Footer/>

        {/*<Depo
          title="Our Happy Clients"
          description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
          subtitle="John Smith"
          firstDescDepo="Our experienced professionals are committed to delivering top-quality renovation services that will transform your space into the home of your dreams. In our image gallery, you can find our newest works, showcasing before-and-after photos of each project."
          secondTitleDepo="Elisa Martin"
          secondDescDepo="Our experienced professionals are committed to delivering top-quality renovation services that will transform your space into the home of your dreams. In our image gallery, you can find our newest works, showcasing before-and-after photos of each project."
        /> 

        <SideForm
          title="House Renovation in Amsterdam"
          subtitle="Fill the form for a free tecnical"
          description="If you want to renovate your house and are looking for the best option, lets schedule a free renovation meeting where we can show you how we can make your renovation idea come true."
          button="Know More"
          userCss={{backgroundImage: `url(${imgPath})`, backgroundSize: 'cover'}}
          formCss={{backgroundColor: '#fff'}}
          formTitle="Share your renovation idea"
          formDescription="Leave bellow a brief idea about your renovation project and the best day and time for a renovation consultancy."
          firstField="Name and Surname"
          secondField="Best Email"
          thirdField="Active Phone"
          fourthField="Renovation idea"
        />

        <BackgroundImage
          title="Renovate Your Amsterdam House"
          subtitle="With 3W Your Renovation Idea Comes True"
          description="Bellow you find more about our company, services, what our costumers say about our services and how you can schedule a free visit of our team at your house to know more about your idea."
          fontColor="white"
          button="Know More"          
        />

        <GalleryPath
          title="How do we work?"
          description="In just three steps your house can be the way you always dreamed."
          firstStepTitle="Subscribe For a Meeting"
          firstStepDescription="In just three steps your house can be the way you always dreamed."
          firstImgSrc={firstImg}
          secondStepTitle="We talk about your ideas"
          secondStepDescription="In just three steps your house can be the way you always dreamed."
          secondImgSrc={firstImg}
          thirdStepTitle="If you agree we start"
          thirdStepDescription="In just three steps your house can be the way you always dreamed."
          thirdImgSrc={firstImg}
        />

        <IlustrationBookPath
        
          title="Why choose us?"
          subtitle="Main reasons why you should count on us"
          description="You don't have to worry about tecniques, time or even tools. We havel everything you need to just save you time, money and get the beautiful house of your dreams"
          titleTwo="2222"
          subtitleTwo="2222"
          descriptionTwo="You don't have to worry about tecniques, time or even tools. We havel everything you need to just save you time, money and get the beautiful house of your dreams"
          titleThree="333333"
          subtitleThree="333333"
          descriptionThree="You don't have to worry about tecniques, time or even tools. We havel everything you need to just save you time, money and get the beautiful house of your dreams"
          firstImgSrc={firstImg}
          secondImgSrc={secondImg}
          thirdImgSrc={thirdImg}

        />*/}

        

    </>
  )
}

//backgroundImage: `url(${imgPath})`, backgroundSize: 'cover'

/*

        

*/