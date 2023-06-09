import { Link } from "@remix-run/react";
//html decoded
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=deliverydays_facet=Delivery~Within 2 days&st=range

//install link
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=&st=range

//current
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=deliverydays_facet&st=range

//href="?&%3DDelivery~Within%202%20days&"

export default function Appliancequestionform() {
  return (
    <div class="my-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-bby-blue py-12 px-14 md:grid-cols-2">
      <div class="text-center md:text-left">
        <div class="text-4xl font-extrabold text-white">
          What are you
          <br />
          looking for?
        </div>
        <div class="mt-2 text-sm text-violet-100">
          Answer a few quick questions so we can provide our best recommendation
        </div>
        <ul class="mt-4 mb-8 text-sm text-violet-100 md:mb-0">
          <li class="flex items-center justify-center md:justify-start">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="mr-3"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
              ></path>
            </svg>
            Available product
          </li>
          <li class="flex items-center justify-center md:justify-start">
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="mr-3"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m5 12l5 5L20 7"
              ></path>
            </svg>
            Fast installation service
          </li>
        </ul>
      </div>
      <form
        id="questions"
        class="flex flex-col md:ml-8 text-white"
        action="https://www.bestbuy.com/site/searchpage.jsp"
        method="GET"
      >
        <input type="hidden" name="id" value="pcat17071" />
        <input
          type="hidden"
          name="qp"
          value="installdays_facet=Delivery + Install~Within 2 days"
        />
        <input type="hidden" name="st" value="range" />

        <fieldset>
          <legend className="text-sm font-semibold leading-6">Fuel Type</legend>
          <div className="ml-4">
            <div className="flex items-center gap-x-3">
              <input
                id="fuel_type_electric"
                name="fuel_type"
                type="radio"
                value="fuel_type_electric"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              ></input>
              <label
                htmlFor="fuel_type_electric"
                className="block text-sm font-medium leading-6"
              >
                Electric
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="fuel_type_gas"
                name="fuel_type"
                type="radio"
                value="fuel_type_gas"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              ></input>
              <label
                htmlFor="fuel_type_gas"
                className="block text-sm font-medium leading-6"
              >
                Gas
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="fuel_type_lp"
                name="fuel_type"
                type="radio"
                value="fuel_type_lp"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              ></input>
              <label
                htmlFor="fuel_type_lp"
                className="block text-sm font-medium leading-6"
              >
                Liquid Propane
              </label>
            </div>
          </div>
        </fieldset>

        <div className="mt-3 space-y-6">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="install" />
            <label htmlFor="install">I want installation.</label>
          </div>
        </div>

        <div className="mt-1 space-y-6">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="haulaway" />
            <label htmlFor="haulaway">
              I want my old appliances hauled away.
            </label>
          </div>
        </div>

        <div className="mt-1 space-y-6">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="Color" />
            <label htmlFor="Color">I have color preferences.</label>
          </div>
        </div>

        <div className="mt-1 space-y-6">
          <div className="flex items-center gap-x-3">
            <input type="checkbox" name="Brand" />
            <label htmlFor="Brand">I have brand preferences.</label>
          </div>
        </div>

        <input
          className="mt-6 mb-4 rounded-md px-4 py-3 font-light"
          min="0"
          placeholder="What is your zip code?"
          type="number"
        />
        <button
          className="flex items-center justify-center rounded-md bg-bby-yellow px-4 py-3 text-black font-semibold shadow-md shadow-violet-700 transition hover:bg-bby-yellow-dk"
          type="submit"
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
            class="mr-2"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6"
            ></path>
          </svg>
          Find the best options
        </button>
      </form>
    </div>
  );
}
