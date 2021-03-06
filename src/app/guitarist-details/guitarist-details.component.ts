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
    this.location.back();
  }

  removeGroup(idx: number): void {
    this.guitarist.groups = this.guitarist.groups.filter((item, index) =>
      index !== idx
    );
    this.guitaristService.updateUserGroups(this.guitarist).subscribe();
  }

  addGroup(value: string) {
    if (value && value.trim()) {
      this.guitarist.groups = this.guitarist.groups && this.guitarist.groups.length ?
        [...this.guitarist.groups, value] : [value];
      this.guitaristService.updateUserGroups(this.guitarist).subscribe();
    }
  }

  save(): void {
    this.guitaristService.updateGuitarist(this.guitarist)
      .subscribe(() => this.goBack(),
        error => console.log('', error));
  }
}
