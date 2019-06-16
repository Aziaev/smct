import React from 'react';
import App from '../';
import { setUpTestEnvironment } from './setUpTestEnv';
import { initialValue } from '../constants';

setUpTestEnvironment();

describe('when props passed', () => {
  const component = shallow(<App />);
  it('should render', () =>{
    expect(component.exists()).toBe(true);
  })

  it('should render header with expected props', () =>{
    expect(component.find('Header').exists()).toBe(true)
    expect(component.find('Header').prop('name')).toEqual('SM Code task')
    expect(component.find('Header').prop('description')).toEqual('Category and keyword manager')
  })

  it('should render Table with expected initial value passed', () =>{
    expect(component.find('Table').exists()).toBe(true)
    expect(component.find('Table').prop('initialValue')).toBe(initialValue)
  })

  it('should render Footer with expected initial value passed', () =>{
    expect(component.find('Footer').exists()).toBe(true)
    expect(component.find('Footer').prop('title')).toEqual('Github link')
    expect(component.find('Footer').prop('link')).toEqual('https://github.com/Aziaev/smct')
  })
});
