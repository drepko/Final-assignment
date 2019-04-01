import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString, MinLength} from 'class-validator'
import Ticket from '../tickets/entity'
import User from '../users/entity'

@Entity()
export default class Event extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
  
  @IsString()
  @MinLength(1)
  @Column('text', {nullable:false})
  name: string

  @IsString()
  @MinLength(1)
  @Column('text', {nullable:false})
  description: string

  @Column('text', {nullable:false})
  picture: string
  
  // @Column('date', {nullable:false})
  // start: Date

  // @Column('date', {nullable:true})
  // end: Date

  @Column('text', {nullable:false})
  start: string

  @Column('text', {nullable:true})
  end: string

  @OneToMany(_ => Ticket, ticket => ticket.event, {eager:true})
  tickets: Ticket[]
  
  @ManyToOne(_ => User, user => user.events)
  user: User
}

