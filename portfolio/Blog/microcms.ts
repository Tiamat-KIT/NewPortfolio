import {createClient} from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

export type Blog = {
    img: MicroCMSImage
    title: string,
    body: string,
    category: any,
} & MicroCMSDate

const client = createClient({
    serviceDomain: 'tiamat',
    apiKey: "cea0bdf6bfc54fbd8b53f3bfbbdc346710d8",
})


// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
const listData = await client.getList<Blog>({
    endpoint: "blog",
    queries,
});

return listData;
};

// ブログの詳細を取得
export const getDetail = async (
contentId: string,
queries?: MicroCMSQueries
) => {
const detailData = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId,
    queries,
});

return detailData;
};