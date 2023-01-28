import Image from "next/image";
import React from "react";
import fb from "./icons/fb.png";
import meta from "./icons/meta.png";
import twit from "./icons/twitter.png";
import inst from "./icons/inst.png";
import Link from "next/link";
import s from "./../Footer.module.scss";

const SocialMedia: React.FC = () => {
    return (
            <div className={s.media}>
                <span className={s.media__title}>Social media</span>
                <div className={s.media__icons}>
                    <Link href={'/'}><Image src={fb.src} alt="facebook" width={fb.width} height={fb.height} className={s.media__icons__item}/></Link>
                    <Link href={'/'}><Image src={meta.src} alt="meta" width={meta.width} height={meta.height} className={s.media__icons__item}/></Link>
                    <Link href={'/'}><Image src={twit.src} alt="twitter" width={twit.width} height={twit.height} className={s.media__icons__item}/></Link>
                    <Link href={'/'}><Image src={inst.src} alt="instagramm" width={inst.width} height={inst.height} className={s.media__icons__item}/></Link>
                </div>
            </div>
    )
}

export {SocialMedia};