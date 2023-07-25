import { component$, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import STYLE from "./header.scss?inline";
import { scrollTo } from "~/utils/utils";



export default component$(() => {
    useStylesScoped$(STYLE);
    const activeNav = useSignal("home");
   
  const handleNavClick = $((elementId: string) => {
    scrollTo(elementId);
    activeNav.value = elementId;
  });

    return (
        <header class='navbar' >
            <div class='container'>
                <div class='navbarinner'>
                    <div class='logo'>
                    <a href='#'><img src='/images/logo.png' alt="logo" width={150} height={50} /> </a>
                    </div>
            <div class="menu">
              <ul>
                <li class={{ current: activeNav.value === "home" }}>
                  <button onclick$={() => handleNavClick("home")}>Home</button>
                </li>
                <li class={{ current: activeNav.value === "about" }}>
                  <button onclick$={() => handleNavClick("about")}>
                    About us
                  </button>
                </li>
                <li class={{ current: activeNav.value === "services" }}>
                  <button onclick$={() => handleNavClick("services")}>
                    Servicies
                  </button>
                </li>
                <li class={{ current: activeNav.value === "portfolio" }}>
                  <button onclick$={() => handleNavClick("portfolio")}>
                    Galery
                  </button>
                </li>
                <li class={{ current: activeNav.value === "contact" }}>
                  <button onclick$={() => handleNavClick("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
                </div>

            </div>
        </header>
    );
})