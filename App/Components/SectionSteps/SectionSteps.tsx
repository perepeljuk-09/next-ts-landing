import React from "react";
import Image from "next/image";
import steps from "./img/steps.png";
import { StepCard } from "../../utils/StepCard/StepCard";
import { H2 } from "../../utils/Text/H2/H2";
import s from "./SectionSteps.module.scss";

type StepCardType = {
    stepNumber: number;
    title: string;
    description: string;
}

const SectionSteps: React.FC = () => {

    const stepCards: StepCardType[] = [
        {stepNumber: 1, title: "Introduction to Front-End ", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "},
        {stepNumber: 2, title: "Overview of Development", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "},
        {stepNumber: 3, title: "Introduction to Front-End ", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "},
        {stepNumber: 4, title: "Overview of Development", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "},
        {stepNumber: 5, title: "Introduction to Front-End ", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "},
        {stepNumber: 6, title: "Overview of Development", description: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "}
    ]
    
    const leftCards = stepCards.filter(card => card.stepNumber % 2 != 0 )
    const rightCards = stepCards.filter(card => card.stepNumber % 2 == 0 )

    return (
        <section className={s.steps}>
            <H2>Steps</H2>
            <div className={s.steps__box}>
                <div className={s.steps__box__left}>
                    {leftCards.map( card => <StepCard key={card.stepNumber} {...card} isLeft={true}/>)}
                    <div className={s.ellipse}></div>
                </div>
                <div className={s.steps__box__photo}>
                    <Image layout="intrinsic" src={steps.src} alt="steps" height={steps.height} width={steps.width}/>
                </div>
                <div className={s.steps__box__right}>
                    {rightCards.map( card => <StepCard key={card.stepNumber} {...card} isLeft={false}/>)}
                </div>
            </div>
        </section>
    )
}

export {SectionSteps};