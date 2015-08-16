using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Socket_Servidor
{
    class FTServidor
    {
        static IPEndPoint ipEnd_servidor;
        static Socket sock_Servidor;

        // Define o local onde os arquivos serão recebidos e salvos
        public static string caminhoRecepcaoArquivos = @"C:\";
        public static string mensagemServidor = "Serviço encerrado!!";
        public static void IniciarServidor()
        {
            try
            {
                // Define o IP do servidor
                string strEnderecoIP = "192.168.81.140";

                // Cria um IPEndPoint usando o IP , e a porta onde o servidor estará escutando
                ipEnd_servidor = new IPEndPoint(IPAddress.Parse(strEnderecoIP), 5656);

                // Cria um objeto Socket usando uma família de endereços e definindo o tipo de soquete 
                // como stream que oferece suporte a fluxos de bytes bidirecional
                sock_Servidor = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.IP);

                // Associa o socket ao EndPoint criado. Devemos usar um Bind antes de chamar o Listen
                sock_Servidor.Bind(ipEnd_servidor);
            }
            catch (Exception ex)
            {
                mensagemServidor = "Erro ao iniciar servidor : " + ex.Message;
                return;
            }
            try
            {
                // Coloca o socket em estado de escuta a espera da requisição do cliente indicando o 
                // número de conexões de entrada que podem ser colocadas na fila como igual a 100
                sock_Servidor.Listen(100);
                // Cria o novo socket para a conexão ativa a partir da conexões que estão na fila
                Socket clienteSock = sock_Servidor.Accept();
                // Define o tamanho do buffer de recebimento do socket
                clienteSock.ReceiveBufferSize = 16384;
                byte[] dadosCliente = new byte[1024 * 50000];
                // Recebe o número de bytes especificado de dados de Socket vinculado em um buffer de recebimento, usando SocketFlags definido
                int tamanhoBytesRecebidos = clienteSock.Receive(dadosCliente, dadosCliente.Length, 0);
                int tamnhoNomeArquivo = BitConverter.ToInt32(dadosCliente, 0);
                string nomeArquivo = Encoding.UTF8.GetString(dadosCliente, 4, tamnhoNomeArquivo);
                BinaryWriter bWrite = new BinaryWriter(File.Open(caminhoRecepcaoArquivos + nomeArquivo, FileMode.Append));
                bWrite.Write(dadosCliente, 4 + tamnhoNomeArquivo, tamanhoBytesRecebidos - 4 - tamnhoNomeArquivo);

                while (tamanhoBytesRecebidos > 0)
                {
                    tamanhoBytesRecebidos = clienteSock.Receive(dadosCliente, dadosCliente.Length, 0);
                    if (tamanhoBytesRecebidos == 0)
                    {
                        bWrite.Close();
                    }
                    else
                    {
                        bWrite.Write(dadosCliente, 0, tamanhoBytesRecebidos);
                    }
                }
                bWrite.Close();
                clienteSock.Close();
                mensagemServidor = "Arquivo recebido e arquivado [" + nomeArquivo + "] (" + (tamanhoBytesRecebidos - 4 - tamnhoNomeArquivo) +
" bytes recebido); Servidor Parado";
            }
            catch (SocketException ex)
            {
                mensagemServidor = ex.Message + " - Erro ao receber arquivo.";
            }
        }
    }
}
