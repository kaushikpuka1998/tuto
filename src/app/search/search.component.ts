import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchvalue : String = "macbook"

  findingdata(eventdata:Event)
  {
    this.searchvalue = (<HTMLInputElement>eventdata.target).value
    //console.log(this.searchvalue);
  }

}
