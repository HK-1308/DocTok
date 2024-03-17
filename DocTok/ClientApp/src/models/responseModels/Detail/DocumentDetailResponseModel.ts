import {DocumentHierarchyModel}  from "../DocumentHierarchyModel";

export type DocumentPageDetailResponseModel ={
    id: number,
    parentId: number,
    caption: string,
    content: string,
    projectId: number,
    childs: DocumentHierarchyModel[],
    createdBy: number,
}