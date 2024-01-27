type LayoutDirectories = "children" | "blogs" | "schedule"
type LayoutType = {
    [key in LayoutDirectories]: React.ReactNode
}

export default LayoutType