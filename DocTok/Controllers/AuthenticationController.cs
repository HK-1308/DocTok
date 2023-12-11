using DocTok.BusinessLayer.Interfaces;
using DocTok.Helpers;
using DocTok.Shared.Entities;
using DocTok.Shared.ResponseModels.User;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace DocTok.Controllers
{
    public class AuthenticationController : ControllerBase
    {
        private readonly JwtHandler jwtHandler;
        private readonly IUserService userService;

        public AuthenticationController(JwtHandler jwtHandler, IUserService userService)
        {
            this.jwtHandler = jwtHandler;
            this.userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            if (user == null || !ModelState.IsValid)
                return BadRequest();

            var result = await userService.Create(user);
            if (result == null)
            {
                List<string> errors = new List<string>
                {
                    "Error with registration"
                };
                return BadRequest(new RegistrationResultModel { Errors = errors });
            }
            return StatusCode(201);
        }


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginModel loginModel)
        {
            var user = await userService.Login(loginModel);
            if (user == null)
                return Unauthorized(new AuthenticationResultModel { ErrorMessage = "Invalid Authentication" });
            var signingCredentials = jwtHandler.GetSigningCredentials();
            var claims = await jwtHandler.GetClaims(user);
            var tokenOptions = jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new AuthenticationResultModel { IsAuthSuccessful = true, Token = token });
        }
    }
}
