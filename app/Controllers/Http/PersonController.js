'use strict'

const Person  = use('App/Models/Person');
const Database = use('Database');
const Request = use ('Request')

/**
 * Resourceful controller for interacting with people
 */
class PersonController {
  /**
   * Show a list of all people.
   * GET people
   */
  async index ({ request, response, view }) {
  
    /*Buscando informações por Query*/
    //var people = await Database.table('people').select('*')

    /*Buscando informações por Model */
    const people = await Person.all();
    response.status(200).json(people);
  }

  /**
   * Render a form to be used for creating a new person.
   * GET people/create
   */
  async create ({ request, params, response, view }) {

    const person = new Person();
    person.name = params.id;
    person.save();
    response.send(params.id);

  }

  /**
   * Create/save a new person.
   * POST people
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single person.
   * GET people/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing person.
   * GET people/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update person details.
   * PUT or PATCH people/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a person with id.
   * DELETE people/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PersonController
