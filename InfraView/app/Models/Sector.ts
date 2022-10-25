import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Building from './Building'

export default class Sector extends BaseModel {
  @belongsTo(() => Building)
  public user: BelongsTo<typeof Building>

  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column()
  public building_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
