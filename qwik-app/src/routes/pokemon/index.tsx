import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>
        <span>
            <h1>poken api </h1>
            <Link href="/" class="text-center">Home</Link>
        </span>
  </div>;
});
