import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Building extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public state: string

  @column()
  public city: string

  @column()
  public street: string

  @column()
  public address_number: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
