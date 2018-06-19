import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pages/index'
import person from '@/components/pages/person'
import hotel from '@/components/pages/hotel'

Vue.use(Router)

export default new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		console.log(to),
			console.log(from)
		console.log(savedPosition)
	},
	routes: [{
		path: '/',
		name: 'index',
		component: index
	}, {
		path: '/person',
		name: 'person',
		component: person
	}, {
		path: '/hotel',
		name: 'hotel',
		component: hotel
	}, ]
})