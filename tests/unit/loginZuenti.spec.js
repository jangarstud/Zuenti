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

  it('No redirecciona con login incorrecto', async () => {
    let btnLogin = wrapper.find('#btn-login');
    actions.login.mockResolvedValue({
      data: {
        success: false
      }
    })
    router.push.mockClear();
    btnLogin.trigger('click');
    expect(router.push).toHaveBeenCalledTimes(0);
  })

})