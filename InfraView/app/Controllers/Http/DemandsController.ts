import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Demand from 'App/Models/Demand'

export default class DemandsController {
  public async index({}: HttpContextContract) {
    const demands = await Demand.all()

    return demands
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['user_id', 'sector_id', 'demand_type_id', 'obs', 'isDone'])

    let demand = await Demand.create(data)

    return demand
  }

  public async show({ params }: HttpContextContract) {
    const demand = await Demand.findOrFail(params.id)

    return demand
  }

  public async update({ params, request }: HttpContextContract) {
    const demand = await Demand.findOrFail(params.id)
    const data = request.only(['user_id', 'sector_id', 'demand_type_id', 'obs', 'isDone'])

    demand.merge(data)
    await demand.save()

    return demand
  }

  public async destroy({ params }: HttpContextContract) {
    const demand = await Demand.findOrFail(params.id)

    await demand.delete()
  }
}
