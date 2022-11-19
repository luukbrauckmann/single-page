const routes = [
	{ name: '404', path: '**', template: './components/404.html' },
	{ name: 'Home', path: '/', template: './components/home.html' },
	{ name: 'Globals', path: '/globals', template: './components/globals.html' },
	{ name: 'Buttons', path: '/buttons', template: './components/buttons.html' }
]

const route = (event) => {
	event = event || window.event
	event.preventDefault()
	window.history.pushState({}, '', event.target.href)
	handleLocation()
}

const handleLocation = async () => {
	const path = window.location.pathname
	const route = routes.find((item) => item.path === path)
	const html = await fetch(route.template).then((data) => data.text())
	document.getElementById('app-root').innerHTML = html
}

window.onpopstate = handleLocation
window.route = route

handleLocation()