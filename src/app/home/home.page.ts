import { Component } from '@angular/core';
import {TypeModels} from '../TypeModels/Models';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  isProcessing: boolean;
  myApiResponseData: TypeModels.StarWarsApiResponse;
  message: string;
  url: string;
  nextUrl : string;
  previousUrl: string;
  ngOnInit()
  {
    this.isProcessing = false;
    this.myApiResponseData = <TypeModels.StarWarsApiResponse>{}; // new StarWarsApiResponse();
    this.message = "Bienvenido a mi app";
    this.url = "https://swapi.dev/api/people/";
    this.callApi();
  }

  callApi ()
  {
    this.isProcessing = true;
    fetch(this.url)
    .then(response=> response.json())
    .then((data: TypeModels.StarWarsApiResponse )  => {

      this.isProcessing = false;
      this.myApiResponseData =  data;
      this.nextUrl = data.next;
      this.previousUrl = data.previous;
    });
  }

  previous()
  {
    this.url = this.previousUrl;
    this.callApi();
  }

  next()
  {
    this.url =  this.nextUrl;
    this.callApi();
    
  }

}
