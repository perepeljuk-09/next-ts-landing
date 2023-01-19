import React, { ReactNode } from "react";
import { P1 } from "../Text/P1/P1";

type ErrorProps = {
    children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({children}) => {
    return (
        <P1>{children}</P1>
    )
}

export {Error};