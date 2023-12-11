namespace DocTok.Shared.ResponseModels.User
{
    public class RegistrationResultModel
    {
        public bool IsSuccessfulRegistration { get; set; }
        public IEnumerable<string>? Errors { get; set; }
    }
}
