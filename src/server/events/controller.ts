import { JsonController, Post, Body, HttpCode, Get, Param, Authorized, CurrentUser} from 'routing-controllers'
import Event from './entity'
import User from '../users/entity'

@JsonController()
export default class EventsController {

@Authorized()    
@Post('/events')
@HttpCode(201)
async CreateEvent(
    @CurrentUser() user: User,
    @Body() Event
) {
    const newevent = await Event.create().save()
    newevent.user = user
    return newevent.save()
}

@Get('/events')
async getAllEvents() {
    const events = await Event.find()
    return events
}

@Get('/events/:id')
getEvent(
    @Param('id') id: number
) {
    return Event.findOne(id)
}

// @Put('/events/:id')
// async updateEvent(
//     @Param('id') id: number,
//     @Body() update: Partial<Event>
// ) {
//     const events = await Event.findOne(id)
//     if(!events) {
//         throw new NotFoundError('Sorry, this event does not excist')
//     } 
//     else {
//         Event.merge(events, update).save()
//     }
// }

}

