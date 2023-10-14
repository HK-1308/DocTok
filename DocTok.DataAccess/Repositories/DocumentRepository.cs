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
                new Document() { Id = 2, Caption = "Документ" },
                new Document() { Id = 3, Caption = "Документ" },
                new Document() { Id = 4, Caption = "Документ" },
                new Document() { Id = 5, Caption = "Документ" },
                new Document() { Id = 6, Caption = "Документ" },
                new Document() { Id = 7, Caption = "Документ" },
                new Document() { Id = 8, Caption = "Документ" },
                new Document() { Id = 9, Caption = "Документ" },
                new Document() { Id = 10, Caption = "Документ" },
                new Document() { Id = 11, Caption = "Документ" },
                new Document() { Id = 12, Caption = "Документ" },
                new Document() { Id = 13, Caption = "Документ" },
                new Document() { Id = 14, Caption = "Документ" },
                new Document() { Id = 15, Caption = "Документ" },
                new Document() { Id = 16, Caption = "Документ" },
                new Document() { Id = 17, Caption = "Документ" },
                new Document() { Id = 18, Caption = "Документ" },
                new Document() { Id = 19, Caption = "Документ" },
                new Document() { Id = 20, Caption = "Документ" },
            };

            return list;
        }
    }
}
