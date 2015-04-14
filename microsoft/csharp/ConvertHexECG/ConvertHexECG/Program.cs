using System;
using System.IO;

namespace ConvertHexECG
{
	class MainClass
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

		public static void Main (string[] args)
		{
			String hexa = System.IO.File.ReadAllText(@"/home/brenopolanski/MonoDeveloper/projects/ConvertHexECG/hexbreno.txt");
			//String hexa = System.IO.File.ReadAllText(@"/home/brenopolanski/MonoDeveloper/projects/ConvertHexECG/hexgenilson.txt");
			String escapeBegin = "55AA";
			String escapeEnd = "FC00";
			int tamDelimiter = 4;
			int len = hexa.Length;
			String strHexa;
			String strBin;

			if (hexa.IndexOf(escapeBegin) > -1)
			{
				hexa = hexa.Substring(tamDelimiter);

				while (len > 0)
				{
					strHexa = hexa.Substring(0, tamDelimiter);

					if (!strHexa.Equals (escapeBegin) && !strHexa.Equals (escapeEnd)) 
					{

//						using (StreamWriter writer = new StreamWriter(@"/home/brenopolanski/MonoDeveloper/projects/ConvertHexECG/saida.txt", true))
//						{
//							writer.WriteLine(strHexa);
//						}


						strBin = Convert.ToString(Convert.ToInt32(strHexa, 16), 2);

						if (strBin[0].Equals('1')) {
							//Console.WriteLine("-" + twoComplement(strBin));
							using (StreamWriter writer = new StreamWriter(@"/home/brenopolanski/MonoDeveloper/projects/ConvertHexECG/saida.txt", true))
							{
								writer.WriteLine(Convert.ToInt32(strBin, 10));
							}
						} 
						else 
						{
							//Console.WriteLine(twoComplement(strBin));
							using (StreamWriter writer = new StreamWriter(@"/home/brenopolanski/MonoDeveloper/projects/ConvertHexECG/saida.txt", true))
							{
								writer.WriteLine(Convert.ToInt32(strBin, 10));
							}
						}

//						Console.WriteLine(twoComplement(strBin));
						//Console.WriteLine (strHexa);
						hexa = hexa.Substring (tamDelimiter);
						len = hexa.Length;
					} 
					else 
					{
						hexa = hexa.Substring (tamDelimiter);
						len = hexa.Length;
					}
				}
			}
		}
	}
}
