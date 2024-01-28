"use client";
import { Badge, Space, Table, Text,Spoiler, Container, Paper } from '@mantine/core';
export default function Schedule(){
    type ScheduleData = {
        title: string;
        //description: string;
        // content: string;
        // date: string;
        tags: string[];
    }
    const TestData: ScheduleData[] = [
        {
            title: "テスト1",
            tags: ["テスト"]
        },
        {
            title: "テスト2",
            tags: ["テスト"]
        }
    ]

    const ScheduleList = TestData.map((data) => {
        return <Table.Tr key={data.title}>
            <Table.Td>{data.title}</Table.Td>
            <Table.Td>
                {data.tags.map((tag) => {
                    return <Badge key={tag.length}>{tag}</Badge>
                })}
            </Table.Td>
        </Table.Tr>
    })
    return <Container 
        h={175} 
        w={225} 
        className='rounded-lg border-2'
        p={12}
    >
        <Paper p="xl" shadow="lg" radius="lg" w={300}>
            <Text size="xl">泡沫のスケジュール</Text>
            <Space h="xs" />
            <Table>
                <Table.Thead>
                <Table.Tr>
                        <Table.Th>タイトル</Table.Th>
                        <Table.Th>タグ</Table.Th>
                    </Table.Tr> 
                </Table.Thead>
                <Table.Tbody>
                    {ScheduleList}
                </Table.Tbody>
            </Table>
        </Paper>
    </Container>
}