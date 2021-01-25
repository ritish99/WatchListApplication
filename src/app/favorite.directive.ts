import { Directive, HostBinding, Input } from '@angular/core';

//initializing directive
@Directive({
    selector: '[mwFavorite]'
})
//changes is-favorite value to true
export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite = true;
    @Input() set mwFavorite(value) {
        this.isFavorite = value;
    }
}