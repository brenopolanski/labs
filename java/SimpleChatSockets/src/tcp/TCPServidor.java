package tcp;

import java.io.IOException;
import java.net.*;
import java.util.Scanner;

public class TCPServidor {
	public static void main(String args[]) throws IOException {
		ServerSocket servidor = new ServerSocket(12345);
		System.out.println("Porta 12345 aberta!");
		
		Socket cliente = servidor.accept();
		System.out.println("Nova conexão com o cliente " +
				cliente.getInetAddress().getHostAddress()
		);
		
		Scanner s = new Scanner(cliente.getInputStream());
		while (s.hasNextLine()) {
			System.out.println(s.nextLine());
		}
		
		s.close();
		servidor.close();
		cliente.close();
	}
}
