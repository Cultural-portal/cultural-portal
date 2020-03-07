import { Component, OnInit } from '@angular/core';
import { RandomAuthorService } from 'src/app/core/services/random-author.service';

@Component({
  selector: 'app-author-of-day',
  templateUrl: './author-of-day.component.html',
  styleUrls: ['./author-of-day.component.scss']
})
export class AuthorOfDayComponent implements OnInit {

  public authorName: string = 'Maksim Tank';   // когда будут все авторы, подгружать через сервис данные будем
  public realName: string = 'Skurko Evgeniy Ivanovich';
  public img: string = '';
  public birth: string = new Date(-1807920000).toDateString();
  public death: string = new Date(807753600).toDateString();

  constructor(private randomAuthorService: RandomAuthorService) { }

  ngOnInit(): void {
    // this.randomAuthorService.randomAuthor();
  }

}