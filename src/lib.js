import * as components from './components'
import * as containerComponents from './container-components'
import router from './router'

const VuePlugin = {
  router,
  // defaultComponent: containerComponents.dashboardpage,
  install: function (Vue) {
    if (Vue._login_vue_installed) {
      return
    }

    Vue._login_vue_installed = true

    // Registro de componentes
    for (var component in components) {
      Vue.component(component, components[component])
    }

    // Registro de contenedores de componentes padres
    /* for (var containerComponent in containerComponents) {
      Vue.component(containerComponent, containerComponents[containerComponent])
    } */
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlugin)
}

export default VuePlugin