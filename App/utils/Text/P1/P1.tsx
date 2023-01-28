import React, { ReactNode } from "react";
import s from './P1.module.scss'

interface IP1Props {
    children: ReactNode
}

const P1: React.FC<IP1Props> = ({children}) => {
    return <p className={s.text}>{children}</p>
}

export {P1};