import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}

export const ROUTES: RouteInfo[] = [
	{
		path: "/dashboard",
		title: "Dashboard",
		icon: "nc-chart-bar-32",
		class: "",
	},

	{ path: "/icons", title: "Compras", icon: "nc-shop", class: "" },

	{
		path: "/notifications",
		title: "Ventas",
		icon: "nc-cart-simple",
		class: "",
	},
	{ path: "/table", title: "Inventario", icon: "nc-single-copy-04", class: "" },
	{ path: "/user", title: "Usuarios", icon: "nc-single-02", class: "" },
];

@Component({
	moduleId: module.id,
	selector: "sidebar-cmp",
	templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
	public menuItems: any[];
	ngOnInit() {
		this.menuItems = ROUTES.filter((menuItem) => menuItem);
	}
}
