import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import Ticket from '../tickets/entity'
import User from '../users/entity'
  
  @Entity()
  export default class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number
    
    @Column('text', {nullable:false})
    textfield: string

    @ManyToOne(_ => Ticket, ticket => ticket.comments)
    ticket: Ticket  

    @ManyToOne(_ => User, user => user.comments)
    user: User
    
  }


