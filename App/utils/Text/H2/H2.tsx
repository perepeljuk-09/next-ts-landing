import React, { ReactNode } from "react";
import s from './H2.module.scss'

interface IH2Props {
    children: ReactNode
}

const H2: React.FC<IH2Props> = ({children}) => {
    return <h2 className={s.h2__title}>{children}</h2>
}

export {H2};