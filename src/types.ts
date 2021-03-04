export type SearchObject = {
    items: Array<SearchResponseType>;
    nextPageToken: string;
    prevPageToken: string;
};

export type VideosObject = {
    items: Array<VideosResponseType>;
    nextId: any;
};

export type SearchResponseType = {
    etag: string;
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        channelId: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
};

export type VideosResponseType = {
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
        channelTitle: string;
        publishedAt: string;
    };
    statistics: {
        viewCount: string;
    };
};

export type LoginAction = { type: 'UPDATE'; payload: string };
