import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
@NgModule({
    declarations: [
        AppComponent,
    ],
    bootstrap: [],
    imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        RouterOutlet,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        HeaderComponent
    ],
    providers: [],
    exports: [RouterModule]
})
export class Appmodule { }
