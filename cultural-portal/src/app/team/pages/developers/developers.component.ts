import { Component, OnInit } from '@angular/core';
import { Developer } from '../../models/developer.model';
import { DevelopersService } from '../../services/developers.service';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

  constructor(public developersService: DevelopersService) { }

  public ngOnInit(): void {

  }

}
