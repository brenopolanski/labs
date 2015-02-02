using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CaixaEletronico
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Conta guilherme = new Conta();
            Conta mauricio = new Conta();

            guilherme.saldo = 1500.0;
            mauricio.saldo = 2000.0;

            guilherme.Transfere(200, mauricio);
            MessageBox.Show("Guilherme: " + guilherme.saldo);
            MessageBox.Show("Mauricio: " + mauricio.saldo);
        }
    }
}
