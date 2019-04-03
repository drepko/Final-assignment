import { JsonController, Post, Body, HttpCode, Param, NotFoundError, Get, 
    Authorized, CurrentUser, Put, 
    //ForbiddenError
} from 'routing-controllers'
import Ticket from './entity'
import Event from '../events/entity'
import User from '../users/entity'

@JsonController()
export default class TicketsController {
    
    @Authorized()
    @Post('/events/:id')
    @HttpCode(201)
    async CreateTicket(
        @Body() ticket: Ticket,
        @Param('id') eventId :number,
        @CurrentUser() user: User
    ) {
        const event = await Event.findOne(eventId)

        if(!event) {
            throw new NotFoundError('Sorry, this event does not excist')
        }
        const newticket = await ticket.save()   
        newticket.event = event  
        newticket.user = user   
        return newticket.save()
    }

    @Get('/tickets')
    async getAllTickets() {
        const tickets = await Ticket.find()
        return tickets
    }
    
    @Get('/tickets/:id')
    async getTicket(
        @Param('id') id: number
    ) {
        return await Ticket.findOne(id)
    }



    //@Authorized()
    @Put('/tickets/:id')
    async updateTicket(
      //@CurrentUser() User,
      @Param('id') id: number,
      @Body() update: Partial<Ticket>
    ) {
      const ticket = await Ticket.findOne(id)

      if (!ticket) {
        throw new NotFoundError(`Ticket does not exist`)
      }
  
    //   const author = await User.findOne(ticket)
    //   if (!author) {
    //     throw new ForbiddenError(`You are not allowed to update this ticket`)
    //   } 
      else {
        return Ticket.merge(ticket, update).save()
      }
    }
}




