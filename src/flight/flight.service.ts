import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightService {
    private flights = [
    { id: 1, from: 'CMB', to: 'BKK', departTime: '2025-12-10T09:00', arriveTime: '2025-12-10T13:00', price: 450 },
    { id: 2, from: 'CMB', to: 'BKK', departTime: '2025-12-10T15:00', arriveTime: '2025-12-10T21:00', price: 400 },
    { id: 3, from: 'CMB', to: 'SIN', departTime: '2025-12-10T12:00', arriveTime: '2025-12-10T16:00', price: 350 },
  ];

  async searchFlights(from: string, to: string){
    const delay = 800;
    await new Promise(res => setTimeout(res,delay));

    const results = this.flights.filter(f => f.from == from && f.to == to);
    return{flights:results};
  }

  async cheapestFlight(from:string, to:string){
    const delay = 800;
    await new Promise(res => setTimeout(res,delay));

    const results = this.flights.filter(f => f.from == from && f.to == to);
    if(results.length == 0) return {flight: null};
    const cheapest = results.reduce((a,b) => (a.price <= b.price ? a: b));
    return {flight:cheapest};
  }
}
