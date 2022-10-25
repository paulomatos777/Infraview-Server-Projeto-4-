import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Sector from './Sector'
import User from './User'
import DemandType from './DemandType'

export default class Demand extends BaseModel {
  @belongsTo(() => Sector)
  public sector: BelongsTo<typeof Sector>

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => DemandType)
  public demand_type: BelongsTo<typeof DemandType>

  @column()
  public obs: string

  @column()
  public isDone: boolean

  @column()
  public user_id: number

  @column()
  public sector_id: number

  @column()
  public demand_type_id: number

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
