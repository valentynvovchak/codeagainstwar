import React from "react";

function BigCard({ img }) {
  return (
    <section className="relative pt-16 pb-4 cursor-pointer sm:pb-8">
      <div className="relative h-96 min-w-[300px] sm:h-32 md:h-64 md:px-12">
        <img
          src={img}
          layout="fill"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}

export default BigCard;
