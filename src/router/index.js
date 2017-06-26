import Vue from 'vue'
import Router from 'vue-router'
import formView from '../components/formView'
import truthsView from '../components/truthsView'
import conceptsView from '../components/conceptsView'
import collabsView from '../components/collabsView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: formView
    },
    {
      path: '/truths',
      name: 'truths',
      component: truthsView
    },
    {
      path: '/concepts',
      name: 'concepts',
      component: conceptsView
    },
    {
      path: '/collabs',
      name: 'collabs',
      component: collabsView
    }
  ]
})
