export async function getJoke() {
    return (await fetch("https://api.chucknorris.io/jokes/random")).json();

}
