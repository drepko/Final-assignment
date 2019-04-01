import { JsonController, Post, Body, HttpCode, Param, NotFoundError, Get} from 'routing-controllers'
import Ticket from '../tickets/entity'
import Event from '../events/entity'
import Comment from './entity'

@JsonController()
export default class CommentsController {
    
    @Post('/events/:event_id/tickets/:ticket_id/comments')
    @HttpCode(201)
    async CreateComment(
        @Body() comment: Comment,
        @Param('event_id') eventId :number ,
        @Param('ticket_id') ticketId :number ,
    ) {
        const event = await Event.findOne(eventId)
        if(!event) {
            throw new NotFoundError('Sorry, this event does not excist')
        }

        const ticket = await Ticket.findOne(ticketId)
        if(!ticket) {
            throw new NotFoundError('Sorry, this ticket does not excist')
        }

        const entity = await comment.save()   
        entity.ticket = ticket     
        return entity.save()
    }

    @Get('/comments')
    async getAllComments() {
        const comments = await Comment.find()
        return comments
    }
    
    @Get('/comments/:id')
    getComment(
        @Param('id') id: number
    ) {
        return Comment.findOne(id)
    }





}

