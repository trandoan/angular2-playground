import {Component, OnInit} from '@angular/core';

import {LayoutService} from './services/layout.service';
import {NavItem} from './models/nav-item.model';

@Component({
	selector: 'top-nav',
	templateUrl: '../template/layout/top-nav.component.html',
	providers: [LayoutService]
})
export class TopNavComponent implements OnInit {
	navItems: NavItem[];
	selectedNavItem: NavItem;

	constructor(private layoutService: LayoutService) {}

	ngOnInit() {
		this.layoutService.findAllTopNavItems().then(navItems => this.navItems = navItems);
	}

	onSelect(item: NavItem) {
		this.selectedNavItem = item;
		console.log(this.selectedNavItem.label);
	}
}