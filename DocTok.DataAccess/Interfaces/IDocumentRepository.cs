using DocTok.Shared.Entities;

namespace DocTok.DataAccess.Interfaces
{
    public interface IDocumentRepository
    {
        public Task<IEnumerable<Document>> Get();

        public Task<Document> GetById(int id);

        public Task<IEnumerable<Document>> GetByProjectId(int id);

        public Task<Document> Create(Document document);
    }
}
