import { $, component$, useSignal, useStore } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const Store = useSignal(1);
  const changeStore = $((value: number) => {
    if (Store.value + value <= 0) return;

    Store.value += value;
  });
  return (
    <>
      <div class="card w-96 bg-gray-600 shadow-xl text-white p-10 mt-8 m-36">
        <div class="card-body">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Store.value}.png`}
            alt="pokemon"
            style={{ width: "300px" }}
          />
          <p class="text-center">Click to see your favorite pokemon!</p>
        </div>
        <div class="text-center gap-5 mt-3">
          <button
            onClick$={() => changeStore(+1)}
            class="btn btn-active gap-14 text-center py-4 px-3"
          >
            siguiente:
          </button>
          <div class="p-9">
            <button
              onClick$={() => changeStore(-1)}
              class="btn btn-active py-4 px-3"
            >
              anterior:
            </button>
          </div>
        </div>

        <div class="text-center">
          <span>{Store}</span>
        </div>

        <div class="text-center p-3">
          <Link href="/">Home</Link>
        </div>
      </div>
    </>
  );
});
