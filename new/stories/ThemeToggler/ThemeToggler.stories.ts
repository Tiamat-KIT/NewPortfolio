import type {Meta,StoryObj} from "@storybook/react"
import ThemeToggler from "./ThemeToggler"

const ThemeTogglerMeta = {
    title: "Example/ThemeToggler",
    component: ThemeToggler,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggler>

export default ThemeTogglerMeta
type ThemeTogglerStory = StoryObj<typeof ThemeTogglerMeta>

export const ExampleThemeTogglerStory: ThemeTogglerStory = {
    args: {},
} 
