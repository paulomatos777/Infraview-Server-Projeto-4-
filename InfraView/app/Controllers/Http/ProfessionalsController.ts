import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Professional from 'App/Models/Professional'

export default class ProfessionalsController {
  public async index({}: HttpContextContract) {
    const professionals = await Professional.all()

    return professionals
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['registration'])

    const professional = await Professional.create(data)

    return professional
  }

  public async show({ params }: HttpContextContract) {
    const professional = await Professional.findOrFail(params.id)

    return professional
  }

  public async update({ params, request }: HttpContextContract) {
    const professional = await Professional.findOrFail(params.id)
    const data = request.only(['registration'])

    professional.merge(data)
    await professional.save()

    return professional
  }

  public async destroy({ params }: HttpContextContract) {
    const professional = await Professional.findOrFail(params.id)

    await professional.delete()
  }
}
