const routes = [
	{ title: '404', path: '#404', template: './components/404.html' },
	{ title: 'Home', path: '/', template: './components/home.html' },
	{ title: 'Globals', path: '#globals', template: './components/globals.html' },
	{ title: 'Buttons', path: '#buttons', template: './components/buttons.html' }
]

const locationHandler = async () => {
	const path = window.location.hash || '/'
	const route = routes.find((item) => item.path === path) || routes[0]
	const html = await fetch(route.template).then((data) => data.text())
	document.getElementById('app-root').innerHTML = html
	document.title = route.title
}

window.addEventListener('hashchange', locationHandler)
locationHandler()