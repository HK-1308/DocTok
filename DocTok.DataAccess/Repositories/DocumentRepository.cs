using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.RequestModels.Document;
using DocTok.Shared.ResponseModels.Document;
using DocTok.Shared.ResponseModels.Document.Detail;
using DocTok.Shared.Settings;
using Microsoft.EntityFrameworkCore;

namespace DocTok.DataAccess.Repositories
{
    public class DocumentRepository : IDocumentRepository
    {
        private readonly DocTokContext db;

        public DocumentRepository(DocTokContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<Document>> Get() => await db.Documents.ToListAsync();

        public async Task<DocumentDetailResponseModel> GetById(int id) 
        {
            var document = await db.Documents.SingleOrDefaultAsync(document => document.Id == id);
            var documentResponseModels = new DocumentDetailResponseModel
            {
                Id = document.Id,
                Caption = document.Caption,
                Content = document.Content,
                CreatedBy = document.CreatedBy,
                ParentId = document.ParentId,
                ProjectId = document.ProjectId,
                Childs = db.Documents.Where(d => d.ParentId == document.Id).Select(d =>
                new DocumentHierarсhyModel
                {
                    Id = d.Id,
                    Caption = d.Caption,
                    ParentId = d.ParentId,
                }).ToList(),
            };
            return documentResponseModels;
        }

        public async Task<IEnumerable<DocumentHierarсhyModel>> GetHierarchyByProjectId(int id) 
        {
            var projectDocuments = await db.Documents.Where(document => document.ProjectId == id).Select(d =>
                new DocumentHierarсhyModel
                {
                    Id = d.Id,
                    Caption = d.Caption,
                    ParentId = d.ParentId,
                }).ToListAsync();
            var documents = projectDocuments.Where(document => document.ParentId == 0);

            if(documents != null)
            {
                foreach(var document in documents)
                {
                    var stack = new Stack<DocumentHierarсhyModel>();
                    stack.Push(document);
                    while(stack.Count > 0)
                    {
                        var currentDocument = stack.Pop();
                        if(currentDocument == null)
                        {
                            continue;
                        }
                        currentDocument.Childs = projectDocuments.Where(document => document.ParentId == currentDocument.Id).ToList();
                        foreach(var child  in currentDocument.Childs)
                        {
                            stack.Push(child);
                        }
                    }
                }
            }

            return documents;
        }

        public async Task<IEnumerable<DocumentHierarсhyModel>> GetByProjectId(int id)
        {
            var documents = await db.Documents.Where(document => document.ProjectId == id).Select(d =>
                new DocumentHierarсhyModel
                {
                    Id = d.Id,
                    Caption = d.Caption,
                    ParentId = d.ParentId,
                }).ToListAsync();
            return documents;
        }

        public async Task<Document> Create(DocumentRequestModel documentRequestModel)
        {
            var document = new Document
            {
                Caption = documentRequestModel.Caption,
                Content = documentRequestModel.Content,
                CreatedOn = DateTime.UtcNow,
                UpdatedOn = DateTime.UtcNow,
                ProjectId = documentRequestModel.ProjectId,
                ParentId = documentRequestModel.ParentId,
            };
            db.Documents.Add(document);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            return document;
        }

        public async Task<Document> Update(DocumentRequestModel documentRequestModel)
        {
            var document = db.Documents.SingleOrDefault(doc => doc.Id == documentRequestModel.Id);
            if (document != null)
            {
                document.Caption = documentRequestModel.Caption;
                document.Content = documentRequestModel.Content;
                document.CreatedOn = DateTime.UtcNow;
                document.UpdatedOn = DateTime.UtcNow;
                document.ProjectId = documentRequestModel.ProjectId;
                document.ParentId = documentRequestModel.ParentId;
                try
                {
                    await db.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                }
            }

            return document;
        }

        public async Task Delete(int id)
        {
            var document = db.Documents.SingleOrDefault(db => db.Id == id);
            if(document != null) {
                db.Documents.Remove(document);
            }
            try
            {
                await db.SaveChangesAsync();
            }
            catch
            {
                throw;
            }
        }
    }
}
