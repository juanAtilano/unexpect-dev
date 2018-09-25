import Vue from 'vue'
import Router from 'vue-router'
/* 
Import de los componentes padres
*/
import { containerComponents } from '@/container-components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id',
      name: 'Home',
      component: containerComponents.HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: containerComponents.loginPage
    },
    {
      path: '/msg/:id/edit/:number/:msg',
      name: 'EditMsg',
      component: containerComponents.EditMsg
    },
    {
      path: '/history/:pagination',
      name: 'History',
      component: containerComponents.HistoryPage
    },
    {
      path: '/history/:from/:to/:pagination',
      name: 'HistoryDate',
      component: containerComponents.HistoryPage
    },
    {
      path: '/history/:text/:pagination',
      name: 'HistoryText',
      component: containerComponents.HistoryPage
    },
    {
      path: '/',
      redirect: { 
        name: 'Login' 
      }
    }
  ]
})
