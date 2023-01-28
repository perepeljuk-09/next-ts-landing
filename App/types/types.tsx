export type StepCardType = {
    stepNumber: number;
    title: string;
    description: string;
}

export type MentorType = {
    id: number;
    src: string;
    alt: string;
    width: number;
    height: number;
    name: string;
    description: string;
}

export type FAQCardType = {
    id: number;
    question: string;
    answer: string;
}

type Slider = {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export type reviewItem = {
    id: number;
    title: string;
    description: string;
    mainSlider: Slider;
    secondSlider: Slider;
    thirdSlider: Slider; 
}