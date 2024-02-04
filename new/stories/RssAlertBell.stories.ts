import type {Meta,StoryObj} from "@storybook/react"
import RssAlertBell from "./RssAlertBell"

const RssAlertBellMeta = {
    title: "Example/RssAlertBell",
    component: RssAlertBell,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RssAlertBell>

export default RssAlertBellMeta
type RssAlertBellStory = StoryObj<typeof RssAlertBellMeta>

export const ExampleRssAlertBellStory: RssAlertBellStory = {
    args: {},
} 
