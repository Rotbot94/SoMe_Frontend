export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    updatedAt: string;
    createdAt: String;

}

export interface Post {
    postId?: any;
    user: any;
    createdAt: any;
    content: any;
    interactions: any;
    comments: any;
}

export interface Comment {
    userId: any;
    createdAt: any;
    content: any;
}