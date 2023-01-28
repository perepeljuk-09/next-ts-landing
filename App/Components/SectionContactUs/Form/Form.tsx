import React from "react";
import { Button } from "../../../utils/Button/Button";
import { Input } from "../../../utils/Input/Input";
import {Controller, useForm, SubmitHandler} from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Error } from "../../../utils/Error/Error";
import axios from "axios";
import s from "./../SectionContactUs.module.scss";

interface IFormInput {
    name: string;
    email: string;
    phone: string;
}

const Form: React.FC = () => {

    const schema = yup.object({
        name: yup.string().required("Поле обязательно к заполнению").min(2, "Минимальная длина 2 символа").max(20, "максимальная длина 20 символов"),
        phone: yup.string().required("Поле обязательно к заполнению").min(11, "Минимальная длина 11 символов").max(20, "максимальная длина 20 символов"),
        email: yup.string().required("Поле обязательно к заполнению").email("Введите корректный email").min(8, "Минимальная длина 8 символов").max(30, "максимальная длина 30 символов"),
    })

    const {
        control,
        reset,
        handleSubmit,
        formState: {errors} 
    } = useForm<IFormInput>({mode: "all", defaultValues: {name: "", email: "", phone: ""} , resolver: yupResolver(schema)})

    const onSubmit: SubmitHandler<IFormInput> = (data) => {

        axios.post("http://localhost:3004/feedback", data).then(
            res => {
                console.log(res, "was success")
                reset({email: "", name: "", phone: ""})
            }).catch(er => console.log(er.message, "was error"))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
                name="name"
                control={control}
                render={({field}) => <Input error={errors?.name?.message} {...field} placeholder="Name"/> }
            />  
            {errors?.name && <Error>{errors.name.message}</Error>}
            <Controller
                name="phone"
                control={control}
                render={({field}) => <Input error={errors?.phone?.message} {...field} placeholder="Phone"/> }
            />  
            {errors?.phone && <Error>{errors.phone.message}</Error>}
            <Controller
                name="email"
                control={control}
                render={({field}) => <Input error={errors?.email?.message} {...field} placeholder="E-mail"/> }
            />  
            {errors?.email && <Error>{errors.email.message}</Error>}
            <Button type="submit" name='Send'/>
        </form>
    )
}
export {Form};








