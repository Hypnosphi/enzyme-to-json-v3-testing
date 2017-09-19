import React from 'react';
import Enzyme, {shallow, mount, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from '../Input';

Enzyme.configure({adapter: new Adapter()});

it('converts basic button using shallow', () => {
  const shallowed = shallow(<Input className="class" value="testVal" />);

  expect(shallowed).toMatchSnapshot();
});

it('converts basic button using mount', () => {
  const mounted = mount(<Input className="class" value="testVal" />);

  expect(mounted).toMatchSnapshot();
});

it('converts basic button using render', () => {
  const rendered = render(<Input className="class" value="testVal" />);

  expect(rendered).toMatchSnapshot();
});
