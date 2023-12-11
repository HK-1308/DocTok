export default interface DocumentPage{
    id: number,
    caption: string,
    parentId: number | null,
    content: string,
    updatedOn: Date,
    createdOn: Date,
    createdBy: number,
}