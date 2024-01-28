import type {Meta,StoryObj} from "@storybook/react"
import Navbar from "./Navbar"

const NavbarMeta = {
    title: "Example/Navbar",
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default NavbarMeta
type NavbarStory = StoryObj<typeof NavbarMeta>

export const ExampleNavbarStory: NavbarStory = {
    // args: {},
} 
