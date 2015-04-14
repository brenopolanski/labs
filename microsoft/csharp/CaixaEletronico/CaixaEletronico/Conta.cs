using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaixaEletronico
{
    class Conta
    {
        public int Numero { get; set; }

        private string titular;

        // A propriedade saldo é aberta para leitura,
        // mas fechada para escrita.
        public double Saldo { get; private set; }

        private Cliente Titular { get; set; }

        public void Saca(double valor)
        {
            this.Saldo -= valor + 0.1;
        }

        public void Deposita(double valor)
        {
            this.Saldo += valor;
        }

        public void Transfere(double valor, Conta destino)
        {
            this.Saca(valor);
            destino.Deposita(valor);
        }
    }
}
