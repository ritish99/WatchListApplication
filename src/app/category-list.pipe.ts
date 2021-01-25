import { Pipe, PipeTransform } from '@angular/core';

//initializing pipe for the list of categories 
@Pipe({
  name: 'categoryList'
})
//acquiring the categories of meida items
export class CategoryListPipe implements PipeTransform {
  transform(mediaItems) {
    const categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    return categories;
  }
}