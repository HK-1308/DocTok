export type DocumentHierarchyModel ={
    id: number,
    parentId: number,
    caption: string,
    hierarchyLevel: number,
    isExpanded : boolean,
    childs: DocumentHierarchyModel[],
}