import React from 'react';
import Footer from '../Footer';
import { setUpTestEnvironment } from './setUpTestEnv';

setUpTestEnvironment();

describe('when props passed', () => {
  const title = 'foo';
  const link = 'bar';
  const props = {title, link};
  const component = shallow(<Footer {...props}/>);
  it('should render', () =>{
    expect(component.exists()).toBe(true);
  })

  it('should render wrapper div with expected class', () =>{
    expect(component.find('div').prop('className')).toEqual('footer');
  })

  it('should render url with passed props', () =>{
    expect(component.find('a').exists()).toBe(true)
    expect(component.find('a').prop('className')).toEqual('link')
    expect(component.find('a').prop('href')).toBe(link)
    expect(component.find('a').text()).toBe(title)
  })
});
