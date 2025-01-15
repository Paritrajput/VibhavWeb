"use client";

import { React, useState } from "react";
import Image from "next/image";

function Work() {
  const [content, setcontent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet qui quas officiis quisquam soluta ullam quia minima voluptatem fugiat mollitia dolorum consectetur ipsum, doloremque molestias est quasi quo rerum in excepturi reiciendis illum. Nobis autem, ullam rerum eveniet impedit molestiae ex hic neque voluptatibus et odit illum suscipit nesciunt maiores explicabo amet."
  );
  const [display, setdisplay] = useState(content.slice(0, 100).concat("..."));
  const [button, setbutton] = useState("Read more");
  const contentCheck = () => {
    if (button === "Read more") {
      setdisplay(content);
      setbutton("Read Less");
    } else {
      setdisplay(content.slice(0, 100).concat("..."));
      setbutton("Read more");
    }
  };

  return (
    <div className="project m-6 w-[80%] mx-auto bg-gradient-to-b from-primary/10 via-background to-background ">
      <div className="heading text-5xl font-bold text-center mb-4">Work</div>
      <div className="m-4 p-4 card-grid flex flex-wrap justify-around max-w-[80%] mx-auto gap-y-14 gap-x-5">
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
        <div className="card gap-4 rounded-3xl border-2 w-64 p-2">
          <Image
            src="/ParthTailor.webp"
            width={270}
            height={100}
            className="rounded-t-3xl hover:w-64 hover:cursor-pointer position-absolute"
          ></Image>
          <div className="title p-3 text-center text-2xl">Event </div>
          <span className="description pl-1 pb-1">{display}</span>
          <button className="text-blue-200" onClick={contentCheck}>
            {button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Work;
