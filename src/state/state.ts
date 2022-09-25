
const jokes: string[] = []

export function addJoke(joke: string) {
    jokes.push(joke);
}

export function removeJoke(joke: string) {
    const index = jokes.indexOf(joke);
    jokes.splice(index, 1);
}

export function getJokes() : string[]{
    return jokes;
}
