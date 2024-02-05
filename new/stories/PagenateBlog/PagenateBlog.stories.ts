import type {Meta,StoryObj} from "@storybook/react"
import PagenateBlog from "./PagenateBlog"

const PagenateBlogMeta = {
    title: "Example/PagenateBlog",
    component: PagenateBlog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PagenateBlog>

export default PagenateBlogMeta
type PagenateBlogStory = StoryObj<typeof PagenateBlogMeta>

export const ExamplePagenateBlogStory: PagenateBlogStory = {
    args: {
        Blog: [[]]
    },
} 