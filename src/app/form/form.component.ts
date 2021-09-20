import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-counter',
    template: `<h1>Form</h1>`
})
export class FormComponent {

    public form: FormGroup;

    constructor(
        private fb: FormBuilder
    ) {
        this.form = fb.group({
            login: ['', Validators.required],
            email: ['']
        })
    }
}
