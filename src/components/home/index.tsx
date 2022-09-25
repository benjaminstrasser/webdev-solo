// @ts-ignore
import {h} from "../../pragma";

export const Home = () => {

    const text = "";
    const number = "";
    const email = "";
    const password = "";

    return (<div>
        <h1>
            Welcome to CatSelect
        </h1>
        <form>
              <label for="text">text:</label>
              <input     alt="Type a text" value={text} type="text" id="text" name="text"></input>

              <label for="number">number:</label>
              <input alt="Type a number" value={number} type="text" id="number" name="number"></input>

              <label for="email">email:</label>
              <input alt="Type a email" value={email} type="text" id="email" name="email"></input>

              <label for="password">password:</label>
              <input alt="Type a password" value={password} type="password" id="password" name="password"></input>
        </form>
        <button onClick={() => validate()}>Validate</button>
    </div>
);
};


function validate() {
    //@ts-ignore
    const text = document.querySelector<HTMLDivElement>('#text').value;
    //@ts-ignore
    const number = document.querySelector<HTMLDivElement>('#number').value;
    //@ts-ignore
    const email = document.querySelector<HTMLDivElement>('#email').value;
    //@ts-ignore
    const password = document.querySelector<HTMLDivElement>('#password').value;

    let error = "";

    if(!number.match('^[0-9]+$')){
        error += "number invalid\n";
    }
    if(text === ""){
        error += "text invalid\n";
    }
    if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        error += "email invalid\n";
    }
    if(password == ""){
        error += "password invalid\n";
    }

    if(error != ""){
        window.alert(error);
    } else {
        window.alert("all valid")
    }


}
