using DocTok.Shared.ResponseModels.Document.Short;

namespace DocTok.Shared.ResponseModels.Document.Detail
{
    public class DocumentDetailResponseModel
    {
        public int Id { get; set; }

        public int? ParentId { get; set; }

        public string Caption { get; set; }

        public string Content { get; set; }

        public int ProjectId { get; set; } = 1;

        public List<DocumentHierarсhyModel> Childs { get; set; } = new();

        public int CreatedBy { get; set; }
    }
}
