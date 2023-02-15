import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IPost } from '../../redux/types';

const PostList = () => {
    const { posts } = useAppSelector(state => state.postsReducer)

    const columns: ColumnsType<IPost> = [
        {
            title: 'Author',
            dataIndex: 'authorName',
            key: 'id',
        },
        {
            title: 'Header',
            dataIndex: 'title',
            key: 'id',
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'id'
        },
        {
            title: 'Tags',
            key: 'id',
            dataIndex: 'tagNames',
            render: (_, { tagNames }) => (
                <>
                    {tagNames.map((tag: string) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'id',
            render: () => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        }
    ]

    return (
        <>
            <Table columns={columns} dataSource={posts} />
        </>
    )
}

export default PostList;