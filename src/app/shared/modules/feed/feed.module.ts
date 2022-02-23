import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tagList/tagList.module';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from './services/feed.service';
import { GetFeedEffect } from './store/effects/getFeed.effect';
import { reducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
