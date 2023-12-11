using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.ResponseModels.User;
using DocTok.Shared.Settings;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace DocTok.DataAccess.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DocTokContext db;

        public UserRepository(DocTokContext db)
        {
            this.db = db;
        }

        public async Task<User> GetByUsername(string username)
        {
            var user = await db.Users.FirstOrDefaultAsync(user => user.UserName == username);
            return user;
        }

        public async Task<User> Create(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
            return user;
        }
    }
}
