import type {Meta,StoryObj} from "@storybook/react"
import ContactForm from "./ContactForm"

const ContactFormMeta = {
    title: "Example/ContactForm",
    component: ContactForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ContactForm>

export default ContactFormMeta
type ContactFormStory = StoryObj<typeof ContactFormMeta>

export const ExampleContactFormStory: ContactFormStory = {
    args: {},
} 
