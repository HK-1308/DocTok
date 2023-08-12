using DocTok.BusinessLayer.Interfaces;
using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;

namespace DocTok.BusinessLayer.Services
{
    public class ProjectService : IProjectService
    {
        private readonly IProjectRepository projectRepository;

        public ProjectService(IProjectRepository projectRepository)
        {
            this.projectRepository = projectRepository;
        }

        public Task<IEnumerable<Project>> Get()
        {
            var result = projectRepository.Get();

            return result;
        }

        public Task<Project> GetById(int id)
        {
            var result = projectRepository.GetById(id);

            return result;
        }
    }
}
