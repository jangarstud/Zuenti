import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import CardLogOut from '../../src/components/logout/CardLogOut.vue'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CardLogOut', () => {
  let wrapper;

  it('Texto del mensaje correspondiente al componente', () => {
      wrapper = shallowMount(CardLogOut, {
        stubs: ['router-link', 'router-view']
      });

    let titulo = wrapper.find('.card-title');
    expect(titulo.text()).toBe('Logged out successfully!!');
        
  })


})