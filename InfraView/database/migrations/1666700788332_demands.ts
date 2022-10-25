import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'demands'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('obs')
      table.boolean('isDone').defaultTo(false)
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('sector_id').unsigned().references('id').inTable('sectors')
      table.integer('demand_type_id').unsigned().references('id').inTable('demand_types')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
