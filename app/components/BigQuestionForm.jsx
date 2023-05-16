import { Link } from "@remix-run/react";
//html decoded
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=deliverydays_facet=Delivery~Within 2 days&st=range

//install link
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=&st=range

//current
//https://www.bestbuy.com/site/searchpage.jsp?id=pcat17071&qp=deliverydays_facet&st=range

//href="?&%3DDelivery~Within%202%20days&"

export default function BigQuestionForm() {
  return (
    <div class="mt-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-bby-blue py-12 px-14 md:grid-cols-2">
      <div class="text-center md:text-left">
        <div class="text-4xl font-extrabold text-white">
          I need it
          <br />
          quick
        </div>
        <div class="mt-2 text-sm text-violet-100">
          Find the fastest installation available
        </div>
        <ul class="mt-6 mb-8 text-sm text-violet-100 md:mb-0">
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
        class="flex flex-col md:ml-8"
        action="https://www.bestbuy.com/site/searchpage.jsp"
        method="GET"
      >
        <input type="hidden" name="id" value="pcat17071" />
        {/* facet 1 + facet 2 */}
        <input
          type="hidden"
          name="qp"
          value="{installdays_facet%3DDelivery%20%2B%20Install~Within%202%20days}"
        />
        <label for="st" className="text-xl font-extrabold text-white mb-2">
          What Appliance are you shopping for?
        </label>
        <select className="mb-5 rounded" name="st" id="st">
          <option>Refrigerator</option>
          <option>Dishwasher</option>
          <option>Range</option>
          <option value="OTR">Over-The-Range Microwave</option>
          <option>Cooktop</option>
        </select>
        <input
          class="mb-4 rounded-md px-4 py-3 font-light"
          min="0"
          placeholder="What is your zip code?"
          type="number"
          required
        />

        <button
          class="flex items-center justify-center rounded-md bg-bby-yellow px-4 py-3 font-semibold shadow-md shadow-blue-700 transition hover:bg-bby-yellow-dk"
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
