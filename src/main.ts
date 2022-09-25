import { App } from './app';
import {Home} from "./components/home";

export async function render(content: HTMLElement) {
    const app = document.querySelector<HTMLDivElement>('#app')!;
    const child = app.children.item(0);
    if (child) {
        app.removeChild(child);
    }
    app.append(await App(content));
}

render(Home()).then()
