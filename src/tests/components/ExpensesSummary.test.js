import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';


test('Should correctly render ExpensesSummary with 1 expense', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
	expect(wrapper).toMatchSnapshot();
});

test('Should correctly render ExpensesSummary with multiple expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={4000}/>);
	expect(wrapper).toMatchSnapshot();
});