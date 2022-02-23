import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BackendErrorMessagesModule } from '../shared/modules/backendErrorMessages/backendErrorMessages.module';
import { SettingsComponent } from './settings/settings.component';
import { reducer } from './store/reducers';

const routes: Routes = [{ path: 'settings', component: SettingsComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('settings', reducer),
    RouterModule.forChild(routes),
    BackendErrorMessagesModule
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
