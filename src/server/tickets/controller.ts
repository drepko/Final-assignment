import { JsonController, Post, Body, HttpCode, Param, NotFoundError, Get, Authorized, CurrentUser} from 'routing-controllers'
import Ticket from './entity'
import Event from '../events/entity'
import User from '../users/entity'

@JsonController()
export default class TicketsController {
    
    @Authorized()
    @Post('/events/:event_id/tickets')
    @HttpCode(201)
    async CreateTicket(
        @Body() ticket: Ticket,
        @Param('event_id') eventId :number,
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


}

