import "../../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const FlexClass = tv({
    base: "flex",
    variants: {
        Direction: {
            noSet: "",
            row: "flex-row",
            col: "flex-col",
            rowReverse: "flex-row-reverse",
            colReverse: "flex-col-reverse",
        },
        Wrap: {
            noSet: "",
            wrap: "flex-wrap",
            nowrap: "flex-nowrap",
            reverse: "flex-wrap-reverse",
        },

    },
    defaultVariants: {
        Direction: "noSet",
        Wrap: "noSet"
    }
})

type FlexVariants = VariantProps<typeof FlexClass>

interface FlexProps extends FlexVariants {
    children?: React.ReactNode
}

export default function Flex(plop: FlexProps){
    return (
        <div className={ FlexClass(plop) }>
            {plop.children}
        </div>
    )
}