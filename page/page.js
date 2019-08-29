//使いまわし可能のコンポーネントを用意(固定部品として使ってもいいかも...?)

//click部品
Vue.component('click',{
	data:function(){
		return{
			count:0
		}
	},
	template:'<button @click="count++"> {{count}} times.</button>'
})
//spaリンク
Vue.component('spa-link',{
	template:
	`<ul>
		<li><router-link to="/spa/home">homeへ</router-link></li>
		<li><router-link to="/spa/">homeへ(/homeなし)</router-link></li>
		<li><router-link to="/spa/notfound">NotFoundへ</router-link></li>
		<li><router-link to="/spa/click">Clickへ</router-link></li>
		<li><router-link to="/spa/a">Clickへ(redirect的に行く感じ)</router-link></li>
		<li><router-link to="/spa/snDK+BVG">NotFoundへ(redirect的に行く感じ)</router-link></li>
		<li><router-link to="/spa/b">clickへ(/bでclickが動く)</router-link></li>
	</ul>`
})

//VueRouterで描画するtemplateを作成

//clickのページ
const click = {
	template:
		`<div>
			<click></click>
			<click></click>
			<click></click>
		</div>`
}
//NotFoundページ
const NotFound = {
	template:
		`<div>404 Page Not Found</div>`
}

//homeのページ
const home = {
	template:
	`<div>Home Page</div>`
}