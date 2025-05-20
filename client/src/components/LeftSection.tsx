import React from "react";

function LeftSection() {
  return (
    <div className="bg-gradient-to-r from-[#624985] via-[#815EEA] to-[#927fce] w-full lg:w-3/4 h-auto lg:h-full rounded-2xl">
      <div className="flex flex-col items-center justify-center p-6 lg:p-10 h-full text-center">
        <h1 className="text-white text-3xl lg:text-4xl font-extrabold">
          Community Help
        </h1>
        <h4 className="text-white font-normal pt-2 text-lg">
         Connecting communities for a better tomorrow.
        </h4>
        <p className="text-white mt-6 text-sm lg:text-base max-w-xl">
          Everyone needs help sometimes. Here, you can post your requirements
          openly and see how others are stepping up to support their
          communities. Whether it’s something big or small, there’s always
          someone willing to lend a hand. Let’s build something better —
          together.
        </p>
        <button className="mt-6 text-white border-2 px-6 py-2 rounded-2xl hover:bg-white hover:text-[#815EEA]">
          About Us
        </button>
      </div>
    </div>
  );
}

export default LeftSection;
