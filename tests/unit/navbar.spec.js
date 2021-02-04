import { shallowMount, createLocalVue } from "@vue/test-utils";
import flushPromises from "flush-promises";
import Vuex from 'vuex';
import Navbar from '../../src/components/navbar/Navbar.vue';
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);
//localVue.use(VueRouter);

describe('NavBar loggeado', () => {
  let wrapper;
  let actions;
  let router;
  let getters;

  beforeAll(() => {
      router = {
          push: jest.fn()
      }
      getters = {
        auth: () => ({
          userName: 'test',
          password: 'pwd'
        }), 
        isLoggedIn: () => true
      }
      let store = new Vuex.Store({
          actions,
          getters
      });
      wrapper = shallowMount(Navbar, {
        stubs: ['router-link', 'router-view'],
        store,
        localVue,
        mocks: {
          $router: router
        }
      });
  })

  /* it('Redireccion a home', async ()=>{
    //expect(wrapper.find("#ZuentiHome").text()).toContain("Zuenti");
    router.push.mockClear();
    wrapper.find("#ZuentiHome").trigger('click');
    expect(wrapper.find('#ZuentiHome').exists()).toBe(true);
    console.log(wrapper);
    expect(wrapper.vm.$route.path).toBe('/');
    }); */

    it('Muestra menú Mi Perfil si el usuario está loggeado', async () => {
      expect(wrapper.html()).toContain('My profile');
    });
    
    it('No muestra menú Register si el usuario está loggeado', async () => {
      expect(wrapper.html()).not.toContain('Register');
    });
  });

  describe('NavBar no loggeado', () => {
    let wrapper;
    let actions;
    let router;
    let getters;
  
    beforeAll(() => {
        router = {
            push: jest.fn()
        }
        getters = {
          auth: () => ({
            userName: 'test',
            password: 'pwd'
          }), 
          isLoggedIn: () => false
        }
        let store = new Vuex.Store({
            actions,
            getters
        });
        wrapper = shallowMount(Navbar, {
          stubs: ['router-link', 'router-view'],
          store,
          localVue,
          mocks: {
            $router: router
          }
        });
    })
  
    it('No muestra menú Mi Perfil si el usuario no está loggeado', async () => {
      expect(wrapper.html()).not.toContain('My profile');
    });
  
    it('Muestra menú Register si el usuario no está loggeado', async () => {
      expect(wrapper.html()).toContain('Register');
    });
})