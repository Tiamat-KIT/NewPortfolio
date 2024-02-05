import type {Meta,StoryObj} from "@storybook/react"
import Card from "./Card"

const CardMeta = {
    title: "Example/Card",
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default CardMeta
type CardStory = StoryObj<typeof CardMeta>

export const ExampleCardStory: CardStory = {
    args: {
        title: "Card Title",
        border: true,
        compact: false,
        "img-full": false,
        img_src: "https://via.placeholder.com/150",
        glass: false,
        side: false,
        description: "Card description",
        Button: <button className="btn">Button</button>,
    },
} 
