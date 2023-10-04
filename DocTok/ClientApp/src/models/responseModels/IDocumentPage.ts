export default interface IDocumentPage{
    id: number,
    caption: string,
    parentId: number | null,
    content: string,
    updatedOn: Date,
    createdOn: Date,
    createdBy: number,
}