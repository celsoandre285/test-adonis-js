'use strict'

/**
 * Resourceful controller for interacting with categories
 */

const Category = use('App/Models/Category')

class CategoryController {


  /**
   * Show a list of all categories.
   * GET categories
   */
  async index ({ request, response, view }) {
    const categories = await Category.all().then(data => data.toJSON());
    console.log(categories)
    return view.render('categories', {
      categories
    })

  }

  /**
   * Render a form to be used for creating a new category.
   * GET categories/create
   */
  async create ({ request, response, view }) {
    return view.render('editor')
  }

  /**
   * Create/save a new category.
   * POST categories
   */
  async store ({ request, response }) {
    const {name, description, cat_slug } = request.post()

    const category = await Category.create({name,description,cat_slug  })

    return response.redirect('/categories' )

  }

  /**
   * Display a single category.
   * GET categories/:id
   */
  async show ({ params: {slug}, request, response, view }) {
    const category  = await Category.findBy('slug', slug).then(data => data.toJSON())
    return view.render('category')
    
  }

  /**
   * Render a form to update an existing category.
   * GET categories/:id/edit
   */
  async edit ({ params:{id}, request, response, view }) {
    const category  = await Category.findBy('id', id).then(data => data.toJSON())
    return view.render('editor', {
      category
    })
  }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   */
  async update ({ params: {id}, request, response }) {
    const category  = await Category.findBy(id)
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = CategoryController
