'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

//'Route.on('/').render('welcome')

Route.on('/').render('index');

// Route.get('/name?', ({ view }) => {
//   Route.get('/person/:id', 'PersonController.show')
//   return view.render('home')
// })

Route.get('/home/:name?', 'HomeController.index');

Route.get('/person', 'PersonController.index');

const Database = use('Database')

Route.get('/test', async () => {
  return await Database.table('people').select('*')
})

Route.get('/create/:id', 'PersonController.create')

// Route.get('/person/:id', 'PersonController.show');





// Route.group('v1',  ()=>{
// 	Route.get('/test', () => 'Hello world').as('test_get');

// 	Route.get('/posts/:id', async ({ params }) => {
//   		const post = await Post.find(params.id)
//   		return post
// 	})

// }).prefix('/v1');

/* Categories */

Route.get('/categories', 'CategoryController.index')
Route.get('/categories/add', 'CategoryController.create')
Route.get('/categories/:slug', 'CategoryController.show')
Route.get('/categories/edit/:id', 'CategoryController.edit')

Route.post('/categories', 'CategoryController.store')
Route.put('/categories/:id', 'CategoryController.uypdate')


