Vue.component('spa-header',{
	template:
		`
<div class="pos-f-t fixed-top shadow-deep">

	<nav class="navbar navbar-light bg-light">
		<button class="shadow-button border-none navbar-toggler" type="button" data-toggle="collapse" data-target=".collapse" aria-controls=".collapse" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<router-link class="text-dark m-0 p-0" to="/spa/home">
			<p class="m-0 p-0 navtext">My page</p>
		</router-link>
	</nav>

	<div class="bg-light collapse">
		<router-link class="text-dark text-center" to="/spa/about">
			<h2 class="m-0 py-3">About</h2>
		</router-link>
	</div>

	<div class="bg-light collapse">
		<router-link class="text-dark text-center" to="/spa/works">
			<h2 class="m-0 py-3">Works</h2>
		</router-link>
	</div>

	<div class="bg-light collapse">
		<router-link class="text-dark text-center" to="/spa/contact">
			<h2 class="m-0 py-3">Contact</h2>
		</router-link>
	</div>

</div>
		`
})

Vue.component('spa-footer',{
	template:
	`
	<footer class="footer mt-auto py-3">
    <div class="container-fluid">
    	<spa-link></spa-link>
    </div>
  </footer>
	`
})