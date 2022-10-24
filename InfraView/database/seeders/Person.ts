import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person from 'App/Models/Person'

export default class extends BaseSeeder {
  public async run() {
    const uniqueKey = 'cpf'
    await Person.updateOrCreateMany(uniqueKey, [
      {
        cpf: '320.066.830-04',
      },
      {
        cpf: '648.500.820-92',
      },
    ])
  }
}
