using DocTok.Shared.Entities;

namespace DocTok.DataAccess.Interfaces
{
    public interface IProjectRepository
    {
        public Task<IEnumerable<Project>> Get();

        public Task<Project> GetById(int id);
    }
}
