import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'alik-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    public sidebarVisible: boolean = false;

    public avatarMenuItems: MenuItem[] | undefined;

    public constructor (
        public sidebarService: SidebarService,
        public themesService: ThemesService
    ) {}

    public ngOnInit(): void {
        this.avatarMenuItems = [
            {
                label: '{Username}',
                items: [
                    {label: 'Ver perfil'},
                    {label: 'Cerrar sesión'}
                ]
            }
        ]
    }

}
