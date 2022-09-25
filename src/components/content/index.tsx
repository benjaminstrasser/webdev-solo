// @ts-ignore
import {h} from "../../pragma";
import {render} from "../../main";
import {getJoke} from "../../libs/norris.service";
import {addJoke, getJokes, removeJoke} from "../../state/state";

export const Content = async () => {
 let joke = (await getJoke()).value;

 let jokes = getJokes().map(joke => {
    return (
    <div>
            <div>{joke}</div>
            <button onClick={() => removeJokeAndRerender(joke)}>Remove</button>
    </div>
    )
 })
return (
    <div>
        <div>
            <div>Joke:</div>
                <div>
                    {joke}
                    <button onClick={async () => addJokeAndRerender(joke)}>Add to Favorites</button>
                    <button onClick={async () => render(await Content())}>Refresh</button>
                </div>
         </div>
         <hr></hr>
         <div>
            {...jokes}
         </div>
    </div>
)
}

async function addJokeAndRerender(joke: string) {
    addJoke(joke);
    render(await Content());
}

async function removeJokeAndRerender(joke: string) {
    removeJoke(joke);
    render(await Content());
}

