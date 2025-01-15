import React from "react";
import Image from "next/image";
import { url } from "inspector";

function Team() {
  return (
    <div className="project m-6 w-[80%] mx-auto ">
      <div className="heading text-5xl font-bold text-center mb-4">Year</div>
      <div
        className="m-4 p-4 card-grid flex overflow-x-auto max-w-[90%] mx-auto gap-x-5 whitespace-nowrap"
        style={{ scrollbarWidth: 0 }}
      >
        <div
          className="card gap-4 rounded-3xl border-2 w-64 p-2"
          style={{ flexShrink: 0 }}
        >
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl bg-gray-800">
            Name{" "}
          </div>
        </div>

        <div
          className="card gap-4 rounded-3xl border-2 w-64 p-2"
          style={{ flexShrink: 0 }}
        >
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl bg-gray-800">
            Name{" "}
          </div>
        </div>
        <div
          className="card gap-4 rounded-3xl border-2 w-64 p-2"
          style={{ flexShrink: 0 }}
        >
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl bg-gray-800">
            Name{" "}
          </div>
        </div>
        <div
          className="card gap-4 rounded-3xl border-2 w-64 p-2"
          style={{ flexShrink: 0 }}
        >
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl bg-gray-800">
            Name{" "}
          </div>
        </div>
        <div
          className="card  rounded-3xl border-2 w-64 p-2 "
          style={{ flexShrink: 0 }}
        >
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer absolute"
          ></Image>
          <div className="title bg-transparent p-3 text-center text-2xl bg-gray-800">
            Name{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
