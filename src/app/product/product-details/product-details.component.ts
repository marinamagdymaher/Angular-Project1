import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowProductService } from 'src/app/shared/services/product/show-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  item: any;
  selectedPrd: any;
  productDetails?: any[];
  constructor(
    private route: ActivatedRoute,
    private showPrdServices: ShowProductService
  ) {}
  ngOnInit(): void {
    this.viewPrdDetails();
  }

  viewPrdDetails() {
    const idUrl =Number( this.route.snapshot.paramMap.get('pId'));
    this.selectedPrd = this.showPrdServices.getAllProduct()?.filter(item => item.id == idUrl);
    // console.log(this.selectedPrd)
  }

}
