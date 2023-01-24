import Link from "next/link";
import React from "react";
import { Button } from "../../utils/Button/Button";
import { H1 } from "../../utils/Text/H1/H1";
import { H3 } from "../../utils/Text/H3/H3";
import { P1 } from "../../utils/Text/P1/P1";
import s from "./MainBlock.module.scss";


const MainBlock: React.FC = () => {
    return (
        <section className={s.Main__Block}>
            <div className={s.inner__up__content}>
                <H1>Front-End</H1>
                <P1>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).</P1>
            </div>
            <div className={s.inner__down__content}>
                <Link href={"#contact__us"}>
                    <Button name="Start my career change"/>
                </Link>
                <H1>Developer</H1>
                <H3>Courses</H3>
            </div>
        </section>
    )
}

export {MainBlock};