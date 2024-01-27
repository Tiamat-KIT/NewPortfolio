type LayoutDirectories = "children" | "Blogs" | "Schedule"
type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}

export default LayoutType