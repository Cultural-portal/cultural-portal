import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';
import { Observable } from 'rxjs';
import { Authors } from '../../models/author.model';
import { Language } from '../../models/language.enum';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit {
  public authors: Observable<Authors[]>;
  public lng: Language = Language.ru;

  constructor(private authorsService: AuthorsService) { }

  public ngOnInit(): void {
    this.authors = this.authorsService.getAuthors(this.lng);
    this.authorsService.getAuthors(Language.ru);
  }

}
