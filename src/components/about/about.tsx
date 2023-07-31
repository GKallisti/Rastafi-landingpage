import { $,  component$, useStylesScoped$ }   from "@builder.io/qwik";
import STYLES from "./about.scss?inline";

export default component$(() => {
    useStylesScoped$(STYLES);
    return (
        <div id="about" class="about">
            <div class="container">
                <div class="maintittle">
                    <h3>ABOUT US</h3>
                </div>
            <div class="aboutinner">
                

            </div>
            </div>
            
        </div>
        
    )
})