export class CommentDto {
    readonly id: number
    readonly authorId: number;
    readonly articleId: number;
    readonly content: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
