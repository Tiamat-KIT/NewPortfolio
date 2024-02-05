"use client";
import React,{useEffect, useRef, useState} from "react";
import {z} from "zod";
import "../../app/globals.css"
import Container from "../Container/Container";

const ContactFormSchema = z.object({
    name: z.string().min(1,{message: "コードネームじゃないんですから..."}).max(50,{message: "名前が長すぎます"}),
    email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,{message: "メールアドレスの形式が違います"}),
    message: z.string().min(1,{message: "メッセージが空です"}).max(500,{message: "メッセージが長すぎます"})
});

export default function ContactForm(){
    /* const [FormResult,setFormResult] = useState(
        ContactFormSchema.safeParse({
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            message: (document.getElementById("message") as HTMLTextAreaElement).value
        })
    )

    useEffect(() => {
        if(FormResult!.success){
            (document.getElementById("submit") as HTMLButtonElement).classList.remove("btn-disabled");
            (document.getElementById("submit") as HTMLButtonElement).disabled = false;
        }else {
            (document.getElementById("submit") as HTMLButtonElement).classList.add("btn-disabled");
            (document.getElementById("submit") as HTMLButtonElement).disabled = true;
        }
    },[]); */

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
                        className={`input input-bordered max-w-xs`} /* ${Result.error.formErrors.fieldErrors?.name ? "input-error" : ""} */
                        />
                    {/* {FormResult!.error.formErrors.fieldErrors?.name && <div className="text-red-500">{Result.error.formErrors.fieldErrors.name[0]}</div>} */}
                </div>
                <div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email-Address"
                        className={`input input-bordered max-w-xs`} /* ${Result.error.formErrors.fieldErrors?.email ? "input-error" : ""} */
                        />
                    {/* {FormResult!.error.formErrors.fieldErrors?.email && <div className="text-red-500">{Result.error.formErrors.fieldErrors.email[0]}</div>} */}
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Description"
                        className={`textarea textarea-bordered textarea-md`} /* ${Result.error.formErrors.fieldErrors?.message ? "textarea-error" : ""} */ 
                        ></textarea>
                    {/*{FormResult!.error.formErrors.fieldErrors?.message && <div className="text-red-500">{Result.error.formErrors.fieldErrors.message[0]}</div>} */}                </div>
                <button id="submit" type="submit" disabled className="btn btn-info btn-disabled max-w-xs">送信</button>
            </form>
        </Container>
    )
}