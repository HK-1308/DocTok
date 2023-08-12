using DocTok.Shared.Entities;

namespace DocTok.BusinessLayer.Interfaces
{
    public interface IProjectService
    {
        public Task<IEnumerable<Project>> Get();

        public Task<Project> GetById(int id);
    }
}
