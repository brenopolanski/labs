using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HexaECG
{
    class Program
    {
        static void Main(string[] args)
        {
            string hexa = "55AA078053FD18FCC5FE4B0347FF6FFD000000000000000000000000FC00";
            string escapeBegin = "55AA";
            string escapeEnd = "FC00";
            int tamDelimiter = 4;
            int len = hexa.Length;
            string strHexa;

            if (hexa.IndexOf(escapeBegin) > -1) 
            {
                hexa = hexa.Substring(tamDelimiter);
                
                while (len > 0) 
                {
                    strHexa = hexa.Substring(0, tamDelimiter);

                    if (!strHexa.Equals(escapeBegin) || !strHexa.Equals(escapeEnd)) 
                    {
                        Console.WriteLine(strHexa);
                        hexa = hexa.Substring(tamDelimiter);
                        len = hexa.Length;
                    }
                }
            }
        }
    }
}
