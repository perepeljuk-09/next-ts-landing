import React, { ReactNode } from "react";
import s from "./H1.module.scss";

interface IH1Props {
    children: ReactNode;
}


const H1: React.FC<IH1Props> = ({children}) => {
    return <h1 className={s.main__title}>{children}</h1>
}

export {H1};