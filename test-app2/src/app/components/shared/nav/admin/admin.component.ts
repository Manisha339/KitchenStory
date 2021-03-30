import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userForm!: FormGroup;
  formBuilder: any;
  formControls: any;
  productId: any;
  constructor() { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productDesc: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required],
      
    });
    this.formControls = this.userForm.controls;
  }
  onSubmit(){
    localStorage.setItem("Id","123");
  }
}
