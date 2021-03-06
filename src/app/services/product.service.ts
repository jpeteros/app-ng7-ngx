import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService{
    private BASE_URL : string = "http://localhost:3000/api/product/";
    constructor(
        private httpClient : HttpClient
    ){}

    findAll() {
        return this.httpClient.get(this.BASE_URL + 'findAll')
            .toPromise()
            .then(res => res as Product[]);
    }

    find(id: string) {
        return this.httpClient.get(this.BASE_URL + 'find/' +  id)
        .toPromise()
        .then(res => res as Product);
    }

    createProduct(product: Product) {
        return this.httpClient.post(this.BASE_URL + 'createProduct', product);
    }

    deleteProduct(id: string) {
        return this.httpClient.get(this.BASE_URL + 'deleteProduct/' +  id)
        .toPromise()
        .then(res => res);
    }


}
