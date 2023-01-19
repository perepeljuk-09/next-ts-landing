import React from "react";
import Head from "next/head";

 interface IMetaProps {
    title: string;
    description: string;
 }

const Meta: React.FC<IMetaProps> = ({title, description}) => {
        return <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/favicon.ico" />
        </Head>
 }

 export {Meta};