import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input type="text" placeholder="Super duper secret" />

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
