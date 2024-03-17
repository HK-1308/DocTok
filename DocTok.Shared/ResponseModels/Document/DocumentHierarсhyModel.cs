namespace DocTok.Shared.ResponseModels.Document
{
    public class DocumentHierarсhyModel
    {
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string Caption { get; set; }

        public List<DocumentHierarсhyModel> Childs { get; set; } = new();
    }
}
