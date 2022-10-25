import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async index({}: HttpContextContract) {
    const clients = await Client.all()

    return clients
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['user_id'])

    let client = await Client.create(data)

    return client
  }

  public async show({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)

    return client
  }

  public async update({ params, request }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)
    const data = request.only(['user_id'])

    client.merge(data)
    await client.save()

    return client
  }

  public async destroy({ params }: HttpContextContract) {
    const client = await Client.findOrFail(params.id)

    await client.delete()
  }
}
