using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HexBinC2ECG
{
    class Program
    {
        static string twoComplement(string value) 
        {
            int outputValue1 = 0;
            int outputValue2 = 0;

            for (int i = 0; i < value.Length; i++)
            {
                if (value[i].Equals('1'))
                {
                    outputValue1 += 1 * (int)Math.Pow(2, value.Length - i - 1);
                }
                else 
                {
                    outputValue1 += 0 * (int)Math.Pow(2, value.Length - i - 1);
                }

                outputValue2 += 1 * (int)Math.Pow(2, value.Length - i - 1);
            }

            int c2 = (outputValue2 - outputValue1) + 1;

            return Convert.ToString(c2,2);
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
            //string test = twoComplement();

            if (hexa.IndexOf(escapeBegin) > -1)
            {
                hexa = hexa.Substring(tamDelimiter);

                while (len > 0)
                {
                    strHexa = hexa.Substring(0, tamDelimiter);

                    if (!strHexa.Equals(escapeBegin) || !strHexa.Equals(escapeEnd))
                    {
                        strBin = Convert.ToString(Convert.ToInt32(strHexa, 16), 2);
                        Console.WriteLine(twoComplement(strBin));
                        //Console.WriteLine(strBin);
                        hexa = hexa.Substring(tamDelimiter);
                        len = hexa.Length;
                    }
                }
            }
        }
    }
}
