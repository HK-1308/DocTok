using DocTok.Shared.Entities;
using Microsoft.EntityFrameworkCore;

namespace DocTok.Shared.Settings
{
    public class DocTokContext : DbContext
    {
        public DocTokContext(DbContextOptions<DocTokContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public virtual DbSet<User> Users { get; set; }

        public virtual DbSet<Document> Documents{ get; set; }

        public virtual DbSet<MetaFile> MetaFiles{ get; set; }

        public virtual DbSet<Project> Projects{ get; set; }

        public virtual DbSet<Role> Roles { get; set; }
    }
}
