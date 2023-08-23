import Hero from "@/components/section/hero/hero"
import imgSide from '../../../components/section/hero/images/studyathome.jpg'

export default function Heros() {
    return (
        <>
            <Hero
                imgPath="https://img.freepik.com/premium-vector/multiethnic-people-afro-american-woman-caucasian-man-talking-speech-bubbles-heads-flat_316839-1304.jpg?w=2000"
                imgPathTwo="https://physicsworld.com/wp-content/uploads/2018/12/PWDec18REV-speech_HERO-1024x576.jpg"
                imgPathThree="https://t4.ftcdn.net/jpg/01/89/84/83/360_F_189848363_5bxVJySWMRpMoN4P08xwTcExFnUICnO8.jpg"
                sideImage={imgSide}
                sideImageAlt="This imagine is ..."
                backgroundImgPath="https://physicsworld.com/wp-content/uploads/2018/12/PWDec18REV-speech_HERO-1024x576.jpg"
                centerImagPath={imgSide}
                centerImagAlt="This imagine is ..."
            />
        </>
    )
}