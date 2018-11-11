import {Router, Route, Switch} from "react-router-dom";
import React from "react";
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage';
import AddExpensePage from './../components/AddExpensePage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import NotFoundPage from './../components/NotFoundPage';
import Header from './../components/Header';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true}/>
				<PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
				<PrivateRoute path="/create" component={AddExpensePage}/>
				<PrivateRoute path="/edit/:id" component={EditExpensePage}/>
				<PrivateRoute path="/help" component={HelpPage}/>
				<PrivateRoute component={NotFoundPage}/>
			</Switch>
		</div>
	</Router>
);


export default AppRouter;