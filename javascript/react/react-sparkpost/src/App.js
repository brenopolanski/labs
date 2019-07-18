import React from 'react';
import logo from './logo.svg';
import SparkPost from 'sparkpost';
import './App.css';

const client = new SparkPost(process.env.SPARKPOST_API_KEY);

function App() {
  const sendEmail = () => {
    return client.transmissions
      .send({
        options: {
          sandbox: false
        },
        content: {
          from: process.env.EMAIL_FROM,
          subject: 'Test using react + sparkpost',
          html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'
        },
        recipients: [
          {
            address: process.env.EMAIL_TO
          }
        ]
      })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => sendEmail()}>Send Email</button>
      </header>
    </div>
  );
}

export default App;
