import { Component, OnInit, Input } from '@angular/core';
import { Guitarist } from '../guitarist';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GuitaristService} from '../guitarist.service';

@Component({
  selector: 'app-guitarist-details',
  templateUrl: './guitarist-details.component.html',
  styleUrls: ['./guitarist-details.component.css']
})
export class GuitaristDetailsComponent implements OnInit {
  @Input() guitarist: Guitarist;
  @Input() inputFun: Function;
  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location,
    private guitaristService: GuitaristService,
  ) { }

  ngOnInit() {
    this.getGuitarist();
  }

  getGuitarist(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guitaristService.getGuitarist(id)
      .subscribe(guitarist => this.guitarist = guitarist);
  }

  goBack(): void {
    console.log('location', this.location);
    this.location.back();
  }

}
