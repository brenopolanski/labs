package com.example.helloandroid;

import android.support.v7.app.ActionBarActivity;
import android.support.v7.app.ActionBar;
import android.support.v4.app.Fragment;
import android.text.Editable;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.os.Build;

public class MainActivity extends ActionBarActivity {
	
	private EditText nomeEditText;
	private TextView saudacaoTextView;
	private String saudacao;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
//		this.nomeEditText = (EditText) findViewById(R.id.nomeEditText);
//		this.saudacaoTextView = (TextView) findViewById(R.id.saudacaoTextView);
//		this.saudacao = getResources().getString(R.string.saudacao);

		if (savedInstanceState == null) {
			getSupportFragmentManager().beginTransaction()
					.add(R.id.container, new PlaceholderFragment()).commit();
		}
	}
	
//	public void msgUsuario(View v) {
//		Editable texto = this.nomeEditText.getText();
//		String msg = this.saudacao + " " + texto.toString();
//		this.saudacaoTextView.setText(msg);
//	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {

		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		// Handle action bar item clicks here. The action bar will
		// automatically handle clicks on the Home/Up button, so long
		// as you specify a parent activity in AndroidManifest.xml.
		int id = item.getItemId();
		if (id == R.id.action_settings) {
			return true;
		}
		return super.onOptionsItemSelected(item);
	}

	/**
	 * A placeholder fragment containing a simple view.
	 */
	public static class PlaceholderFragment extends Fragment implements View.OnClickListener {

		View rootView;
		
		private EditText nomeEditText;
		
		public PlaceholderFragment() {
		}

		@Override
		public View onCreateView(LayoutInflater inflater, ViewGroup container,
				Bundle savedInstanceState) {
			rootView = inflater.inflate(R.layout.fragment_main, container,
					false);
			
			Button btn = (Button) rootView.findViewById(R.id.saudacaoButton);
			btn.setOnClickListener(this);
			
			this.nomeEditText = (EditText) rootView.findViewById(R.id.nomeEditText);
			
			return rootView;
		}

		@Override
		public void onClick(View v) {
			
			switch(v.getId()) {
				case R.id.saudacaoButton:
					((TextView) rootView.findViewById(R.id.saudacaoTextView)).setText(this.nomeEditText.getText().toString());
					break;
			}
			
		}
	}

}
