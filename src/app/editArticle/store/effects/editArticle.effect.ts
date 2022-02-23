import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { EditArticleService } from '../../services/editArticle.service';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from '../actions/editArticle.action';

@Injectable()
export class EditArticleEffect {
  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap(({ slug, articleInput }) => {
        return this.editArtricleService.updateArticle(slug, articleInput).pipe(
          map((article: ArticleInterface) => {
            return editArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              editArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterEdit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private editArtricleService: EditArticleService
  ) {}
}
