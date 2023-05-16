import React from "react";

const QuickButtons = (props) => {
  return (
    <div>
      <div class="flex flex-col space-y-3 md:flex-row md:space-x-2 md:space-y-0">
        <a href={props.leftButtonLink ? props.leftButtonLink : "/"}>
          <button class="rounded-md border-0 bg-blue-700 px-12 py-2 text-base text-white shadow-lg shadow-blue-300 transition hover:bg-blue-600 hover:shadow-blue-400 dark:shadow-blue-900">
            {props.leftButtonText ? props.leftButtonText : "Left Button"}
          </button>
        </a>
        <a href={props.rightButtonLink ? props.rightButtonLink : "/"}></a>
        <button class="rounded-lg border-0 bg-yellow-300 px-6 py-3 text-base text-slate-900 shadow-lg shadow-slate-100 transition hover:bg-yellow-300 hover:text-slate-900 hover:shadow-yellow-300 dark:bg-slate-700 dark:text-slate-300 dark:shadow-sm dark:shadow-slate-800 dark:hover:bg-slate-600 sm:py-2">
          {props.rightButtonText ? props.leftButtonText : "Right Button"}
        </button>
      </div>
    </div>
  );
};

export default QuickButtons;
