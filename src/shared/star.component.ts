<<<<<<< HEAD
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component ({
    selector: 'st-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
   @Input() rating:number;
    starWidth: number;
   @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
   
   ngOnChanges(): void {
        this.starWidth = this.rating *75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit (`The rating' ${this.rating} 'was clicked!`)
        this.starWidth=this.rating *75/5;
    }

=======
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component ({
    selector: 'st-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
   @Input() rating:number;
    starWidth: number;
   @Output() ratingClicked: EventEmitter<string>= new EventEmitter<string>();
   
   ngOnChanges(): void {
        this.starWidth = this.rating *75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit (`The rating' ${this.rating} 'was clicked!`)
        this.starWidth=this.rating *75/5;
    }

>>>>>>> 1e628ebbcf0564cb5fa67c76ae7a5a17fa410d91
}