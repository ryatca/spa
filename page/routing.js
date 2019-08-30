const router = new VueRouter({
	mode: 'history', //これを書かないとURLに/#/みたいに入る
	routes:[
		{path:'/spa/home', components:{default: home, kv: home_kv}, alias:'/spa/'},
		{path:'/spa/about',components:{default: about, kv: about_kv}},
		{path:'/spa/works',components:{default: works, kv: works_kv}},
		{path:'/spa/contact',components:{default: contact, kv: contact_kv}},
		{path:'/spa/404',components:{default: notfound, kv: notfound_kv}},
		{path:'/spa/a',redirect: '/spa/click' },
		{path:'/spa/click',component: click, alias:['/spa/b', '/spa/c']},
		{path:'/spa/*',redirect: '/spa/404'},
	]
})

const wrapper = new Vue({
	el: '#wrapper',
	router: router
})