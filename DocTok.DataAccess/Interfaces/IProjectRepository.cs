using DocTok.Shared.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocTok.DataAccess.Interfaces
{
    public interface IProjectRepository
    {
        public Task<IEnumerable<Project>> Get();

        public Task<Project> GetById(int id);
    }
}
