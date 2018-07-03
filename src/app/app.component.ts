import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  post = {
    title: 'title',
    isSelected: false
  };

  tweet = {
    isHearted: true,
    totalCount: 100
  }

  onFavoriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('Favorite Changed: ', eventArgs);
  }
}
