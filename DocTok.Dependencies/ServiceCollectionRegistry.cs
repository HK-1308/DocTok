using DocTok.BusinessLayer.Interfaces;
using DocTok.BusinessLayer.Services;
using DocTok.DataAccess.Interfaces;
using DocTok.DataAccess.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace DocTok.Dependencies
{
    public static class ServiceCollectionRegistry
    {
        public static void AddServices(this IServiceCollection services)
        {
            services.AddTransient<IProjectRepository, ProjectRepository>();
            services.AddTransient<IProjectService, ProjectService>();

            services.AddTransient<IDocumentService, DocumentService>();
            services.AddTransient<IDocumentRepository, DocumentRepository>();
        }
    }
}
