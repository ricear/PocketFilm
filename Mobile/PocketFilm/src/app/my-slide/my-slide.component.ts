import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-slide',
  templateUrl: './my-slide.component.html',
  styleUrls: ['./my-slide.component.scss'],
})
export class MySlideComponent implements OnInit {

  @Input("slides") slides: string[] = [];  
  @Input("pageNumber") pageNumber: number = 5;  
  @Output("slideClick") slideClick = new EventEmitter<number>();

  mySlideOptions;  
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {  
    this.mySlideOptions = {  
      loop: false,  
      autoplay: false,  
      initialSlide: 0,  
      pager: false,  
      slidesPerView: this.pageNumber,  
      paginationHide: true,  
      paginationClickable: true  
    };  
  }  
  
  onClick(index) {  
    this.selectedIndex = index;  
    this.slideClick.emit(index);  
  } 

}
