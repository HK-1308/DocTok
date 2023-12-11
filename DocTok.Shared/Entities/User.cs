namespace DocTok.Shared.Entities
{
    public class User
    {
        public int Id { get; set; }

        //В качестве PK для хэширования используем UserName
        public string UserName { get; set; }

        public string Email { get; set; }

        public string Hash { get; set; }

        public List<Project> Projects { get; set; }
    }
}
