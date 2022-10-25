import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Person from 'App/Models/Person'

export default class PeopleController {
  public async index({}: HttpContextContract) {
    const people = await Person.all()

    return people
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(Person.fillable)

    const person = await Person.create(data)

    return person
  }

  public async show({ params }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)

    return person
  }

  public async update({ params, request }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)
    const data = request.only(Person.fillable)

    person.merge(data)
    await person.save()

    return person
  }

  public async destroy({ params }: HttpContextContract) {
    const person = await Person.findOrFail(params.id)

    await person.delete()
  }
}
