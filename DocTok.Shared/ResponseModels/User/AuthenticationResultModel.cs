namespace DocTok.Shared.ResponseModels.User
{
    public class AuthenticationResultModel
    {
        public bool IsAuthSuccessful { get; set; }
        public string? ErrorMessage { get; set; }
        public string? Token { get; set; }
    }
}
