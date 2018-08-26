import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots';
import CardList from './CardList'
import App from './App';


ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
