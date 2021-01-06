import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { ActivatedRoute} from '@angular/router';
import { isBuffer } from 'util';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  medium = '';
  mediaItems: MediaItem[];

  constructor(
    private mediaItemService: MediaItemService, 
    private activedRoute: ActivatedRoute){}


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

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
    .subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}