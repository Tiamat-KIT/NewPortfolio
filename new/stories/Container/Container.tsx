import "../../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants";

const ContaierClass = tv({
    base: "container mx-auto",
    variants: {
        size: {
            "xs": "p-2",
            "sm": "p-4",
            "md": "p-6",
            "lg": "p-8",
            "xl": "p-10",
            "x-xs": "px-2",
            "x-sm": "px-4",
            "x-md": "px-6",
            "x-lg": "px-8",
            "x-xl": "px-10",
            "y-xs": "py-2",
            "y-sm": "py-4",
            "y-md": "py-6",
            "y-lg": "py-8",
            "y-xl": "py-10",
            "aside": "p-4 w-80",
        },
    },
    defaultVariants: {
        size: "x-md",
    }
})

type ContainerVariants = VariantProps<typeof ContaierClass>
interface ContainerProps extends ContainerVariants {
    children: React.ReactNode,
    optionClass? :string
} 

export default function Container(plop: ContainerProps){
    return (
        <div className={`${ContaierClass({size: plop.size})} ${plop.optionClass}`}>
            {plop.children}
        </div>
    )
}