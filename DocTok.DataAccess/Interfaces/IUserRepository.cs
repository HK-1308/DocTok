using DocTok.Shared.Entities;

namespace DocTok.DataAccess.Interfaces
{
    public interface IUserRepository
    {
        public Task<User> GetByUsername(string username);

        public Task<User> Create(User user);
    }
}
