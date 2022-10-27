import React from "react";
import Heading from "./Heading";

const socialClass =
  "w-10 h-10 border-2 text-sm flex-colo text-whites mx-2 border-pink rounded-full";

function Subcribe() {
  return (
    <div className="my-12">
      <Heading title="SUBSCRIBE NOW!" />
      <div className="mt-12">
        <div className="flex overflow-hidden bg-subMain border rounded border-whites">
          <input
            type="email"
            className="bg-subMain w-4/6 md:w-5/6 px-6 sm:py-5 py-3 text-pink placeholder:text-lightBlack"
            placeholder="E-mail"
          />
          <button className="w-2/6 md:w-1/6 bg-whites text-pink font-bold text-sm rounded">
            SUBSCRIBE
          </button>
        </div>
        <p className="font-medium text-sm text-center italic text-lightBlack mt-3">
          Subcribe to us and get notfication when new NFTs are dropped real time!
        </p>
        <div className="flex-rows mt-6 pb-12">
          <a href="https://www.linkedin.com/in/timothy-herrera-a1b969b1/" className={socialClass}>
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://web.telegram.org/?legacy=1#/im" className={socialClass}>
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="https://www.facebook.com/teemoherra" className={socialClass}>
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Subcribe;
