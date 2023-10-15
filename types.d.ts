type Videos = {
    kind: string;
    etag: string;
    nextPageToken: string;
    regionCode: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: {
        kind: string;
        etag: string;
        id: {
            kind: string;
            videoId: string;
        };
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
                default: {
                    url: string;
                    width: number;
                    height: number;
                };
                medium: {
                    url: string;
                    width: number;
                    height: number;
                };
                high: {
                    url: string;
                    width: number;
                    height: number;
                };
            };
            channelTitle: string;
            liveBroadcastContent: string;
            publishTime: string;
        };
    }[];
}[]

type Video = {
    kind: string;
    etag: string;
    id: string;
    items: {
        snippet: {
            publishedAt: string;
            channelId: string;
            title: string;
            description: string;
            thumbnails: {
                default: {
                    url: string;
                    width: number;
                    height: number;
                };
                medium: {
                    url: string;
                    width: number;
                    height: number;
                };
                high: {
                    url: string;
                    width: number;
                    height: number;
                };
            };
            channelTitle: string;
            liveBroadcastContent: string;
            publishTime: string;
        };
        statistics: {
            viewCount: string;
            likeCount: string;
            dislikeCount: string;
            favoriteCount: string;
            commentCount: string;
        };
        contentDetails: {
            duration: string;
        };
    }[];
}


type Channel = {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: {
        kind: string;
        etag: string;
        id: string;
        snippet: {
            title: string;
            description: string;
            customUrl: string;
            publishedAt: string;
            thumbnails: {
                default: {
                    url: string;
                    width: number;
                    height: number;
                };
                medium: {
                    url: string;
                    width: number;
                    height: number;
                };
                high: {
                    url: string;
                    width: number;
                    height: number;
                };
            };
            localized: {
                title: string;
                description: string;
            };
            country: string;
        };
        statistics: {
            viewCount: string;
            subscriberCount: string;
            hiddenSubscriberCount: boolean;
            videoCount: string;
        };
    }[];
}