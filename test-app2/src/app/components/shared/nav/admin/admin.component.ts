import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  product_items : string[] = [];
  get_all_product_items:Object[] = [];
  userForm!: FormGroup;
  formControls: any;
  user: any={};
  formSubmitted!:boolean;
  constructor(private formBuilder: FormBuilder,private productService:ProductService) { }

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
    this.formSubmitted = true;
      const obj = this.userForm.value;
    localStorage.setItem("product items",JSON.stringify(this.productService.getProducts()));
    this.ngOnInit();
  }
  addUser(user: any){
    console.log(this.productService.getProducts());
    localStorage.setItem("Users",JSON.stringify(user));
  }
}
