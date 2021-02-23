export type SearchObject = {
    items: Array<SearchResponseType>;
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
