/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { GridsComponent } from './grids/grids.component';
import { IllustratorDesignComponent } from './illustrator-design/illustrator-design.component';
import { PhotoshopDesignComponent } from './photoshop-design/photoshop-design.component';
import { SketchDesignComponent } from './sketch-design/sketch-design.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';
import { ModalsComponent } from './modals/modals.component';



export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'grids', component: GridsComponent},
    {path: 'illustrator-design', component: IllustratorDesignComponent},
    {path: 'photoshop-design', component: PhotoshopDesignComponent},
    {path: 'sketch-design', component: SketchDesignComponent},
    {path: 'personal-space', component: PersonalSpaceComponent },
    {path: 'modals', component: ModalsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
