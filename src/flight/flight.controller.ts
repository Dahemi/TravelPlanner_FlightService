import { Controller, Get,Query } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flights')
export class FlightController {

    constructor(private readonly flightService: FlightService){}

    @Get('search')
    async searchFlights(
        @Query('from') from:string,
        @Query('to') to:string,

    ){
        return this.flightService.searchFlights(from,to);
    }

    @Get('cheapest')
    async cheapestFlight(
        @Query('from') from:string,
        @Query('to') to:string,
    ){
        return this.flightService.cheapestFlight(from,to);
    }
}
