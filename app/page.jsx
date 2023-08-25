'Use Client'
import { H1, Parag } from '../components/elements/text/text';
import { Frame, Item, Wall } from '../components/layout/layout';
import { Button } from '../components/elements/button/button';
import Hero, { SideCalculator, SideForm } from '@/components/section/hero/hero';
import imgSide from '../components/section/hero/images/talking.jpg'
import { GalleryPath, IlustrationBookPath } from '@/components/section/path/path';
import firstImg from '../components/section/hero/images/studyathome.jpg'
import secondImg from '../components/section/hero/images/talking.jpg'
import thirdImg from '../components/section/hero/images/renovatinghouse.jpg'

export default function Home() {
  
  let imgPath = "https://img.freepik.com/free-photo/empty-room-gray-wall-room-with-wooden-floor_53876-128781.jpg?w=2000"

  return (
    <>

        <SideForm
          title="House Renovation in Amsterdam"
          subtitle="Subscribe for a free renovation consultancy"
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

        <GalleryPath
          title="How do we work?"
          description="In just three steps your house can be the way you always dreamed."
          firstStepTitle="Subscribe For a Meeting"
          firstStepDescription="In just three steps your house can be the way you always dreamed."
          firstImgSrc={firstImg}
          secondStepTitle="We talk about your ideas"
          secondStepDescription="In just three steps your house can be the way you always dreamed."
          secondImgSrc={secondImg}
          thirdStepTitle="If you agree we start"
          thirdStepDescription="In just three steps your house can be the way you always dreamed."
          thirdImgSrc={thirdImg}
          inlineCss={{backgroundColor: "#fff"}}
        />

        <IlustrationBookPath
        
          title="Why choose us?"
          subtitle="Main reasons why you should count on us"
          description="You don't have to worry about tecniques, time or even tools. We havel everything you need to just save you time, money and get the beautiful house of your dreams"
          firstImgSrc={firstImg}
          secondImgSrc={secondImg}
          thirdImgSrc={thirdImg}
          inlineCss={{backgroundColor: "#fff"}}

        />

        

    </>
  )
}

//backgroundImage: `url(${imgPath})`, backgroundSize: 'cover'

/*

        

*/