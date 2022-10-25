import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DemandType from 'App/Models/DemandType'

export default class DemandTypesController {
  public async index({}: HttpContextContract) {
    const demands_type = await DemandType.all()

    return demands_type
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['responsible', 'expected_deadline', 'urgency', 'description'])

    let demand_type = await DemandType.create(data)

    return demand_type
  }

  public async show({ params }: HttpContextContract) {
    const demand_type = await DemandType.findOrFail(params.id)

    return demand_type
  }

  public async update({ params, request }: HttpContextContract) {
    const demand_type = await DemandType.findOrFail(params.id)
    const data = request.only(['responsible', 'expected_deadline', 'urgency', 'description'])

    demand_type.merge(data)
    await demand_type.save()

    return demand_type
  }

  public async destroy({ params }: HttpContextContract) {
    const demand_type = await DemandType.findOrFail(params.id)

    await demand_type.delete()
  }
}
