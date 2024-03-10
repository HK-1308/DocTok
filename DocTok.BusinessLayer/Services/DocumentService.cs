using DocTok.BusinessLayer.Interfaces;
using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.RequestModels.Document;

namespace DocTok.BusinessLayer.Services
{
    public class DocumentService : IDocumentService
    {
        private readonly IDocumentRepository documentRepository;

        public DocumentService(IDocumentRepository documentRepository)
        {
            this.documentRepository = documentRepository;
        }

        public async Task<IEnumerable<Document>> Get()
        {
            return await documentRepository.Get();
        }

        public async Task<Document> GetById(int id)
        {
            return await documentRepository.GetById(id);
        }

        public async Task<IEnumerable<Document>> GetByProjectId(int id)
        {
            return await documentRepository.GetByProjectId(id);
        }

        public async Task<Document> Create(DocumentRequestModel document)
        {
            return await documentRepository.Create(document);
        }

        public async Task<Document> Update(DocumentRequestModel document)
        {
            return await documentRepository.Update(document);
        }

        public async Task Delete(int id)
        {
            await documentRepository.Delete(id);
        }
    }
}
