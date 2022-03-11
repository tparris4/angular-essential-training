import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;

  name = 'The Redemption';
  wasWatched() {
    return true;
  }
  onDelete() {
    console.log('deleted')
  }
}
