import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { SharedArticleService } from '../shared/services/sharedArticle.service';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { EditArticleEffect } from './store/effects/editArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducer } from './store/reducers';

const routes: Routes = [
   { path: 'articles/:slug/edit', component: EditArticleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducer),
    ArticleFormModule,
    LoadingModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
