import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent{
    productTitle:string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] =[
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2017",
            "description": "15 gallon capacity",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/download/241265/schubkarre.svg"
        },
        {
            "productId": 3,
            "productName": "Hammer",
            "productCode": "TRX-0015",
            "releaseDate": "June 18, 2012",
            "description": "Standard Hammer",
            "price": 9.99,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/14360/mystica-Hammer-Silhouette.png"
        }
    ];

    
    toggleImage():void {
        this.showImage = !this.showImage;
    }
}