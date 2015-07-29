using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;

namespace Socket_Cliente
{
    class FTCliente
    {
        public static string mensagemCliente = "em espera";

        public static void EnviarArquivo(string nomeArquivo)
        {
            try
            {
                // Definindo um endereço IP da máquina local
                string strEnderecoIP = "192.168.81.140";

                // Criando um IPEndPoint com o endereço IP e uma porta
                IPEndPoint ipEnd_cliente = new IPEndPoint(IPAddress.Parse(strEnderecoIP), 5656);

                // Criando um objeto Socket usando uma família de endereços e definindo o tipo de soquete como 
                // stream que oferece suporte a fluxos de bytes bidirecional
                // obs.: Antes de um Socket poder enviar e receber dados, ele primeiro deve ser criado usando um AddressFamily, 
                // um SocketTypee um ProtocolType. A enumeração SocketType fornece várias opções para definir o tipo de Socket 
                // que se pretende abrir.
                Socket clientSock_cliente = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.IP);

                string caminhoArquivo = "";
                nomeArquivo = nomeArquivo.Replace("\\", "/");

                while (nomeArquivo.IndexOf("/") > -1)
                {
                    caminhoArquivo += nomeArquivo.Substring(0, nomeArquivo.IndexOf("/") + 1);
                    nomeArquivo = nomeArquivo.Substring(nomeArquivo.IndexOf("/") + 1);
                }

                byte[] nomeArquivoByte = Encoding.UTF8.GetBytes(nomeArquivo);
                if (nomeArquivoByte.Length > 5000 * 1024)
                {
                    mensagemCliente = "O tamanho do arquivo é maior que 5Mb, tente um arquivo menor.";
                    return;
                }

                string caminhoCompleto = caminhoArquivo + nomeArquivo;

                byte[] fileData = File.ReadAllBytes(caminhoCompleto);
                byte[] clientData = new byte[4 + nomeArquivoByte.Length + fileData.Length];
                byte[] nomeArquivoLen = BitConverter.GetBytes(nomeArquivoByte.Length);

                nomeArquivoLen.CopyTo(clientData, 0);
                nomeArquivoByte.CopyTo(clientData, 4);

                fileData.CopyTo(clientData, 4 + nomeArquivoByte.Length);

                // Depois de ler o arquivo e criar um fluxo de bytes realizamos a conexão com o servidor usando o método Connect 
                // e a seguir enviamos os dados de forma assíncrona com o método Send.
                clientSock_cliente.Connect(ipEnd_cliente);

                // O método Send usado envia o número de bytes ao socket conectado, 
                // a partir do deslocamento especificado e usando o SocketFlags definido.
                clientSock_cliente.Send(clientData, 0, clientData.Length, 0);
                clientSock_cliente.Close();
                mensagemCliente = "Arquivo [" + caminhoCompleto + "] transferido.";
            }
            catch (Exception ex)
            {
                mensagemCliente = ex.Message + " " + "\nFalha, pois o Servidor não esta atendendo....";
            }
        }
    }
}
