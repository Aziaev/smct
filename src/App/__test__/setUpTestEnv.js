import Adapter from 'enzyme-adapter-react-16/build';
import { configure } from 'enzyme/build';
import jsdom from 'jsdom';
import { shallow, render, mount } from 'enzyme';

/**
 * Import this, run and your test environment will be set up.
 */
function setUpDomEnvironment() {
  const { JSDOM } = jsdom;
  const dom = new JSDOM('<!doctype html><html lang="en"><body> </body></html>', { url: 'http://localhost/' });
  const { window } = dom;

  global.shallow = shallow;
  global.render = render;
  global.mount = mount;
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };
  copyProps(window, global);
}

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

export function setUpTestEnvironment() {
  setUpDomEnvironment();
  configure({ adapter: new Adapter() });
}