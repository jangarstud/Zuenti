import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import LoginZuenti from '../../src/components/login/LoginZuenti.vue'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

const localVue = createLocalVue();
localVue.use(Vuex);

let div = document.createElement('div');
div.id = 'raiz';
document.body.appendChild(div);

window.alert = jest.fn();

describe('Login', () => {
  let wrapper;
  let actions;
  let router;
  let getters;

  beforeAll(() => {
      router = {
          push: jest.fn()
      }
      actions = {
          login: jest.fn().mockResolvedValue({
            data: {
              success: true
            }
          })
      }
      getters = {
        auth: () => ({
          userName: 'test',
          password: 'pwd'
        })
      }
      let store = new Vuex.Store({
          actions,
          getters
      });
      wrapper = shallowMount(LoginZuenti, {
        store,
        localVue,
        mocks: {
          $router: router
        },
        attachTo: '#raiz'
      });
  })

  it('Lee correctamente usuario y clave', async () => {
    let btnLogin = wrapper.find('#btn-login');
    let inputUserName = wrapper.find('#userName');
    let inputPassword = wrapper.find('#password');
    await inputUserName.setValue('usr');
    await inputPassword.setValue('pwd');
    actions.login.mockClear();
    btnLogin.trigger('click');
    expect(actions.login).toHaveBeenCalledWith(
      expect.any(Object),
      {
        userName: 'usr',
        password: 'pwd'
      });
  })

})