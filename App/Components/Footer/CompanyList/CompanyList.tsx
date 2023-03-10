import React from "react"
import Link from "next/link";
import s from "./../Footer.module.scss";

const CompanyList: React.FC = () => {
    return (
        <div className={s.company}>
            <span className={s.company__title}>Company</span>
            <ul className={s.company__list}>
                <li className={s.company__list__item}><Link className="anchor" href={'#about'}>About Us</Link></li>
                <li className={s.company__list__item}><Link className="anchor" href={'#steps'}>Steps</Link></li>
                <li className={s.company__list__item}><Link className="anchor" href={'#questions'}>FAQs</Link></li>
                <li className={s.company__list__item}><Link className="anchor" href={'#review'}>Review</Link></li>
                <li className={s.company__list__item}><Link className="anchor" href={'#gallery'}>Gallery</Link></li>
            </ul>
        </div>
    )
}

export {CompanyList};