import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LoginForm from '../LoginForm';

Enzyme.configure({adapter: new Adapter()});

it('converts basic button using shallow', () => {
  const shallowed = shallow(<LoginForm />);
  expect(shallowed).toMatchSnapshot();
});

it('converts basic button using mount', () => {
  const mounted = mount(<LoginForm />);
  expect(mounted).toMatchSnapshot();
});

it('converts basic button using render', () => {
  const rendered = render(<LoginForm />);
  expect(rendered).toMatchSnapshot();
});
