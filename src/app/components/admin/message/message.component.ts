import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  clients:Client;
  private subscription:Subscription

  constructor(private clientService:ClientService) { }


  ngOnInit(): void {
    this.subscription=this.clientService.getAllClients().subscribe(
      (response)=>{
        console.log(response)
        this.clients=response['clients'].filter(  client=>{return client.question.length>0});
        console.log(this.clients)

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
