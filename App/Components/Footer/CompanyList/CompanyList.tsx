import React from "react"
import Link from "next/link";
import s from "./../Footer.module.scss";


const CompanyList: React.FC = () => {
    return (
        <div className={s.company}>
            <span className={s.company__title}>Company</span>
            <ul className={s.company__list}>
                <li className={s.company__list__item}><Link href={'#about'}>About Us</Link></li>
                <li className={s.company__list__item}><Link href={'#steps'}>Steps</Link></li>
                <li className={s.company__list__item}><Link href={'#questions'}>FAQs</Link></li>
                <li className={s.company__list__item}><Link href={'#review'}>Review</Link></li>
                <li className={s.company__list__item}><Link href={'#gallery'}>Gallery</Link></li>
            </ul>
        </div>
    )
}

export {CompanyList};