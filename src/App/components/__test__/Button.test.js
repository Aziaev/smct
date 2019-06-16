import { setUpTestEnvironment } from '../../__test__/setUpTestEnv';
import React from 'react';
import Button from '../Button';

setUpTestEnvironment();

describe('Button test', () => {
  describe('when passed props with type button, not disabled and with color accept', () => {
    const children = 'FOO CHILDREN';
    const onClick = jest.fn();
    const name = 'FOO NAME';
    const disabled = false;
    const type = 'button';
    const color = 'accept';
    const props = {
      children,
      onClick,
      name,
      disabled,
      type,
      color,
    };
    const component = shallow(<Button {...props} />);
    it('Should render properly', () => {
      expect(component.exists()).toBe(true);
    });
    it('Should render button with passed props', () => {
      expect(component.find('button').exists()).toBe(true);
      expect(component.find('button').prop('name')).toBe(props.name);
      expect(component.find('button').prop('onClick')).toBe(props.onClick);
      expect(component.find('button').prop('type')).toBe(props.type);
      expect(component.find('button').prop('disabled')).toBe(props.disabled);
      expect(component.find('button').text()).toBe(props.children);
    })

    it('should invoke passed onClick when clicked', () => {
      component.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    })
  });

  describe('when passed props with type button, not disabled and with color reject', () => {
    const children = 'FOO CHILDREN';
    const onClick = jest.fn();
    const name = 'FOO NAME';
    const disabled = false;
    const type = 'button';
    const color = 'reject';
    const props = {
      children,
      onClick,
      name,
      disabled,
      type,
      color,
    };
    const component = shallow(<Button {...props} />);
    it('Should render properly', () => {
      expect(component.exists()).toBe(true);
    });
    it('Should render button with passed props', () => {
      expect(component.find('button').exists()).toBe(true);
      expect(component.find('button').prop('name')).toBe(props.name);
      expect(component.find('button').prop('onClick')).toBe(props.onClick);
      expect(component.find('button').prop('type')).toBe(props.type);
      expect(component.find('button').prop('disabled')).toBe(props.disabled);
      expect(component.find('button').text()).toBe(props.children);
    })

    it('should invoke passed onClick when clicked', () => {
      component.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    })
  });
});
