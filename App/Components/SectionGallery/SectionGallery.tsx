import Image from "next/image";
import React from "react";
import photo__1 from "./img/photo_1.png";
import photo__2 from "./img/photo_2.png";
import photo__3 from "./img/photo_3.png";
import photo__4 from "./img/photo_4.png";
import { H2 } from "../../utils/Text/H2/H2";
import { P1 } from "../../utils/Text/P1/P1";
import s from "./SectionGallery.module.scss";

const SectionGallery: React.FC = () => {
    return (
        <div className={s.gallery}>
            <H2>Gallery</H2>
            <div className={s.gallery__box}>
                <div className={s.gallery__box__left}>
                    <P1>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.</P1>
                    <div className={s.gallery__box__left__photo}>
                        <Image layout="intrinsic" src={photo__1.src} alt="developer 1" width={photo__1.width} height={photo__1.height} />
                    </div>
                </div>
                <div className={s.gallery__box__right}>
                    <div className={s.gallery__box__right__up}>
                        <div className={s.gallery__box__right__up__first}>
                            <Image layout="intrinsic" src={photo__2.src} alt="developer 2" width={photo__2.width} height={photo__2.height} />
                        </div>   
                        <div className={s.gallery__box__right__up__last}>
                            <Image layout="intrinsic" src={photo__3.src} alt="developer 3" width={photo__3.width} height={photo__3.height} />
                            <Image layout="intrinsic" src={photo__4.src} alt="developer 4" width={photo__4.width} height={photo__4.height} />
                        </div>
                    </div>
                    <P1>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</P1>
                </div>
            </div>
        </div>
    )
}

export {SectionGallery};