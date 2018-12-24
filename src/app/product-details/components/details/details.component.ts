import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Offer } from '@core/models/offer.model';
@Component({
  selector: 'mps-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input()
  productDetails: Offer;
  @Input()
  inCart: any[];
  @Output()
  addItem = new EventEmitter<Offer>();
  @Output()
  removeItem = new EventEmitter<Offer>();

  get id() {
    return this.productDetails.id;
  }

  get category() {
    return this.productDetails.category;
  }

  get categorySlug() {
    return this.productDetails.categorySlug;
  }

  get cover() {
    return this.productDetails.cover;
  }

  get description() {
    return this.productDetails.description;
  }

  get folderFiles() {
    return this.productDetails.folder_files;
  }

  get galleryProduct() {
    return this.productDetails.gallery;
  }

  get linkProduct() {
    return this.productDetails.link;
  }

  get metaDescription() {
    return this.productDetails.meta_description;
  }

  get metaKeywords() {
    return this.productDetails.meta_keywords;
  }

  get sectionId() {
    return this.productDetails.section_id;
  }

  get slugProduct() {
    return this.productDetails.slug;
  }

  get value() {
    return this.productDetails.value;
  }

  get status() {
    return this.productDetails.status;
  }

  get title() {
    return this.productDetails.title;
  }

  get hasCart() {
    return this.productDetails.id && this.inCart.indexOf(this.productDetails.id) > -1;
  }
}
