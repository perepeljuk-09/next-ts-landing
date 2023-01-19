import React from "react"
import s from "./Input.module.scss"

type InputProps = {
    error?: string;
} & React.ComponentProps<'input'>

const Input: React.FC<InputProps> = ({error, ...props}) => {
    
    return <div className={props?.disabled ? `${s.wrapper__disabled}` : error ? `${s.wrapper__error}` : `${s.wrapper__gradient}`}>
            <div className={s.wrapper__bg}> 
                <input className={error ? `${s.custom__input} ${s.error}` : `${s.custom__input}`} {...props} />
            </div>
        </div>
}

export {Input};