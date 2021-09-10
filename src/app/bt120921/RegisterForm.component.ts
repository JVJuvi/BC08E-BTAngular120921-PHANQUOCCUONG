import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-resisterform',
    template: `
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h1>Register form</h1>
                </div>
                <div class="card-body">
                    <div class="form-group">
                        <h5>Email</h5>
                        <input type="text" class="form-control" [(ngModel)]="email" />
                    </div>
                    <div class="form-group">
                        <h5>Full name</h5>
                        <input type="text" class="form-control" #fn />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success" (click)="eventBiding(fn.value)">Submit</button>
                    </div>
                    <h5>Email: {{email}} </h5>
                    <h5>Full name: {{fullName}} </h5>
                </div>
            </div>
        </div>
    `
})

export class RegisterFormComponent implements OnInit {
    email:string = '';
    fullName:string = '';
    eventBiding(newfullName:string) {
        this.fullName = newfullName
    }

    constructor() { }

    ngOnInit() { }
}