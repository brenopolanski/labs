package com.example.androidintent;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class SaudacaoActivity extends Activity {
	public static final String EXTRA_NOME_USUARIO = "androidintent.EXTRA_NOME_USUARIO";
	public static final String ACAO_EXIBIR_SAUDACAO = "androidintent.ACAO_EXIBIR_SAUDACAO";
	public static final String CATEGORIA_SAUDACAO = "androidintent.CATEGORIA_SAUDACAO";
	
	private TextView saudacaoTextView;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.saudacao);
		
		this.saudacaoTextView = (TextView) findViewById(R.id.saudacaoTextView);
		
		Intent intent = getIntent();
		if (intent.hasExtra(EXTRA_NOME_USUARIO)) {
			String saudacao = getResources().getString(R.string.saudacao);
			saudacaoTextView.setText(saudacao + " " + intent.getStringExtra(EXTRA_NOME_USUARIO));
		} else {
			saudacaoTextView.setText("O nome do usuário não foi informado");
		}
	}
}
