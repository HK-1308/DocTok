using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocTok.DataAccess.Repositories
{
    public class ProjectRepository : IProjectRepository
    {
        public async Task<IEnumerable<Project>> Get()
        {
            var list = new List<Project>();
            list.Add(new Project() { Id = 1, Description = "Тестовое описание", Name = "Название", ImageName = "ExamleIcon1.jpg"});
            list.Add(new Project() { Id = 2, Description = "Тестовое Второго проекта", Name = "Неимоверный", ImageName = "ExamleIcon2.jpg" });
            return list;
        }

        public async Task<Project> GetById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
