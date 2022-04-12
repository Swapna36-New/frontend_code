import { Component, OnInit } from '@angular/core';
import { ProductserviceService} from '../productservice.service';
import { Product } from '../Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  products : Product[] = [];

  constructor(private productService:ProductserviceService) { }

  ngOnInit(): void {
    this.reloadProductData();
  }

  reloadProductData(){
    this.productService.getProductsList().subscribe(
      data=>{
        this.products = data;
      }
    );
  }

}
