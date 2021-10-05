import { ClientService } from './../../../Services/client.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/client';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit,OnDestroy {
 
  clients:Client;
  private subscription:Subscription

  constructor(private clientService:ClientService) { }


  ngOnInit(): void {
    this.subscription=this.clientService.getAllClients().subscribe(
      (response)=>{
        console.log(response)
     
        this.clients=response['clients'].filter(  client=>{return client.subscribedService.length>0});

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
