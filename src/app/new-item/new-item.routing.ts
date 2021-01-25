import { Routes, RouterModule, Router } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form.component';

//routing using the media-item-form.component
const newItemRoutes: Routes = [
    { path: '', component: MediaItemFormComponent }
];

export const newItemRouting = RouterModule.forChild(newItemRoutes);