import React, { ReactNode } from "react";
import s from './H3.module.scss'

interface IH3Props {
    children: ReactNode
}

const H3: React.FC<IH3Props> = ({children}) => {
    return <h3 className={s.h3__title}>{children}</h3>
}

export {H3};