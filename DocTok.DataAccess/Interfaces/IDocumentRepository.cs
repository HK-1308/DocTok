using DocTok.Shared.Entities;
using DocTok.Shared.RequestModels.Document;

namespace DocTok.DataAccess.Interfaces
{
    public interface IDocumentRepository
    {
        public Task<IEnumerable<Document>> Get();

        public Task<Document> GetById(int id);

        public Task<IEnumerable<Document>> GetByProjectId(int id);

        public Task<Document> Create(DocumentRequestModel document);

        public Task<Document> Update(DocumentRequestModel document);

        public Task Delete(int id);
    }
}
