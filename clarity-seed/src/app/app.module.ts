import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TablesComponent } from './tables/tables.component';
import { FormsComponent } from './forms/forms.component';
import { SnippetPostComponent } from './snippet-post/snippet-post.component';
import { IllustratorDesignComponent } from './illustrator-design/illustrator-design.component';
import { VisualDesignPostComponent } from './visual-design-post/visual-design-post.component';
import { PhotoshopDesignComponent } from './photoshop-design/photoshop-design.component';
import { SketchDesignComponent } from './sketch-design/sketch-design.component';
import { PersonalSpaceComponent } from './personal-space/personal-space.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TablesComponent,
        FormsComponent,
        SnippetPostComponent,
        IllustratorDesignComponent,
        VisualDesignPostComponent,
        PhotoshopDesignComponent,
        SketchDesignComponent,
        PersonalSpaceComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
