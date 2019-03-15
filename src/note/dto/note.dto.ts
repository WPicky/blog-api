export class NoteDto {
    readonly id: number
    readonly authorId: number;
    readonly articleId: number;
    readonly note: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
