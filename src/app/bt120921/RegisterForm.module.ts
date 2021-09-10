import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterFormComponent } from './RegisterForm.component';


@NgModule({
    declarations: [RegisterFormComponent],
    imports: [CommonModule,FormsModule],
    exports: [RegisterFormComponent],
})
export class RegisterFormModule { }
