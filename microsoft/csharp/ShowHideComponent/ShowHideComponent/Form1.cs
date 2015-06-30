using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ShowHideComponent
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            richTextBox1.Visible = false;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (richTextBox1.Visible.Equals(false))
            {
                richTextBox1.Visible = true;
                Form1.ActiveForm.Height = 300;
            }
            else
            {
                richTextBox1.Visible = false;
                Form1.ActiveForm.Height = 155;
            }
        }

        private void exportarImagemToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Console.WriteLine("Test");
        }

        private void consoleToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (richTextBox1.Visible.Equals(false))
            {
                consoleToolStripMenuItem.Checked = true;
                richTextBox1.Visible = true;
                Form1.ActiveForm.Height = 300;
            }
            else
            {
                consoleToolStripMenuItem.Checked = true;
                richTextBox1.Visible = false;
                Form1.ActiveForm.Height = 155;
            }
        }
    }
}
