import React from "react";

function BigCard({ img }) {
  return (
    <section className="relative pt-16 pb-4 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
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
