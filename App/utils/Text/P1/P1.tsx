import React, { ReactNode, ComponentProps } from "react";
import s from './P1.module.scss'

type IP1Props = {
    children: ReactNode;

} & ComponentProps<'p'>

const P1: React.FC<IP1Props> = ({children, onClick}) => {
    return <p className={s.text} onClick={onClick}>{children}</p>
}

export {P1};