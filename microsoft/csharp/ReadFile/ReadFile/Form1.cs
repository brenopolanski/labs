using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ReadFile
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string text = System.IO.File.ReadAllText(@"C:\Users\Breno Polanski\Documents\Visual Studio 2012\Projects\ReadFile\ReadFile\loremipsum.txt");

            //System.Console.WriteLine("Contents of WriteText.txt = {0}", text);

            MessageBox.Show(text);
        }
    }
}
