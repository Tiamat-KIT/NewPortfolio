import {createClient} from 'microcms-js-sdk';
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSDate,
} from "microcms-js-sdk";

export type BlogType = {
    id: string,
    img: MicroCMSImage
    title: string,
    body: string,
    category: any,
} & MicroCMSDate

export type ReportType = {
    id: string,
    title: string,
    body: string,
    img: MicroCMSImage,
    tag: any,
} & MicroCMSDate


const client = createClient({
    serviceDomain: 'tiamat',
    apiKey: "cea0bdf6bfc54fbd8b53f3bfbbdc346710d8",
})

const ReportClient = createClient({
    apiKey: "TfzJhO5Cq2GbAd6fPIC2EkYEtfXrWsfJiORZ",
    serviceDomain: "utakata-research",
})


// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
const listData = await client.getList<BlogType>({
    endpoint: "blog",
    queries,
    customRequestInit: {
        cache: "no-cache",
    }
});

return listData;
};

// ブログの詳細を取得
export const getDetail = async (
contentId: string,
queries?: MicroCMSQueries
) => {
const detailData = await client.getListDetail<BlogType>({
    endpoint: "blog",
    contentId,
    queries,
});

return detailData;
};

export const getReportList = async (queries?: MicroCMSQueries) => {
    const listData = await ReportClient.getList<ReportType>({
        endpoint: "report",
        queries,
        customRequestInit: {
            cache: "no-cache",
        }
    });
    
    return listData;
}

// 最新のレポートを取得
export const getReportLatest = async () => {
    const listData = await ReportClient.getList<ReportType>({
        endpoint: "report",
        queries: {
            limit: 1,
            // orders: "-publishedAt",
        },
        customRequestInit: {
            cache: "no-cache",
        }
    });

    const latestReport = listData.contents[0];
    
    return latestReport;
}

export const getReportDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await ReportClient.getListDetail<ReportType>({
        endpoint: "report",
        contentId,
        queries,
    });
    
    return detailData;
}
