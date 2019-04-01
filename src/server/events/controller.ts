import { JsonController, Post, Body, HttpCode, Get, Param, Put, NotFoundError} from 'routing-controllers'
import Event from './entity'

@JsonController()
export default class EventsController {

@Post('/events')
@HttpCode(201)
CreateEvent(
    @Body() event: Event
) {
    return event.save()
}

@Get('/events')
async getAllEvents() {
    const events = await Event.find()
    return events
    // return ads.map(ad => {
    //  //const {title, description} = ad
    //   // return {title, description}
    //   return ad

   // } 
//)
}

@Get('/events/:id')
getEvent(
    @Param('id') id: number
) {
    return Event.findOne(id)
}

@Put('/events/:id')
async updateEvent(
    @Param('id') id: number,
    @Body() update: Partial<Event>
) {
    const events = await Event.findOne(id)
    if(!events) {
        throw new NotFoundError('Sorry, this ad does not excist')
    } 
    else {
        Event.merge(events, update).save()
    }
}



    // @Authorized()
    // @Put('/pages/:id')
    // async updatePage(
    //     @Param('id') id: number,
    //     @Body() update: Partial<Page>
    // ) { const pages = await Page.findOne(id)
    //     if(!pages) {
    //         throw new NotFoundError('Sorry, this page does not excist')
    //     }
    //     else {
    //         Page.merge(pages, update).save()
    //     }
    // }
}

