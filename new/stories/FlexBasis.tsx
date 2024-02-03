import "../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const FlexBasisClass = tv({
    variants: { 
        Basis: {
            noSet: "",
            auto: "basis-auto",
            "1/2": "basis-1/2",
            "1/3": "basis-1/3",
            "2/3": "basis-2/3",
            "1/4": "basis-1/4",
            "2/4": "basis-2/4",
            "3/4": "basis-3/4",
            "1/5": "basis-1/5",
            "2/5": "basis-2/5",
            "3/5": "basis-3/5",
            "4/5": "basis-4/5",
            "1/6": "basis-1/6",
            "2/6": "basis-2/6",
            "3/6": "basis-3/6",
            "4/6": "basis-4/6",
            "5/6": "basis-5/6",
            "1/12": "basis-1/12",
            "2/12": "basis-2/12",
            "3/12": "basis-3/12",
            "4/12": "basis-4/12",
            "5/12": "basis-5/12",
            "6/12": "basis-6/12",
            "7/12": "basis-7/12",
            "8/12": "basis-8/12",
            "9/12": "basis-9/12",
            "10/12": "basis-10/12",
            "11/12": "basis-11/12",
            full: "basis-full",
        }
     } ,
    defaultVariants: { },
})

type FlexBasisVariants = VariantProps<typeof FlexBasisClass>

interface FlexBasisProps extends FlexBasisVariants {
    children?: React.ReactNode
}

export default function FlexBasis(plop: FlexBasisProps){
    return (
        <div className={ FlexBasisClass(plop) }>
            {plop.children}
        </div>
    )
}