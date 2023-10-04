using DocTok.BusinessLayer.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DocTok.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {
        private readonly IProjectService projectService; 
        public ProjectsController(IProjectService projectService)
        {
            this.projectService = projectService;
        }

        /// <summary>
        /// Получает список проектов.
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
            return Ok(await projectService.Get());
        }
    }
}
