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
            string escapeBegin = "55AA";
            string escapeEnd = "FC00";
            string hexa = "55AA078053FD18FCC5FE4B0347FF6FFD000000000000000000000000FC00";
            int pos = hexa.IndexOf("55AA");
            int tamDelimiter = 4;
            int len = hexa.Length;

            if (hexa.IndexOf(escapeBegin) > -1) 
            {
                while (len > 0) 
                {
                    Console.WriteLine(hexa.Substring(0, tamDelimiter));
                    hexa = hexa.Substring(tamDelimiter);
                    len = hexa.Length;
                }
            }
        }
    }
}
