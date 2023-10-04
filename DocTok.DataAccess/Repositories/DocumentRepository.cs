using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;

namespace DocTok.DataAccess.Repositories
{
    public class DocumentRepository : IDocumentRepository
    {
        public Task<IEnumerable<Document>> Get()
        {
            throw new NotImplementedException();
        }

        public Task<Document> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Document>> GetByProjectId(int id)
        {
            var list = new List<Document>
            {
                new Document() { Id = 1, Caption = "ДОкменуа",},
                new Document() { Id = 2, Caption = "Документ" }
            };

            return list;
        }
    }
}
