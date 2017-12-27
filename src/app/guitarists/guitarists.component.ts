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

  add(name: string): void {
    const name_ = name.trim();
    if (!name_) {
      return;
    }
    this.guitaristsService.addGuitarist({name} as Guitarist)
      .subscribe(guitarist => this.guitarists.push(guitarist));
  }

  delete(guitarist: Guitarist): void {
    this.guitarists = this.guitarists.filter(item => item.id !== guitarist.id);
    this.guitaristsService.deleteGuitarist(guitarist).subscribe();
  }

}
