import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { EditArticleStateInterface } from '../types/editArticleState.inerface';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from './actions/editArticle.action';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action';

const initialState: EditArticleStateInterface = {
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
  article: null,
};

const editArticleReducer = createReducer(
  initialState,
  on(
    editArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    editArticleSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    editArticleFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),

  on(
    getArticleAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),

  on(
    getArticleSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),

  on(
    getArticleFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(routerNavigationAction, (): EditArticleStateInterface => initialState)
);

export function reducer(state: EditArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
