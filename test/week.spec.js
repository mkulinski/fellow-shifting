import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Week from '../src/components/Week/Week.jsx';

describe('<Week />', () => {
  it('should have an h1', () => {
    const wrapper = shallow(<Week />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
