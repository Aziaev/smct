import React from 'react';
import Header from '../Header';
import { setUpTestEnvironment } from './setUpTestEnv';

setUpTestEnvironment();

describe('when props passed', () => {
  const name = 'foo';
  const description = 'bar';
  const props = {name, description};
  const component = shallow(<Header {...props}/>);
  it('should render', () =>{
    expect(component.exists()).toBe(true);
  })

  it('should render wrapper header with expected class', () =>{
    expect(component.find('header').prop('className')).toEqual('header');
  })

  it('should render app name in paragraph', () =>{
    expect(component.find('p').exists()).toBe(true)
    expect(component.find('p').text()).toBe(name)
  })

  it('should render description in small', () =>{
    expect(component.find('small').exists()).toBe(true)
    expect(component.find('small').text()).toBe(description)
  })
});
