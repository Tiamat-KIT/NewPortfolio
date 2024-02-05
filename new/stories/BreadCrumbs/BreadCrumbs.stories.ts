import type {Meta,StoryObj} from "@storybook/react"
import BreadCrumbs from "./BreadCrumbs"
import { BreadCrumbsProps } from "./BreadCrumbs"

const BreadCrumbsMeta = {
    title: "Example/BreadCrumbs",
    component: BreadCrumbs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumbs>

export default BreadCrumbsMeta
type BreadCrumbsStory = StoryObj<typeof BreadCrumbsMeta>

const First: BreadCrumbsProps[] = [{
    PathName: "Home",
    PathRoute: "/",
}]

const Second: BreadCrumbsProps[] = [...First,{
    PathName: "Blog",
    PathRoute: "/blog",
},{
    PathName: "Article",
    PathRoute: "/blog/article",
}]

export const ExampleBreadCrumbsStory: BreadCrumbsStory = {
    args: {
        Path: First,
    },
} 

export const ExampleBreadCrumbsStory2: BreadCrumbsStory = {
    args: {
        Path: Second,
    },
}
