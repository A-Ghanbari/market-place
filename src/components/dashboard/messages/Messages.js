import Card from 'components/utils/card'
import Collapse from 'components/utils/collapse'
import Icon from 'components/utils/field/Icon'
import List from 'components/utils/list'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUserMessagesList, setSeenUserMessage } from 'store/actions/messages'
import { PAGE_SIZE } from 'tools/shared/constants'
import {
    USER_MESSAGES_LIST as entity,
} from 'tools/utils/entities'

export default function Messages() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [seen, setSeen] = useState([])

    const { dataList, loading } = useSelector(
        (s) => s[entity.name]
    )

    useEffect(() => {
        getUserMessagesList(`PageIndex=${pageIndex}&PageSize=${pageSize}`)
    }, [pageIndex, pageSize, seen])

    const onClickHandler = (open, seen, ID) => {
        if (open.length !== 0 && seen === "") {
            setSeenUserMessage({ ID })
            setSeen(s => [...s, ID])
        }
    }
    return (
        <div className='messages'>
            <Card title="پیام ها">
                {dataList.map(message => (
                    <Collapse
                        collapsible={false}
                        key={message.id}
                        showArrow={false}
                        onChange={(e) => onClickHandler(e, message.seenDate, message.id)}
                        title={
                            <List
                                data={[{
                                    title: <div className='list-header'>
                                        <span>{message.title}</span>
                                        <span>{message.createdDateTime}</span>
                                    </div>,
                                    avatar: <Icon type="mail" />
                                }]}
                            />
                        }
                    >
                        {message.description}
                    </Collapse>
                ))}
            </Card>
        </div>
    )
}
