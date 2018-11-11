import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

// Old version
// import ReactShallowRenderer from 'react-test-renderer/shallow'
//
// test('Should render header correctly', () => {
// 	const renderer = new ReactShallowRenderer();
// 	renderer.render(<Header/>);
// 	expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

test('Should render header correctly', () => {
	const wrapper = shallow(<Header startLogOut={() => {}}/>);
	expect(wrapper).toMatchSnapshot();
});


test('Should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogOut={startLogout}/>);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});