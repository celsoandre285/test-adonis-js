'use strict'

/**
 * Resourceful controller for interacting with homes
 */
class HomeController {
  /**
   * Show a list of all homes.
   * GET homes
   */
  async index ({  params, request, response, view  }) {
    if(params.name){
      console.log(params.name);
    }
   
  }

  /**
   * Render a form to be used for creating a new home.
   * GET homes/create
   */
  async create ({ params, request, response, view }) {
  }

  /**
   * Create/save a new home.
   * POST homes
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single home.
   * GET homes/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing home.
   * GET homes/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update home details.
   * PUT or PATCH homes/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a home with id.
   * DELETE homes/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = HomeController
