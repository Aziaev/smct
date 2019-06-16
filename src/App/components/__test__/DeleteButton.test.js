import { setUpTestEnvironment } from '../../__test__/setUpTestEnv';
import React from 'react';
import DeleteButton from '../DeleteButton';

setUpTestEnvironment();

describe('DeleteButton test', () => {
  describe('when passed props with type button, not disabled and with color accept', () => {
    const onClick = jest.fn();
    const name = 'FOO NAME';
    const props = {
      onClick,
      name,
    };
    const component = shallow(<DeleteButton {...props} />);
    it('Should render properly', () => {
      expect(component.exists()).toBe(true);
    });
    it('Should render button with passed props', () => {
      expect(component.find('button').exists()).toBe(true);
      expect(component.find('button').prop('name')).toBe(props.name);
      expect(component.find('button').prop('onClick')).toBe(props.onClick);
    })

    it('should invoke passed onClick when clicked', () => {
      component.find('button').simulate('click');
      expect(onClick).toHaveBeenCalled();
    })
  });
});
