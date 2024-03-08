namespace DocTok.Shared.Entities
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string ImageName { get; set; }

        public List<User> User { get; set;}

        public IEnumerable<Document> Documents { get; set; }
    }
}
