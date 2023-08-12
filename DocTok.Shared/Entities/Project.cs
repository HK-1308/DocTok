using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DocTok.Shared.Entities
{
    public class Project
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        //TODO Сделать здесь ImageId
        public string ImageName { get; set; }
    }
}
