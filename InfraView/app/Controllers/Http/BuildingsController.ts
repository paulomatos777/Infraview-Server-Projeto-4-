import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Building from 'App/Models/Building'

export default class BuildingsController {
  public async index({}: HttpContextContract) {
    const buildings = await Building.all()

    return buildings
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['state', 'city', 'street', 'address_number'])

    let building = await Building.create(data)

    return building
  }

  public async show({ params }: HttpContextContract) {
    const building = await Building.findOrFail(params.id)

    return building
  }

  public async update({ params, request }: HttpContextContract) {
    const building = await Building.findOrFail(params.id)
    const data = request.only(['state', 'city', 'street', 'address_number'])

    building.merge(data)
    await building.save()

    return building
  }

  public async destroy({ params }: HttpContextContract) {
    const building = await Building.findOrFail(params.id)

    await building.delete()
  }
}
