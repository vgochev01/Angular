import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { IPost } from './shared/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recentPosts: IPost[] | undefined;
  constructor(private contentService: ContentService){
    this.fetchPosts();
  }

  fetchPosts(): void{
    this.recentPosts = undefined;
    this.contentService.loadPosts(5).subscribe(posts => this.recentPosts = posts);
  }
}
