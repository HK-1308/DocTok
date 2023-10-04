using DocTok.Shared.Entities;

namespace DocTok.BusinessLayer.Interfaces
{
    public interface IDocumentService
    {
        public Task<IEnumerable<Document>> Get();

        public Task<Document> GetById(int id);

        public Task<IEnumerable<Document>> GetByProjectId(int id);
    }
}
