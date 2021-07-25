import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { IPost } from 'src/app/shared/interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit{

  @Input() posts: IPost[] | undefined;
  @Input() title: string = '';

  constructor() { }

  ngOnInit(){
  
  }
}
