import React, { ReactNode } from "react";
import s from './P2.module.scss'

interface IP2Props {
    children: ReactNode
}

const P2: React.FC<IP2Props> = ({children}) => {
    return <p className={s.text}>{children}</p>
}

export {P2};