import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { ActivatedRoute} from '@angular/router';
import { isBuffer } from 'util';
//initializing component
@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  //initializing medium variable and mediaItems array to store data
  medium = '';
  mediaItems: MediaItem[];

  constructor(
    private mediaItemService: MediaItemService, 
    private activedRoute: ActivatedRoute){}

  //on init the function will get all the mediums, change the medium to lowercase and pass into the get method
  ngOnInit() {
    this.activedRoute.paramMap.
    subscribe(paramMap =>{
      let medium = paramMap.get('medium');
      if(medium.toLocaleLowerCase() == 'all'){
        medium= '';
      }
      this.getMediaItems(medium);
    });
  }

  //deletes media item by using this.mediaItemService.delete
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
    .subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }

  //gets medium and stores into the array by using function this.mediaItemService.get
  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}