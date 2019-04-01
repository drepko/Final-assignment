import { JsonController, Post, Body, HttpCode, Param, NotFoundError, Get} from 'routing-controllers'
import Ticket from './entity'
import Event from '../events/entity'

@JsonController()
export default class TicketsController {
    
    @Post('/events/:event_id/tickets')
    @HttpCode(201)
    async CreateTicket(
        @Body() ticket: Ticket,
        @Param('event_id') eventId :number ,
    ) {
        const event = await Event.findOne(eventId)

        if(!event) {
            throw new NotFoundError('Sorry, this event does not excist')
        }
        const entity = await ticket.save()   
        entity.event = event     
        return entity.save()
    }

    @Get('/tickets')
    async getAllTickets() {
        const tickets = await Ticket.find()
        return tickets
    }
    
    @Get('/tickets/:id')
    getTicket(
        @Param('id') id: number
    ) {
        return Ticket.findOne(id)
    }





}

