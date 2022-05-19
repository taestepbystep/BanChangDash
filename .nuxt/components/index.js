export { default as Footer } from '../..\\components\\Footer.vue'
export { default as JobMonitorModal } from '../..\\components\\JobMonitorModal.vue'
export { default as LineChart } from '../..\\components\\LineChart.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NewAlarmModal } from '../..\\components\\NewAlarmModal.vue'
export { default as NewContainerModal } from '../..\\components\\NewContainerModal.vue'
export { default as NewDriverModal } from '../..\\components\\NewDriverModal.vue'
export { default as NewJobDriverModal } from '../..\\components\\NewJobDriverModal.vue'
export { default as NewJobModal } from '../..\\components\\NewJobModal.vue'
export { default as NewRouteModal } from '../..\\components\\NewRouteModal.vue'
export { default as NewTruckModal } from '../..\\components\\NewTruckModal.vue'
export { default as RealtimeAlert } from '../..\\components\\RealtimeAlert.vue'
export { default as SendMessageModal } from '../..\\components\\SendMessageModal.vue'
export { default as Sidebar } from '../..\\components\\Sidebar.vue'
export { default as SidebarMobile } from '../..\\components\\SidebarMobile.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
