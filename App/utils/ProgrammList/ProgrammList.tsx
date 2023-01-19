import React from "react";
import angular from "./img/angular.png";
import react from "./img/react.png";
import vue from "./img/vue.png";
import js from "./img/js 1.png";
import {ProgrammItem} from "./programmItem/ProgrammItem";
import s from "./ProgrammList.module.scss";

type programmItem = {
    id: number;
    src: string;
    alt: string;
    name: string;
    height: number;
    width: number;
}

const ProgrammList: React.FC = () => {
    const programms: programmItem[] = [
        {id: 1, src: `${angular.src}`, alt: 'angular photo', name: 'Angular', width: angular.width, height: angular.height },
        {id: 2, src: `${react.src}`, alt: 'react photo', name: 'React', width: react.width, height: react.height},
        {id: 3, src: `${vue.src}`, alt: 'vue photo', name: 'Vue.js', width: vue.width, height: vue.height},
        {id: 4, src: `${js.src}`, alt: 'js photo', name: 'JavaScript', width: js.width, height: js.height}
    ]

    return (
        <div className={s.box__programms}>
            {programms.map(p => <ProgrammItem key={p.id} {...p}/>)}
            <div className={s.ellipse}></div>
        </div>
    )
}

export {ProgrammList};