using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using System.Data.SqlClient;

namespace TratandoImagens_SQLServer
{
    public partial class Form1 : Form
    {
        private long tamanhoArquivoImagem = 0;
        private byte[] vetorImagens;
        private SqlConnection conexaoSQLServer;
        SqlCommand sqlcmd = default(SqlCommand);
        
        public Form1()
        {
            InitializeComponent();
        }

        private void btnAtivar_Click(object sender, EventArgs e)
        {
            // cria uma instãncia do objeto SqlConnection
            conexaoSQLServer = new SqlConnection(txtStringConexaoBD.Text);
            // obtem os dados da tabela imagens
            getImagensSQLServer(conexaoSQLServer);
            // ativa os botões de comando
            btnCarregarImagem.Enabled = true;
            btnRetornarImagemBD.Enabled = true;
            btnSalvarImagemBD.Enabled = true;
            btnAtivar.Enabled = false;
        }

        private void getImagensSQLServer(SqlConnection conexaoSQLServer)
        {
            try
            {
                // Inicializar o SQL adapter.
                SqlDataAdapter ADAP = new SqlDataAdapter("Select Id,descricao,imagem from Imagens", conexaoSQLServer);

                // Inicializa o  Dataset.
                DataSet DS = new DataSet();

                // Preenche o dataset com a tabela Imagens
                ADAP.Fill(DS, "Imagens");

                // preenche o datagridviewe com o dataset.
                gdvImagens.DataSource = DS.Tables["Imagens"];
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void gdvImagens_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            // obtem o codigo da imagem e exibe no controle textbox 
            txtCodigoImagem.Text = (gdvImagens.Rows[e.RowIndex].Cells["id"].Value).ToString();
            txtDescricaoImagem.Text = "";
        }

        private void btnCarregarImagem_Click(object sender, EventArgs e)
        {
            CarregaImagem();
            txtCodigoImagem.Text = "";
            txtDescricaoImagem.Text = "";
        }

        protected void CarregaImagem()
        {
            try
            {
                this.openFileDialog1.ShowDialog(this);
                string strFn = this.openFileDialog1.FileName;

                if (string.IsNullOrEmpty(strFn))
                    return;

                this.picImagem.Image = Image.FromFile(strFn);
                FileInfo arqImagem = new FileInfo(strFn);
                tamanhoArquivoImagem = arqImagem.Length;
                FileStream fs = new FileStream(strFn, FileMode.Open, FileAccess.Read, FileShare.Read);
                vetorImagens = new byte[Convert.ToInt32(this.tamanhoArquivoImagem)];
                int iBytesRead = fs.Read(vetorImagens, 0, Convert.ToInt32(this.tamanhoArquivoImagem));
                fs.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void btnSalvarImagemBD_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtDescricaoImagem.Text))
            {
                MessageBox.Show("Informe a descrição da imagem", "Código da Imagem", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }

            try
            {
                this.conexaoSQLServer.Open();
                this.sqlcmd = new SqlCommand();
                sqlcmd.Connection = conexaoSQLServer;
                if (sqlcmd.Parameters.Count == 0)
                {
                    this.sqlcmd.CommandText = "INSERT INTO Imagens(descricao,imagem) values(@descricao,@imagem)";
                    this.sqlcmd.Parameters.Add("@descricao", System.Data.SqlDbType.VarChar, 50);
                    this.sqlcmd.Parameters.Add("@imagem", System.Data.SqlDbType.Image);
                }
                this.sqlcmd.Parameters["@descricao"].Value = this.txtDescricaoImagem.Text;
                this.sqlcmd.Parameters["@imagem"].Value = this.vetorImagens;

                int iresultado = this.sqlcmd.ExecuteNonQuery();

                if (iresultado <= 0)
                    MessageBox.Show("Falha ao incluir imagem no banco de dados.");

                getImagensSQLServer(conexaoSQLServer);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                this.conexaoSQLServer.Close();
            }
        }

        private void btnRetornarImagemBD_Click(object sender, EventArgs e)
        {
            if (txtCodigoImagem.Text == string.Empty)
            {
                MessageBox.Show("Informe o código da imagem no Banco de dados", "Código da Imagem", MessageBoxButtons.OK, MessageBoxIcon.Information);
                return;
            }

            try
            {
                SqlCommand cmdSelect = new SqlCommand("select imagem from Imagens where id=@ID", this.conexaoSQLServer);
                cmdSelect.Parameters.Add("@ID", SqlDbType.Int, 4);
                cmdSelect.Parameters["@ID"].Value = this.txtCodigoImagem.Text;

                this.conexaoSQLServer.Open();
                byte[] vetorImagem = (byte[])cmdSelect.ExecuteScalar();
                string strNomeArquivo = Convert.ToString(DateTime.Now.ToFileTime());
                FileStream fs = new FileStream(strNomeArquivo, FileMode.CreateNew, FileAccess.Write);
                fs.Write(vetorImagem, 0, vetorImagem.Length);
                fs.Flush();
                fs.Close();

                picImagem.Image = Image.FromFile(strNomeArquivo);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
            finally
            {
                this.conexaoSQLServer.Close();
            }
        }
    }
}
