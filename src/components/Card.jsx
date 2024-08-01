import React from "react";
import Link from "next/link";

const Card = ({name,href}) => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
          <p class="text-gray-700 text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <Link
            href={href}
            className="mt-10 block w-full rounded-full bg-gray-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-gray-800"
          >
            Get access
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Card;
