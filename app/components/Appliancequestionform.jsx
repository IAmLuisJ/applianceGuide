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
    <div class="mt-8 grid grid-cols-1 items-center gap-4 rounded-lg bg-violet-500 py-12 px-14 md:grid-cols-2">
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
        <input
          type="hidden"
          name="qp"
          value="installdays_facet=Delivery + Install~Within 2 days"
        />
        <input type="hidden" name="st" value="range" />
        <input
          class="mb-4 rounded-md px-4 py-3 font-light"
          min="0"
          placeholder="What is your zip code?"
          type="number"
        />
        <input type="checkbox" name="install" />
        <label for="install" >I want installation.
            </label> 
            <p>Fuel Type</p>
        <input type="radio" id="ftypeh" name="fuel_type" value="HTML"/>
        <label for="ftype">HTML</label><br></br>
        <input type="radio" id="ftypec" name="fuel_type" value="CSS"/>
        <label for="css">CSS</label><br></br>
        <input type="radio" id="javasftypej" name="fuel_type" value="JavaScript"/>
        <label for="javascript">JavaScript</label>   
        <input type="checkbox" name="Color" />
        <label for="install" >I have color preferences.
            </label> 
            <input type="checkbox" name="Brand" />
        <label for="install" >I have brand preferences.
            </label> 
            <input type="checkbox" name="haulaway" />
        <label for="install" >I want my old appliances hauled away.
            </label> 
        <button
          class="flex items-center justify-center rounded-md bg-violet-900 px-4 py-3 font-semibold text-white shadow-md shadow-violet-700 transition hover:bg-slate-900"
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
