import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sector from 'App/Models/Sector'

export default class SectorsController {
  public async index({}: HttpContextContract) {
    const sectors = await Sector.all()

    return sectors
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['description', 'building_id'])

    let sector = await Sector.create(data)

    return sector
  }

  public async show({ params }: HttpContextContract) {
    const sector = await Sector.findOrFail(params.id)

    return sector
  }

  public async update({ params, request }: HttpContextContract) {
    const sector = await Sector.findOrFail(params.id)
    const data = request.only(['description', 'building_id'])

    sector.merge(data)
    await sector.save()

    return sector
  }

  public async destroy({ params }: HttpContextContract) {
    const sector = await Sector.findOrFail(params.id)

    await sector.delete()
  }
}
