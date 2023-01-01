import { Tree as AntTree } from "antd"
import "components/utils/tree/tree.scss"

export default function Tree({ data, ...props }) {
    const { DirectoryTree } = AntTree;
    return (
        <DirectoryTree
            treeData={data}
            multiple
            showIcon={false}
            showLine={false}
            {...props}
        />
    )
}
