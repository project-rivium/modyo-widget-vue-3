import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  it('Check if texts exists', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('VueJS')
  })
})
