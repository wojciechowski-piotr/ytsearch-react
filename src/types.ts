export type SearchResponseType = {
    videoId: string;
    snippet: {
        title: string;
        thumbnails: {
            high: {
                url: string;
            }
        }
    };
}
