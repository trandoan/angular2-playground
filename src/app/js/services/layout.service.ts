import { Injectable } from '@angular/core';

import { NavItem } from '../models/nav-item.model';

@Injectable()
export class LayoutService {
	findAllTopNavItems(): Promise<NavItem[]> {
		return Promise.resolve([new NavItem('Home', '#'), new NavItem('Settings', '#'), new NavItem('Profile', '#'), new NavItem('Help', '#')]);
	}
}