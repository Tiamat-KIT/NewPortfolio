"use client"
import "../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const ModalClass = tv({
    base: "",
    variants: {
        backdrop: {
            false: "",
            true: "modal-backdrop",
        },
        responsive: {
            true: "modal-bottom sm:modal-middle",
        }
    },
    defaultVariants: {
        backdrop: false,
        responsive: false
    }
})

type ModalVariants = VariantProps<typeof ModalClass>

interface ModalProps extends ModalVariants {
    children: React.ReactNode,
    modal_id: string,
    button?: React.ReactNode,
}

export default function Modal(plop: ModalProps){
    
    return (
        <>
            <button
                className="btn btn-ghost btn-circle m-1"
                onClick={
                    () => (document.getElementById(plop.modal_id) as HTMLDialogElement).showModal()
                }>{plop.button ? plop.button : "Push!"}</button>
            <dialog id={plop.modal_id} className={`modal ${plop.responsive ? "modal-bottom sm:modal-middle" : ""}`}>
                <div className="modal-box">
                    {plop.children}
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={
                                () => (document.getElementById(plop.modal_id) as HTMLDialogElement).close()
                            }>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
        
    )
}