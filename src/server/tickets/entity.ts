import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Timestamp} from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsString} from 'class-validator'
import Event from '../events/entity'
import Comment from '../comments/entity'
import User from '../users/entity'

  
  @Entity()
  export default class Ticket extends BaseEntity {
  
    @PrimaryGeneratedColumn()
    id?: number
  
    @Column('text', {nullable:true})
    picture: string
  
    @Column('int', {nullable:false})
    price: number
  
    @IsString()
    @Column('text', {nullable:false})
    description: string

    @Column('timestamp', {default: () => "CURRENT_TIMESTAMP"})
    time: Timestamp

    @ManyToOne(_ => Event, event => event.tickets)
    event: Event

    @OneToMany(_ => Comment,comment => comment.ticket, {eager:true})
    comments: Comment[]

    //eager true aangezet, om bijbehorende user op te vragen.
    @ManyToOne(_ => User, user => user.tickets)
    user: User
  
  }

