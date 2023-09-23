export default interface IDocumentPage{
    id: number,
    caption: string,
    parentId: number,
    content: string,
    updateDateTime: Date,
    createDateTime: Date,
}