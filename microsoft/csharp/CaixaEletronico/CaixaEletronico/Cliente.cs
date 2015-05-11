using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaixaEletronico
{
    class Cliente
    {
        public string Nome { get; set; }

        public string Rg { get; set; }

        public string Endereco { get; set; }

        public Cliente(string nome)
        {
            this.Nome = nome;
        }
    }
}
