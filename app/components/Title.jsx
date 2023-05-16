const Title = () => {
  return (
    <div>
      <section class="container mx-auto px-8 py-36 text-center sm:px-12">
        <h1 class="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl">
          Hack Blue 23: Guided Appliance Checkout
        </h1>
        <p class="mb-12 leading-relaxed text-slate-700 dark:text-slate-400">
          Our goal is to optimize the customer Appliance Buying experience
        </p>
        <div class="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a
            href="https://www.bestbuy.com/site/home-appliances/kitchen-appliance-packages/pcmcat302600050005.c?id=pcmcat302600050005"
            target="_blank"
          >
            <button class="rounded-md border-0 bg-blue-700 px-12 py-2 text-base text-white shadow-lg shadow-blue-300 transition hover:bg-blue-600 hover:shadow-violet-400 dark:shadow-blue-900">
              Show me Bundles
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Title;
