import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <di class="text-center py-5">
      <h1 class="text-center bg-gray-500">welcome to about</h1>
      <button class="text-center py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
        <Link href="/" class="mt-">
          home
        </Link>
      </button>
    </di>
  );
});
