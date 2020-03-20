import Vue from 'vue'
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home', () => {
  const wrapper = mount(Home)
  const vm = wrapper.vm

  //make sure that it has the button
  it('has only one button', () => {
    expect(wrapper.contains('v-btn')).toBe(true)
    expect(wrapper.findAll('v-btn').length).toBe(1)
  })

  //make sure that the initial language is english
  it('lang intial value to be EN', () => {
    expect(vm.lang).toBe("EN")
  })

  //find the button click it and checks the language
  it('by clicking the button it changes the lang', async () => {
    expect(wrapper.text()).toContain('Hi, my name is Felipe Nunes and i am')
    const button = wrapper.find('v-btn')
    button.trigger('click')
    await Vue.nextTick()
    expect(wrapper.text()).toContain('Oi, meu nome é Felipe Nunes e eu estou')   
    expect(vm.lang).toBe('PT')      
  })
})
