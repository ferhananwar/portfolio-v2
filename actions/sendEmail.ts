"use server";
import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
    if(!value || typeof value !== "string" || value.length > maxLength){
        return false;
    }
    return true;
}

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');
    if(!validateString(senderEmail, 500)){
        return{
            error: "Invalid sender email",
        };
    }

    if(!validateString(message, 5000)){
        return{
            error: "Invalid message",
        };
    }

    let data;
    try{
        await resend.emails.send({
            from:"Contact Form <onboarding@resend.dev>",
            to:'ferhananwar0@gmail.com',
            subject:"Message from contact form",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail,{
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown){
        let message: string;
        if(error instanceof Error)
        return{
            error: error.message,
        }
        else{
            message = "Somehthing went wrong";
        }
    }

    return {
        data,
    };

  };