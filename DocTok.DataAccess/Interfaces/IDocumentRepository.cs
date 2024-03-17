using DocTok.Shared.Entities;
using DocTok.Shared.RequestModels.Document;
using DocTok.Shared.ResponseModels.Document;
using DocTok.Shared.ResponseModels.Document.Detail;

namespace DocTok.DataAccess.Interfaces
{
    public interface IDocumentRepository
    {
        public Task<IEnumerable<Document>> Get();

        public Task<DocumentDetailResponseModel> GetById(int id);

        public Task<IEnumerable<DocumentHierarсhyModel>> GetHierarchyByProjectId(int id);

        public Task<IEnumerable<DocumentHierarсhyModel>> GetByProjectId(int id);

        public Task<Document> Create(DocumentRequestModel document);

        public Task<Document> Update(DocumentRequestModel document);

        public Task Delete(int id);
    }
}
