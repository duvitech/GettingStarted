import { Injectable } from '@angular/core';
import { IProduct } from './product';




@Injectable()
export class ProductService {
  getProducts(): IProduct[] {
    return [
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
  }
}
