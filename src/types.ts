export type SearchObject = {
    items: Array<SearchResponseType>;
};

export type VideosObject = {
    items: Array<VideosResponseType>;
}

export type SearchResponseType = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
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
        publishedAt: string;
    };
    statistics: {
        viewCount: string;
    };
};
