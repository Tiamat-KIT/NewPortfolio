"use client";
import React,{useEffect, useRef} from "react";
import {z} from "zod";
import "../app/globals.css"
import Container from "./Container";

const ContactFormSchema = z.object({
    name: z.string().min(1,{message: "コードネームじゃないんですから..."}).max(50,{message: "名前が長すぎます"}),
    email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,{message: "メールアドレスの形式が違います"}),
    message: z.string().min(1,{message: "メッセージが空です"}).max(500,{message: "メッセージが長すぎます"})
});

export default function ContactForm(){
    const NameRef = useRef<HTMLInputElement>(null);
    const EmailRef = useRef<HTMLInputElement>(null);
    const MessageRef = useRef<HTMLTextAreaElement>(null);
    type ErrorType = {
        message?: string[]
        name?: string[] 
        email?: string[]
    }
    const ErrorRef = useRef<ErrorType>();
    useEffect((
    ) => {
        const Result = ContactFormSchema.safeParse({
            name: NameRef.current?.value as string,
            email: EmailRef.current?.value as string,
            message: MessageRef.current?.value as string
        });
        if(Result.success){
            (document.getElementById("submit") as HTMLButtonElement).classList.remove("btn-disabled");
            (document.getElementById("submit") as HTMLButtonElement).disabled = false;
        }else {
            (document.getElementById("submit") as HTMLButtonElement).classList.add("btn-disabled");
            (document.getElementById("submit") as HTMLButtonElement).disabled = true;
            ErrorRef.current = Result.error.formErrors.fieldErrors;
        }
    },[NameRef.current?.value,EmailRef.current?.value,MessageRef.current?.value]);

    return (
        <Container size="aside">
            <h1 className="text-3xl font-bold hero mb-4">Contact</h1>
            <form 
                action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT as string}
                method="POST"
                className="form-control flex flex-col gap-4"
            >
                <div>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        placeholder="Your-Name"
                        className={`input input-bordered max-w-xs ${ErrorRef.current?.name ? "input-error" : ""}`}
                        ref={NameRef}
                        />
                    {ErrorRef.current?.name && <div className="text-red-500">{ErrorRef.current.name[0]}</div>}
                </div>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email-Address"
                        className={`input input-bordered max-w-xs ${ErrorRef.current?.email ? "input-error" : ""}`}
                        ref={EmailRef}
                        />
                    {ErrorRef.current?.email && <div className="text-red-500">{ErrorRef.current.email[0]}</div>}
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Description"
                        className={`textarea textarea-bordered textarea-md ${ErrorRef.current?.message ? "textarea-error" : ""}`} 
                        ref={MessageRef}></textarea>
                    {ErrorRef.current?.message && <div className="text-red-500">{ErrorRef.current.message[0]}</div>}
                </div>
                <button id="submit" type="submit" disabled className="btn btn-info btn-disabled max-w-xs">送信</button>
            </form>
        </Container>
    )
}