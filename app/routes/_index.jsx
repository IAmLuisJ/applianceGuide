import Header from "../components/Header";

export const meta = () => {
  return [{ title: "Guided Appliance Checkout" }];
};

export default function Index() {
  return (
    <div>
      <Header />
      <section class="container mx-auto px-8 py-36 text-center sm:px-12">
  <h1
    class="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl"
  >
    Hack Blue 23: Guided Appliance Checkout
  </h1>
  <p class="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
    Our goal is to optimize the customer Appliance Buying experience
  </p>
  <div
    class="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
  >
    <button
      class="rounded-md border-0 bg-violet-500 px-12 py-2 text-base text-white shadow-lg shadow-violet-300 transition hover:bg-violet-600 hover:shadow-violet-400 dark:shadow-violet-900"
    >
      Answer Questions
    </button>
    <button
      class="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600"
    >
      Show me Bundles
    </button>
  </div>
</section>
    </div>
  );
}
