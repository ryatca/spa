const router = new VueRouter({
	mode: 'history', //これを書かないとURLに/#/みたいに入る
	routes:[
		{path:'/spa/home', component: home, alias:'/spa/'},
		{path:'/spa/a',redirect: '/spa/click' },
		{path:'/spa/click',component: click, alias:['/spa/b', '/spa/c']},
		{path:'/spa/404',component: NotFound},
		{path:'/spa/*',redirect: '/spa/404'},
	]
})

const wrapper = new Vue({
	el: '#wrapper',
	router: router
})