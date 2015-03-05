using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HexBinC2ECG
{
    class Program
    {
        static string twoComplement() 
        {
            return "test";
        }

        static void Main(string[] args)
        {
            string hexa = "55AA078053FD18FCC5FE4B0347FF6FFD000000000000000000000000FC00";
            string escapeBegin = "55AA";
            string escapeEnd = "FC00";
            int tamDelimiter = 4;
            int len = hexa.Length;
            string strHexa;
            string strBin;
            string test = twoComplement();

            if (hexa.IndexOf(escapeBegin) > -1)
            {
                hexa = hexa.Substring(tamDelimiter);

                while (len > 0)
                {
                    strHexa = hexa.Substring(0, tamDelimiter);

                    if (!strHexa.Equals(escapeBegin) || !strHexa.Equals(escapeEnd))
                    {
                        strBin = Convert.ToString(Convert.ToInt32(strHexa, 16), 2);
                        Console.WriteLine(strBin);
                        hexa = hexa.Substring(tamDelimiter);
                        len = hexa.Length;
                    }
                }
            }
        }
    }
}
