using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AppImagemBanco
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (openFileDialog1.ShowDialog() == DialogResult.OK) 
            {
                // Exibir imagem no form
                string nomeArquivo = openFileDialog1.FileName;
                Bitmap bmp = new Bitmap(nomeArquivo);
                pictureBox1.Image = bmp;

                MemoryStream ms = new MemoryStream();
                bmp.Save(ms, ImageFormat.Bmp);
                byte[] foto = ms.ToArray();
                Console.WriteLine(foto);
            }
        }
    }
}
