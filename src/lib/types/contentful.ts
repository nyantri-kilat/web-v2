export interface ContentfulDataEntries {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    },
    fields: {
        title: string;
        slug: string;
        banner: {
            sys: {
                id: string;
                createdAt: string;
                updatedAt: string;
            }
        },
    };
}