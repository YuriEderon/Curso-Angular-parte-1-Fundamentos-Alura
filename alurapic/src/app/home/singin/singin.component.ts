import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './singin.component.html'
})
export class SingInComponent implements OnInit{
    loginForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder){
        
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username:['flavio', Validators.required],
            password:['123', Validators.required]
        });
    }
}