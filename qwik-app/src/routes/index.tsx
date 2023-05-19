import { component$, useSignal, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const Store = useSignal(0);
  return (
    <>
      <div class=" bg-gray-600 text-center text-white">
        <button onClick$={() => Store.value--}>anterior: </button>
        <br />
        <button onClick$={() => Store.value++}>siguiente: </button>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Store.value}.png`}
          alt="pokemon"
          style={{ width: '200px'}}
        />

        <span>{Store}</span>

        <div class="text-center py-10">
          <Link href="/about">about</Link>
        </div>
        <div class="text-center">
          <Link href="/pokemon">pokemons</Link>
        </div>
      </div>
    </>
  );
});

// es qwik xd

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
