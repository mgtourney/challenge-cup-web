import { goto } from "$app/navigation";
import { writable } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export enum Pages {
	Home = '/',
	Rules = '/rules',
	Teams = '/teams',
	Staff = '/staff',
	MapPools = '/mappools'
}

export let currentPage = writable<Pages>(Pages.Home);

export function redirect(page: Pages) {
	currentPage.set(page);
	goto(page);
}