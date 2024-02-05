import type {Meta,StoryObj} from "@storybook/react"
import Footer from "./Footer"

const FooterMeta = {
    title: "Example/Footer",
    component: Footer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>

export default FooterMeta
type FooterStory = StoryObj<typeof FooterMeta>

export const ExampleFooterStory: FooterStory = {
    args: {},
} 
