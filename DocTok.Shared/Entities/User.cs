namespace DocTok.Shared.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public List<Project> Projects { get; set; }
    }
}
