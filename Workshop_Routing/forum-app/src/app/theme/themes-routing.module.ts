import { RouterModule, Routes } from '@angular/router';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesComponent
            },
            {
                path: ':id',
                component: ThemeComponent
            }
        ]
    },
    {
        path: 'add-theme',
        component: AddThemeComponent
    }
];

export const ThemesRoutingModule = RouterModule.forChild(routes);