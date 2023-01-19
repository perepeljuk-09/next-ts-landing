import React from "react"
import { P1 } from "../../../utils/Text/P1/P1";
import { Logo } from "../../../utils/Logo/Logo";
import s from "./../Footer.module.scss";


const LogoAddress: React.FC = () => {
    return (
        <div className={s.logo__address}>
            <Logo/>
            <P1>Wisconsin Ave, Suite 700
                <br/>Chevy Chase, Maryland 20815
            </P1>
        </div>
    )
}

export {LogoAddress};