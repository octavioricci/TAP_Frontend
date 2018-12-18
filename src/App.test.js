import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import App from './App';
import App2 from './App2';
import Login from './components/Login';

/*
it('shallows without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.shallow(<App2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});*/


// Shallo permite testar de forma aislada el componente, sin incluir los hijos
describe('<Login />',() => {
  it('should shallow',() => {
    const Wrapper = shallow(<Login />)
    expect(Wrapper);
  })
})

describe('Testing Login Component',() => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });
    
  it('includes a form', () => {
    expect(wrapper.find('form.login').exists()).toBe(true)
  });
})

