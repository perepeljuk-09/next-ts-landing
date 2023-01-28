import React, { useState } from "react"
import Link from "next/link";
import s from "./../Footer.module.scss";

const CompanyListMobile: React.FC = () => {
    
    const [showList, setShowList] = useState<boolean>(false);

    return (
        <div className={showList ? `${s.company__mobile} ${s.active}` : `${s.company__mobile}`}>
            <span className={s.company__mobile__title} onClick={() => setShowList(val => !val)}>Company</span>
            <nav className={s.company__mobile__nav}>
                <ul className={showList ? `${s.company__mobile__nav__list} ${s.active}` : `${s.company__mobile__nav__list}`}>
                    <li className={s.company__mobile__nav__list__item}><Link className="anchor" href={'#about'}>About Us</Link></li>
                    <li className={s.company__mobile__nav__list__item}><Link className="anchor" href={'#steps'}>Steps</Link></li>
                    <li className={s.company__mobile__nav__list__item}><Link className="anchor" href={'#questions'}>FAQs</Link></li>
                    <li className={s.company__mobile__nav__list__item}><Link className="anchor" href={'#review'}>Review</Link></li>
                    <li className={s.company__mobile__nav__list__item}><Link className="anchor" href={'#gallery'}>Gallery</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export {CompanyListMobile};