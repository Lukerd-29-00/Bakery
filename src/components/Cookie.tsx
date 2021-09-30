import Cookies from "universal-cookie";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
interface noprops {

}
export function Cookie(props: noprops): JSX.Element{
    async function setCookie(): Promise<void>{
        const cookies = new Cookies();
        cookies.set("test","this is a test");
      }
    
      function viewCookie(): void{
        const cookies = new Cookies();
        if(cookies.get("test")){
          alert("You have a cookie!");
        }
        else{
          alert("You are cookieless!");
        }
      }
      return (
          <section>
            <div>
                Click this button to get a cookie! (This was created using the example in the readme of the universal-cookie github repository.)
            </div>
            <div>
                <button id="cookie" onClick = {setCookie}/>
            </div>
            <br/>
            <div>
                <Button onClick={viewCookie}>see if cookie is present</Button>
            </div>
            <footer>
                <p><a href="https://lukerd-29-00.github.io/Portfolio/">Homepage</a></p>
                <p><a href="https://github.com/Lukerd-29-00/Bakery/tree/source/src/components">Source code</a></p>
                <p><a href="https://github.com/Lukerd-29-00/Portfolio">Main repository</a></p>
            </footer>
          </section>
 
      )



}