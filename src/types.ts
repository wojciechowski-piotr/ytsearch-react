export type SearchObject = {
    items: Array<SearchResponseType>;
};

export type VideosObject = {
    items: Array<VideosResponseType>;
};

export type SearchResponseType = {
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
