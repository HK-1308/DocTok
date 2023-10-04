using DocTok.BusinessLayer.Interfaces;
using DocTok.BusinessLayer.Services;
using Microsoft.AspNetCore.Mvc;

namespace DocTok.Controllers
{
    [ApiController]
    [Route("documents")]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentService documentService;
        public DocumentController(IDocumentService documentService)
        {
            this.documentService = documentService;
        }

        /// <summary>
        /// Получает список документов.
        /// </summary>
        /// <response code="200">Request succeeded.</response>
        /// <response code="400">Bad request.</response>
        /// <response code="500">Internal server error.</response>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Get()
        {
            return Ok(await documentService.Get());
        }

        [HttpGet("project/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetByProjectId(int id)
        {
            return Ok(await documentService.GetByProjectId(id));
        }
    }
}
