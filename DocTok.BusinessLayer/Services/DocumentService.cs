using DocTok.BusinessLayer.Interfaces;
using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;

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

        public async Task<Document> Create(Document document)
        {
            return await documentRepository.Create(document);
        }
    }
}
