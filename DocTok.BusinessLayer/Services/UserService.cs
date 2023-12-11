using DocTok.BusinessLayer.Interfaces;
using DocTok.DataAccess.Interfaces;
using DocTok.Shared.Entities;
using DocTok.Shared.ResponseModels.User;
using System.Security.Cryptography;
using System.Text;

namespace DocTok.BusinessLayer.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository userRepository;

        public UserService(IUserRepository userRepository) {
            this.userRepository = userRepository;
        }

        public async Task<User> Create(User user)
        {
            return await userRepository.Create(user);
        }

        public async Task<User> Login(UserLoginModel loginModel)
        {
            var user = await userRepository.GetByUsername(loginModel.UserName);
            if (user != null)
            {
                string hashString = "";
                using (SHA256 sha256Hash = SHA256.Create())
                {
                    var hash = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(string.Concat(user.UserName, loginModel.Password)));
                    hashString = Convert.ToHexString(hash);
                }
                if (user.Hash == hashString)
                {
                    return user;
                }
            }
            return null;
        }

    }
}
