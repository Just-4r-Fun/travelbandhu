interface IHotel {
    name: string;
    ctUrl?: string
    heroImage?: string;
}

interface Post {
    postId: string;
    images: string[];
    areasVisited: string[];
    hotelsBooked: IHotel[];
    commuteOpted: string[];
    overallRating: number;
    postDescription: string;
    shareUrls: {
        ig: string;
        twitter: string
    },
    hashtags: string[]
    ctFeedback?: string
}