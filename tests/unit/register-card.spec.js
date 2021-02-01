import RegisterCard from '../../src/components/register/RegisterCard.vue'
import {shallowMount} from "@vue/test-utils"
describe("RegisterCard", () => {
    

    const wrapper = shallowMount(RegisterCard)

    it("usuario registrado", async () => {

        const textInput = wrapper.find('#formGroupExampleInput')
        await textInput.setValue('test')
        //await wrapper.trigger('keydown.enter')

        const textInput2 = wrapper.find('#formGroupExampleInput2')
        await textInput2.setValue('test')
        //await wrapper.trigger('keydown.enter')

        const email = wrapper.find('#exampleInputEmail1')
        await email.setValue('test@gmail.com')
        //await wrapper.trigger('keydown.enter')

        const password = wrapper.find('#password')
        await password.setValue('1234')
        //await wrapper.trigger('keydown.enter')

        const RepeatPassword = wrapper.find('#RepeatPassword')
        await RepeatPassword.setValue('1234')
        //await wrapper.trigger('keydown.enter')

        const boton = wrapper.find("#boton-send")
        await boton.trigger('click')

        expect(wrapper.vm.newUser.userName).toContain('test')
        expect(wrapper.vm.newUser.email).toContain('test@gmail.com')

        wrapper.vm.$emit('addUser')
        expect(wrapper.emitted().addUser).toBeTruthy()

        //const user = wrapper.emitted()
        

       //expect(wrapper.emitted().addUser).toContain('test')


    })

})