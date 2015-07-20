using MvcApplicationWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplicationWebAPI.Controllers
{
    public class ClienteController : ApiController
    {
        private readonly Cliente[] Clientes = new Cliente[]
        {
            new Cliente { ID = 1, Nome = "Eduardo Pires", Email = "falecom@eduardopires.net.br", Ativo = true },
            new Cliente { ID = 2, Nome = "Bill Gates", Email = "gates@microsoft.com", Ativo = true },
            new Cliente { ID = 3, Nome = "Aleister Crowley", Email = "aleister@therion.com", Ativo = false }
        };

        // GET api/cliente
        public Cliente[] Get()
        {
            return Clientes;
        }

        // GET api/cliente/5
        public Cliente Get(int id)
        {
            var clientes = Clientes;

            return clientes.SingleOrDefault(x => x.ID == id);
        }

        // POST api/cliente
        public void Post([FromBody]string value)
        {
        }

        // PUT api/cliente/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/cliente/5
        public void Delete(int id)
        {
        }
    }
}
