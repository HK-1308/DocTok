namespace DocTok.Shared.Entities
{
    public class Document
    {
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string Caption { get; set; }

        public string Content { get; set; }

        public DateTime UpdatedOn { get ; set; }

        public DateTime CreatedOn { get; set; }

        public int CreatedBy { get; set; }
    }
}
