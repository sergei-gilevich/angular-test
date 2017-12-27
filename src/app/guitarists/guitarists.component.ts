import { Component, OnInit } from '@angular/core';
import { Guitarist } from '../guitarist';
import { GuitaristService } from '../guitarist.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-guitarists',
  templateUrl: './guitarists.component.html',
  styleUrls: ['./guitarists.component.css']
})
export class GuitaristsComponent implements OnInit {
  constructor(private guitaristsService: GuitaristService, private messageService: MessageService) { }

  ngOnInit () {
    this.getGuitarists();
  }

  selectedGuitarist: Guitarist;

  guitarists: Guitarist[];

  getGuitarists(): void {
    this.guitaristsService.getGuitarists()
      .subscribe(guitarists => this.guitarists = guitarists);
  }

  onSelect(guitarist: Guitarist) {
    if (this.selectedGuitarist && this.selectedGuitarist.id === guitarist.id) {
      return this.selectedGuitarist = null;
    }
    return this.selectedGuitarist = guitarist;
  }

  handleDeleteClick(index: number): void {
    console.log(this);
    this.guitarist.groups = this.guitarist.groups.filter((item, idx) => idx !== index);
    this.messageService.add('Remove group');
  }

  handleRemove(index: number): void {
    this.guitarists = this.guitarists.filter(
      (item: Guitarist, idx: number) => idx !== index).map(
        (item: Guitarist, idx: number): Guitarist => {
          return {
            ...item,
            id: idx + 1
          };
      });
    this.selectedGuitarist = null;
    this.messageService.add('Remove guitarist');
  }

}
