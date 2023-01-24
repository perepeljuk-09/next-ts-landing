import Image from "next/image";
import React, { useEffect, useState } from "react";
import manMain from "./img/man_1_main.png";
import manSubMain from "./img/man_2_main.png";
import womanMain from "./img/woman_main.png";
import man1Sub from "./img/man_1_sub.png";
import man2Sub from "./img/man_2_sub.png";
import womanSub from "./img/woman_sub.png";
import { Arrows } from "../../utils/Arrows/Arrows";
import { H2 } from "../../utils/Text/H2/H2";
import { H4 } from "../../utils/Text/H4/H4";
import { P1 } from "../../utils/Text/P1/P1";
import s from "./SectionReview.module.scss";

type Slider = {
    src: string;
    alt: string;
    width: number;
    height: number;
}

type reviewItem = {
    id: number;
    title: string;
    description: string;
    mainSlider: Slider;
    secondSlider: Slider;
    thirdSlider: Slider; 
}

const SectionReview: React.FC = () => {
    const firstItem: reviewItem = {id: 1, title: "Best courses ever", description: 'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
     mainSlider: {src: manMain.src, alt: "main mentor", height: manMain.height, width: manMain.width},
     secondSlider: {src: womanSub.src, alt: "sub mentor", height: womanSub.height, width: womanSub.width},
     thirdSlider: {src: man2Sub.src, alt: "sub mentor", height: man2Sub.height, width: man2Sub.width}
    }
    const secondItem: reviewItem = {id: 2, title: "Amazing teaching", description: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
     mainSlider: {src: womanMain.src, alt: "main mentor", height: womanMain.height, width: womanMain.width},
     secondSlider: {src: man1Sub.src, alt: "sub mentor", height: man1Sub.height, width: man1Sub.width},
     thirdSlider: {src: man2Sub.src, alt: "sub mentor", height: man2Sub.height, width: man2Sub.width}
    }
    const thirdItem: reviewItem = {id: 3, title: "Simple and easy", description: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
     mainSlider: {src: manSubMain.src, alt: "main mentor", height: manSubMain.height, width: manSubMain.width},
     secondSlider: {src: man1Sub.src, alt: "sub mentor", height: man1Sub.height, width: man1Sub.width},
     thirdSlider: {src: womanSub.src, alt: "sub mentor", height: womanSub.height, width: womanSub.width}
    }

    const reviews: reviewItem[] = [firstItem, secondItem, thirdItem];

    const [position, setPosition] = useState<number>(1);
    const [item, setItem] = useState<reviewItem>();

    const backStep = () => {
        setPosition(prev => prev !== 1 ? prev -= 1 : prev)
    }
    const nextStep = () => {
        setPosition(prev => prev !== reviews.length ? prev += 1 : prev)
    }

    useEffect(() => {
        setItem(reviews[position-1])
    }, [position])
    

    if(!item) {
        return <p>Loading...</p>
    }

    return (
        <section id="review" className={s.review}>
            <H2>Review</H2>
            <div className={s.review__box}>
                <div className={s.review__info}>
                    <H4>{item?.title}</H4>
                    <P1>{item?.description}</P1>
                </div>
                <div className={s.slider}>
                    <div className={s.slider__up__box}>
                        <div className={s.slider__count}>
                            <H4>{item?.id}/</H4>
                            <P1>{reviews.length}</P1>
                        </div>
                        <Arrows backStep={backStep} nextStep={nextStep}/>
                    </div>
                    <div className={s.slider__down__box}>
                        <div className={s.main__slider}>
                            <Image layout="intrinsic" src={item.mainSlider.src} alt={item.mainSlider.alt} width={item.mainSlider.width} height={item.mainSlider.height}/>
                        </div>
                        <div className={s.secondary__slider}>
                            <Image layout="intrinsic" src={item.secondSlider.src} alt={item.secondSlider.alt} width={item.secondSlider.width} height={item.secondSlider.height}/>
                        </div>
                        <div className={s.secondary__slider}>
                            <Image layout="intrinsic" src={item.thirdSlider.src} alt={item.thirdSlider.alt} width={item.thirdSlider.width} height={item.thirdSlider.height}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}


export {SectionReview};
