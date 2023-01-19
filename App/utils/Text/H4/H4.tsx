import React, { ReactNode } from "react";
import s from './H4.module.scss'


interface IH4Props {
    children: ReactNode
}

const H4: React.FC<IH4Props> = ({children}) => {
    return <h4 className={s.h4__title}>{children}</h4>
}

export {H4};