import React from 'react';
import Table from '../Table';
import { setUpTestEnvironment } from './setUpTestEnv';
import { initialValues } from '../constants';

setUpTestEnvironment();

describe('when props passed', () => {
  const props = {initialValues};
  const component = shallow(<Table {...props}/>);

  it('should render', () =>{
    expect(component.exists()).toBe(true);
  })

  it('should render wrapper div with expected class', () =>{
    expect(component.find('div').at(0).prop('className')).toEqual('body');
  })

  it('should render form with onSubmit', () =>{
    expect(component.find('form').prop('onSubmit')).toBeDefined();
  })

  it('should render table with expected className', () =>{
    expect(component.find('table').exists()).toBe(true)
    expect(component.find('table').prop('className')).toEqual('table')
  })

  it('should render table header with 2 column headers', () =>{
    expect(component.find('thead').exists()).toBe(true)
    expect(component.find('th')).toHaveLength(2)
    expect(component.find('th').at(0).text()).toEqual('Categories')
    expect(component.find('th').at(1).text()).toEqual('Keywords')
  })

  it('should render table body ', () =>{
    expect(component.find('thead').exists()).toBe(true)
  })

  it('should render table body ', () =>{
    expect(component.find('thead').exists()).toBe(true)
  })

  it('should render all passed categories', () =>{
    const categories = component.find('table__category_item');
    console.log(categories.debug())
  })
});
