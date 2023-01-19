import React from "react";
import { SocialMedia } from "./SocialMedia/SocialMedia";
import { CompanyList } from "./CompanyList/CompanyList";
import { LogoAddress } from "./LogoAddress/LogoAddress";
import s from "./Footer.module.scss";



const Footer: React.FC = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__wrapper}>
                <div className={s.footer__wrapper__container}>
                    <LogoAddress/>
                    <CompanyList/>
                    <SocialMedia/> 
                </div>
            </div>
        </footer>
    )
}

export {Footer};