namespace DocTok.Shared.RequestModels.Document
{
    public class DocumentRequestModel
    {
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string Caption { get; set; }

        public string Content { get; set; }

        public int ProjectId { get; set; }
    }
}
