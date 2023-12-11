using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.Settings;
using Microsoft.EntityFrameworkCore;

namespace DocTok.DataAccess.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        private readonly DocTokContext db;

        public ProjectRepository(DocTokContext db)
        {
            this.db = db;
        }

        public async Task<IEnumerable<Project>> Get()
        {
            return await db.Projects.ToListAsync();
        }

        public async Task<Project> GetById(int id)
        {
            var result = await db.Projects.FirstOrDefaultAsync(project => project.Id == id);

            return result;
        }

        public async Task<Project> Create(Project project)
        {
            var result = await db.Projects.AddAsync(project);
            db.SaveChanges();

            return result.Entity; 
        }
    }
}
