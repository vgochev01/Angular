import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/content.service';
import { ITheme } from 'src/app/shared/interface';
import { IUser } from 'src/app/shared/interface/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  themes: ITheme[] | undefined;
  userId = this.userService.user?.userId;

  constructor(
    private contentService: ContentService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.contentService.loadThemes().subscribe(themes => this.themes = themes);
  }


}
