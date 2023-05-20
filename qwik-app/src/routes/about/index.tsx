import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>
        <h1 class="text-center bg-gray-600 p-5 text-white">en el about</h1>
      </div>
      <div class="text-center mt-8">
      <Link href="/">ir a Home</Link>
      </div>
    </>
  );
});
