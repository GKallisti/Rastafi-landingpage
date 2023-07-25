import { component$, useStylesScoped$ } from "@builder.io/qwik"
import STYLE from "./landingimg.scss?inline";
import { scrollTo } from "~/utils/utils";


export default component$ (() => {
    useStylesScoped$(STYLE);

    return (
        <div class="landingimg" id="home">
        <div class="background">
          <div class="image"></div>
          <div class="overlay"></div>
        </div>
        <div class="content">
          
          <h3 class="name_holder animate__animated animate__fadeInDown animate__delay-1s">
            Rastafi 
          </h3>
          <p class="proffesion animate__animated animate__fadeInUp animate__delay-1s">
                 We make your dream hair come true   </p>
        
           </div>
        <div class="buttoncontainer">
          <button onClick$={() => scrollTo("about")}>
            <i class="fas fa-angle-down"></i>
          </button>
        </div>
      
      </div>
    )
})