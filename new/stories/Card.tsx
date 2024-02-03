import "../app/globals.css"
import {tv,type VariantProps} from "tailwind-variants"

const CardClass = tv({
    base: "card",
    variants: {
        border: {
            true: "card-bordered",
        },
        compact: {
            true: "card-compact",
        },
        "img-full": {
            true: "image-full",
        },
        glass: {
            true: "glass",
        },
        side: {
            true: "card-side",
            false: "card-normal",
        }
    },
    defaultVariants: {
        border: false,
        compact: false,
        "img-full": false,
        glass: false,
        side: false
    }
})

type CardVariants = VariantProps<typeof CardClass>

interface CardProps extends CardVariants {
    img_src?: string,
    title: string,
    description?: string | JSX.Element | JSX.Element[],
    Button: React.ReactNode
    key?:  number,
    optionClass? :string
}

export default function Card(plop: CardProps){
    return (
        <div className={`${CardClass(plop)} ${plop.optionClass}`}>
            {plop.img_src && <figure><img src={plop.img_src} alt="Shoes" /></figure>}
            {/* {plop.children} */}
            <div className="card-body">
                <h2 className="card-title">{plop.title}</h2>
                <div>{plop.description}</div>
                <div className="card-actions justify-end">
                    {plop.Button}
                </div>
            </div>
        </div>
    )
}