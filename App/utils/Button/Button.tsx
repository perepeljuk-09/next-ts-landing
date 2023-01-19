import React from "react";
import s from "./Button.module.scss";

interface IButtonProps {
    name: string;
    type?: string;
    disabled?: boolean;
}

const Button: React.FC<IButtonProps> = (props: React.HTMLProps<HTMLButtonElement>) => {
    return <button  disabled={props.disabled} className={s.btn}>{props.name}</button>
}

export {Button};