import type {Meta,StoryObj} from "@storybook/react"
import Container from "./Container"

const ContainerMeta = {
    title: "Example/Container",
    component: Container,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Container>

export default ContainerMeta
type ContainerStory = StoryObj<typeof ContainerMeta>

export const ExampleContainerStory: ContainerStory = {
    args: {
        size: "lg",
        children: "Hello World",
    },
} 
