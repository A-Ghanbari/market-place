import { List as AntList } from 'antd';
import "components/utils/list/list.scss"

function List({ data, ...props }) {
    return (
        <AntList
            itemLayout="vertical"
            dataSource={data}
            {...props}
            renderItem={item => (
                <AntList.Item {...props}>
                    <AntList.Item.Meta
                        avatar={item.avatar}
                        title={item.title}
                        description={item.des}
                    />
                    {item.content}
                </AntList.Item>
            )}
        />
    )
}

export default List