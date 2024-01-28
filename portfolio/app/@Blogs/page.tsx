"use client"
import { getList } from '@/Blog/microcms';
import { Card, Paper, Space, Text, Grid } from '@mantine/core';
import Image from 'next/image';

export default async function Blog(){
    const { contents } = await getList();
    return  <Paper p="xl" shadow="lg" radius="lg" w={500} h={500}>
            <Text size="xl">泡沫のBlog</Text>
            <Space h="xs" />
            <Grid>
                {contents.map((content) => {
                    return <Grid.Col span={6} key={content.id} >
                        <Card withBorder shadow='md'>
                            <Card.Section>
                                <Image src={content.img.url} height={50} width={50} alt={content.title}/>
                            </Card.Section>
                            <Text w={100}>{content.title}</Text>
                        </Card>
                    </Grid.Col>     
                })}
            </Grid>
        </Paper>
}