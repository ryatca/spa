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
		<li><i class="fas fa-angle-right"></i><router-link to="/spa/">Home</router-link></li>
		<li><i class="fas fa-angle-right"></i><router-link to="/spa/about">About</router-link></li>
		<li><i class="fas fa-angle-right"></i><router-link to="/spa/works">Works</router-link></li>
		<li><i class="fas fa-angle-right"></i><router-link to="/spa/contact">Contact</router-link></li>
	</ul>`
})

//VueRouterで描画するtemplateを作成

//clickのページ
const click = {
	template:
		`<div>
			<p>click page</p>
			<click></click>
			<click></click>
			<click></click>
		</div>`
}
//NotFoundページ
const notfound = {
	template:
		`<div class="row">
			<div class="col-12 text-center">
				<img class="img-fluid" src="img/404.png" alt="404 Notfound" />
				<p class="text-center">ページが見つかりません。</p>
			</div>
		</div>`
}

//homeのページ
const home = {
	template:
	`<div class="row">
		<div class="col-12">
			<p>VueとVueRouterつかったやつ</p>
			<p>SPAです</p>
		</div>
	</div>`
}

const about = {
	template:
	`
	<div id="About" class="row shadow-lite con-radius mb-4">
		<div class="col-lg-12 col-sm-12 mb-4">
			<h2 class="text-center mt-2 mb-2">About</h2>
		</div>


		<div class="col-lg-12 col-sm-12 mb-4 mt-4">
			<p class="mb-1">秋田に住んでる情報系の専門学生です。基礎はまだまだ固まってませんが物を作るのが好きです。</p>
			<p class="mb-1">いろいろなことをやってきましたが、一番勉強した言語はJavaScriptで一番好きな言語はPHPです。</p>
			<p>ほかには絵を描いてみたり、曲を作ってみたりと色々挑戦しています。</p>
		</div>

		<div class="col-lg-6 col-sm-12">
			<p class="mb-1">勉強した言語</p>
			<ul>
				<li><i class="fas fa-angle-right"></i>　Java</li>
				<li><i class="fas fa-angle-right"></i>　JavaScript</li>
				<li><i class="fas fa-angle-right"></i>　PHP</li>
				<li><i class="fas fa-angle-right"></i>　HTML,CSS</li>
				<li><i class="fas fa-angle-right"></i>　C#(Unityで触った程度ですが…。)</li>
				<li><i class="fas fa-angle-right"></i>　Python(少し触った程度なのでコードが読めるか読めないか程度です。)</li>
			</ul>
		</div>

		<div class="col-lg-6 col-sm-12">
			<p class="mb-1">ほかに勉強したもの</p>
			<ul>
				<li><i class="fas fa-angle-right"></i>　Git</li>
				<li><i class="fas fa-angle-right"></i>　Linux</li>
				<li><i class="fas fa-angle-right"></i>　jQuery (JavaScript)</li>
				<li><i class="fas fa-angle-right"></i>　laravel (PHP)</li>
				<li><i class="fas fa-angle-right"></i>　Bootstrap (CSS)</li>
				<li><i class="fas fa-angle-right"></i>　Vue.js (JavaScript)</li>
			</ul>
		</div>
	</div>
	`
}

const works = {
	template:
	`
		<div id="Works" class="row shadow-lite con-radius mb-4">
			<div class="col-lg-12 col-sm-12 mb-4">
				<h2 class="text-center fonts-Orbitron mt-2 mb-2"><img src="img/works.svg" alt="" /> Works</h2>
			<div class="row">

				<div class="col-lg-4 col-md-6 col-sm-12 mb-4 px-2">
					<a href="https://jquery-d2f44.firebaseapp.com/" target="_blank" class="w-100">
						<div class="card h-100 hover-shadow">
							<img src="img/mogura.jpg" alt="card-img img-thumbnail" class="card-img-top"/>
							<div class="card-body">
								<h4 class="card-title text-none">モグラたたき</h4>
								<p class="card-text text-none">学校祭の時に作ったゲームです。何匹叩いたらクリアみたいなものはありません。ハイスコアだけ目指して頑張ってください。</p>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-12 mb-4 px-2">
					<a href="https://github.com/ryatca/MyTree" target="_blank" class="w-100">
						<div class="card h-100 hover-shadow">
							<img src="img/kanban.jpg" alt="card-img img-thumbnail" class="card-img-top"/>
							<div class="card-body">
								<h4 class="card-title text-none">タスク管理ボード</h4>
								<p class="card-text text-none">ノリと勢いで作ったものです。どこ見てもスマホサイズになるような物がないなーと思ってBootstrapと絡ませてレスポンシブっぽくしました。ブラウザ消すと復活しない欠陥を持っています。</p>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-12 mb-4 px-2">
					<a href="https://ryatca-todolist.firebaseapp.com/" target="_blank" class="w-100">
						<div class="card h-100 hover-shadow">
							<img src="img/todo.jpg" alt="card-img img-thumbnail" class="card-img-top"/>
							<div class="card-body">
								<h4 class="card-title text-none">ToDoList</h4>
								<p class="card-text text-none">Vue.jsに慣れるために作成したものです。保存もできるしレスポンシブだが活用方法が見つからない。</p>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-12 mb-4 px-2">
					<a href="https://github.com/ryatca/million_strap" target="_blank" class="w-100">
						<div class="card h-100 hover-shadow">
							<img src="img/million.jpg" alt="card-img img-thumbnail" class="card-img-top"/>
							<div class="card-body">
								<h4 class="card-title text-none">million_strap</h4>
								<p class="card-text text-none">初めてのSass。ミリシタ最高にハマってたのでミリオンオールスターの色を設定できるようにしました。色は調整中です</p>
							</div>
						</div>
					</a>
				</div>

				<div class="col-lg-4 col-md-6 col-sm-12 mb-4 px-2">
					<a href="https://ryatca-chat-beta.web.app/" target="_blank" class="w-100">
						<div class="card h-100 hover-shadow">
							<img src="img/chat.jpg" alt="card-img img-thumbnail" class="card-img-top"/>
							<div class="card-body">
								<h4 class="card-title text-none">簡易文字板</h4>
								<p class="card-text text-none">firebaseのRealtime Databaseを使ったもの。無法地帯になりました。</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		`
}

const contact = {
	template:
	`<div>Contact page</div>`
}