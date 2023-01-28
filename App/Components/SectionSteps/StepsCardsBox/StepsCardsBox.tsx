import React from "react";
import { StepCard } from "../../../utils/StepCard/StepCard";
import {StepCardType} from "../../../types/types"

interface IStepCardsMobile {
    stepCards: StepCardType[];
}

const StepsCardsBox: React.FC<IStepCardsMobile> = ({stepCards}) => {
    return (
        <>
        {stepCards.map(card => (
            <StepCard key={card.stepNumber} {...card} isLeft={card.stepNumber % 2 != 0}/>
            )) }
        </>
    )
}

export {StepsCardsBox};