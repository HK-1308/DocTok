using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
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

        public async Task<Document> Create(Document document)
        {
            throw new NotImplementedException();
        }
    }
}
