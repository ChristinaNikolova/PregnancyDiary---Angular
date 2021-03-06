import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsersService } from 'src/app/core/services/user/users.service';
import IFavArticle from '../../shared/models/article/IFavArticle';

@Component({
  selector: 'app-favourite-articles',
  templateUrl: './favourite-articles.component.html',
  styleUrls: ['./favourite-articles.component.css'],
})
export class FavouriteArticlesComponent implements OnInit {
  favArticles$: Observable<IFavArticle[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.favArticles$ = this.usersService.getFavouriteArticles();
  }
}
