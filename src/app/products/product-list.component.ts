import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    productTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2017',
            'description': '15 gallon capacity',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://openclipart.org/download/241265/schubkarre.svg'
        },
        {
            'productId': 3,
            'productName': 'Hammer',
            'productCode': 'TRX-0015',
            'releaseDate': 'June 18, 2012',
            'description': 'Standard Hammer',
            'price': 9.99,
            'starRating': 3.2,
            'imageUrl': 'https://openclipart.org/image/2400px/svg_to_png/14360/mystica-Hammer-Silhouette.png'
        }
    ];

    constructor() {
      this.filteredProducts = this.products;
      this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
      this.productTitle = 'Product List: ' + message;
    }

    ngOnInit(): void {
      console.log('In OnInit');
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
