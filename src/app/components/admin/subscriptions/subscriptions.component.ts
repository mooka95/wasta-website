import { ClientService } from './../../../Services/client.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/client';
import { Subscription } from 'rxjs';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit,OnDestroy {
  countries = COUNTRIES;
  clients:Client;
  private subscription:Subscription

  constructor(private clientService:ClientService) { }


  ngOnInit(): void {
    this.subscription=this.clientService.getAllClients().subscribe(
      (response)=>{
        console.log(response)
        this.clients=response['clients'];

      },
      (err)=>{
        console.log(err);
      }
    )
   
  }

  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

}
