import type {Meta,StoryObj} from "@storybook/react"
import FlexBasis from "./FlexBasis"

const FlexBasisMeta = {
    title: "Example/FlexBasis",
    component: FlexBasis,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FlexBasis>

export default FlexBasisMeta
type FlexBasisStory = StoryObj<typeof FlexBasisMeta>

export const ExampleFlexBasisStory: FlexBasisStory = {
    args: {
        children: "FlexBasis",
        Basis: "auto",
    },
} 
