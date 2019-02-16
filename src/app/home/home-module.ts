import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { SignOnComponent } from './signon/signon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
@NgModule({
    declarations: [
        SignInComponent, SignOnComponent
    ],
    imports: [ReactiveFormsModule, CommonModule, VMessageModule]
})
export class HomeModule { }