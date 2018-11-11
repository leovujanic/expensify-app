import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from "./routers/AppRouter"
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';


const store = configureStore();

const appRoot = document.getElementById('app');

const jsx = (
	<Provider store={store}>
		<AppRouter/>
	</Provider>
);

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(
		jsx,
		appRoot
	);
});

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log('log in');
	} else {
		console.log('log out');
		history.push('/');
	}
});

