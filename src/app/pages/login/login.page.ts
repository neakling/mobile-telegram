import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
    private username = '';
    private password = '';

    constructor(private router: Router) {}

    ngOnInit() {
    }

    submitForm() {
        if(this.username == 'admin' && this.password == 'admin') {
            this.router.navigate(['../home']);
        } else if(this.username == '1' && this.password == '1') {
            this.router.navigate(['../home']);
        }
    }
}

