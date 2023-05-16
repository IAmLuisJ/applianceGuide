import React from "react";

const QuickButtons = (props) => {
  return (
    <div>
      <div class="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
        <button class="rounded-lg border-0 bg-slate-900 px-6 py-3 text-base text-white shadow-lg shadow-slate-300 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-orange-300 dark:text-black dark:shadow-sm dark:shadow-orange-300 dark:hover:bg-orange-400 sm:py-2">
          {props.leftButtonText ? props.leftButtonText : "Left Button"}
        </button>
        <button class="rounded-lg border-0 bg-white px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-orange-300 hover:text-slate-900 hover:shadow-orange-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2">
          {props.rightButtonText ? props.leftButtonText : "Right Button"}
        </button>
      </div>
    </div>
  );
};

export default QuickButtons;
