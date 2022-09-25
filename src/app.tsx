// @ts-ignore
import {h} from "./pragma";
import {render} from "./main";
import {Home} from "./components/home"
import {About} from "./components/about"
import {Content} from "./components/content"

export const App = async (content) => (
    <div style="margin: auto">
        <div className="flex">
            <button onClick={() => render(Home())} style="margin: 20px">Home</button>
            <button onClick={() => render(About())} style="margin: 20px">About</button>
            <button onClick={async () => render(await Content())} style="margin: 20px">Content</button>
        </div>
        <div>
            {content || "No Content"}
        </div>
    </div>
);
