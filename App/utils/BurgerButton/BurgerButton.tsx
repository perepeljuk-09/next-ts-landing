import React from "react";
import s from "./BurgerButton.module.scss"

interface IBurgerButton {
    toggleShowMenu: () => void
}

const BurgerButton: React.FC<IBurgerButton> = ({toggleShowMenu}) => {
    return (
        <div className={s.burger} onClick={toggleShowMenu}>
            <span className={s.burger__btn}></span>
        </div>
    )
}

export {BurgerButton};