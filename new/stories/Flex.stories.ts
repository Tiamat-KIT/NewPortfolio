import type {Meta,StoryObj} from "@storybook/react"
import Flex from "./Flex"

const FlexMeta = {
    title: "Example/Flex",
    component: Flex,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Flex>

export default FlexMeta
type FlexStory = StoryObj<typeof FlexMeta>

export const ExampleFlexStory: FlexStory = {
    args: {},
} 
