import React from "react";
import { P1 } from "../../../utils/Text/P1/P1";
import s from "./Content.module.scss";

const Content: React.FC = () => {
    return (
        <div className={s.content}>
            <P1>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</P1>
            <span className={s.content__word__bg}>Front</span>
        </div>
    )
}

export {Content};