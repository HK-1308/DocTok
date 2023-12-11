﻿using DocTok.BusinessLayer.Interfaces;
using DocTok.BusinessLayer.Services;
using DocTok.Shared.Entities;
using Microsoft.AspNetCore.Authorization;
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
        /// Get documents list.
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

        /// <summary>
        /// Get document by it's id.
        /// </summary>
        /// <param name="id">Document id</param>
        /// <response code="200">Request succeeded.</response>
        /// <response code="400">Bad request.</response>
        /// <response code="500">Internal server error.</response>
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetById(int id)
        {
            return Ok(await documentService.GetById(id));
        }

        [HttpGet("project/{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> GetByProjectId(int id)
        {
            return Ok(await documentService.GetByProjectId(id));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult> Create(Document document)
        {
            return Ok(await documentService.Create(document));
        }
    }
}
