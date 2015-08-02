using System;
using System.Text;
using System.IO;

// https://msdn.microsoft.com/pt-br/library/system.io.filestream%28v=vs.90%29.aspx?f=255&MSPPError=-2147217396
namespace FileStreams
{
	class MainClass
	{
		static void WriteFile(string Filename)
		{
			FileStream fs = new FileStream(Filename, FileMode.Create, FileAccess.Write);

			if (fs.CanWrite) 
			{
				byte[] buffer = Encoding.ASCII.GetBytes("Hello World");
				fs.Write(buffer, 0, buffer.Length);
			}

			fs.Flush();
			fs.Close();
		}

		static void ReadFile(string Filename)
		{
			FileStream fs = new FileStream(Filename, FileMode.Open, FileAccess.Read);

			if (fs.CanRead) 
			{
				byte[] buffer = new byte[fs.Length];
				int bytesread = fs.Read(buffer, 0, buffer.Length);

				Console.WriteLine(Encoding.ASCII.GetString(buffer, 0, bytesread));
			}

			fs.Close();
		}

		static void Main(string[] args)
		{
			string Filename = @"/home/brenopolanski/Desktop/GitHub/my/labs/microsoft/csharp/FileStreams/doc.txt";

			WriteFile(Filename);

			ReadFile(Filename);

			Console.Read ();
		}
	}
}
