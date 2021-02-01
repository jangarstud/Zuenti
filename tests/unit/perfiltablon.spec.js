import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import PerfilTablon from '../../src/components/perfil/PerfilTablon.vue'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PerfilTablon', () => {
  let wrapper;

  it('Muestra correctamente lista vacía de comentarios', () => {
      wrapper = shallowMount(PerfilTablon, {
        data() {
            return {
                comentarios: []
            }
        }
    });

    let divHilo = wrapper.find('.hilo');
    expect(divHilo.exists()).toBe(false);
        
  })

  it('Muestra correctamente 2 hilos con comentarios', () => {
    wrapper = shallowMount(PerfilTablon, {
      data() {
          return {
              comentarios: [[
                  {name: 'Usr1', mensaje: 'Mensaje 1 - Hilo 1'},
                  {name: 'Usr2', mensaje: 'Mensaje 2 - Hilo 1'},
                  {name: 'Usr1', mensaje: 'Mensaje 3 - Hilo 1'},
                ]
              ,[
                  {name: 'Usr3', mensaje: 'Mensaje 1 - Hilo 2'},
                  {name: 'Usr4', mensaje: 'Mensaje 2 - Hilo 2'}
                ]
              ]
          }
      }
    });
    
    let divHilos = wrapper.findAll('.hilo');
    expect(divHilos.length).toBe(2);
    expect(divHilos.at(0).findAll('.mensaje').length).toBe(3);
    expect(divHilos.at(1).findAll('.mensaje').length).toBe(2);

    expect(divHilos.at(0).findAll('.mensaje').at(1).find('.nombre').text()).toBe('Usr2');
    expect(divHilos.at(0).findAll('.mensaje').at(1).find('.txt').text()).toBe('Mensaje 2 - Hilo 1');


      
})

})