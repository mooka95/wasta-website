import { ClientService } from './../../../Services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/client';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm:FormGroup;
  client:Client;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.contactForm=new FormGroup({
      'fullName':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phoneNumber':new FormControl('',[Validators.required]),
      'question':new FormControl('',[Validators.required])

    })
  }

  onSubmit(){
   
    this.client=this.contactForm.value;
    this.clientService.saveClientQuestion(this.client).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err)
      }

    );
    this.contactForm.reset();

    

  }

}
