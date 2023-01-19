import React from "react";
import { H3 } from "../Text/H3/H3";
import { H4 } from "../Text/H4/H4";
import { P1 } from "../Text/P1/P1";
import s from "./StepCard.module.scss";

type StepCardProps = {
    stepNumber: number;
    title: string;
    description: string;
    isLeft: boolean;
}

const StepCard: React.FC<StepCardProps> = ({stepNumber, title, description, isLeft}) => {
    return (
        <div className={isLeft ? `${s.card}` : `${s.card} ${s.left}`}>
            <div className={s.card__wrapper}>
                <div className={s.card__wrapper__inner}>
                    <div className={s.card__wrapper__inner__info}>
                        <H4>Step {stepNumber}</H4>
                        <H3>{title}</H3>
                        <P1>{description}</P1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {StepCard};