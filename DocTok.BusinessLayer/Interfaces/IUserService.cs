using DocTok.Shared.Entities;
using DocTok.Shared.ResponseModels.User;

namespace DocTok.BusinessLayer.Interfaces
{
    public interface IUserService
    {
        public Task<User> Login(UserLoginModel loginModel);

        public Task<User> Create(User user);
    }
}
