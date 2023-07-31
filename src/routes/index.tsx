import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/about/about";
import Landingimg from "~/components/landingimg/landingimg";



export default component$(() => {
  return (
    <>
     <Landingimg/>
     <About/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
