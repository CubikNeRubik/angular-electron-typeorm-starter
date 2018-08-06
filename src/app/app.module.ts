import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule} from '@angular/material';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
