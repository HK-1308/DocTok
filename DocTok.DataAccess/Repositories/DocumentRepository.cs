using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.RequestModels.Document;
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

        public async Task<Document> GetById(int id) => await db.Documents.SingleOrDefaultAsync(document => document.Id == id);

        //TODO: сделать реальную выборку по id проекта (пока просто в базе не хранится id проекта)
        public async Task<IEnumerable<Document>> GetByProjectId(int id) => await db.Documents.Where(document => document.ProjectId == id).ToListAsync();

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
