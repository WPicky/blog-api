export class ArticleDto {
    readonly id: number
    readonly title: string;
    readonly authorId: number;
    readonly content: string;
    readonly likes: Number;
    readonly disLikes: Number;
//(picture: Buffer | File;)
    readonly createdAt: Date;
    readonly updatedAt: Date;
}

