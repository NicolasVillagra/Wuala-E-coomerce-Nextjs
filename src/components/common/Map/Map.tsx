import React from "react";

const Map = () => {
  return (
    <div className="w-full p-6 sm:p-10 gap-8 sm:gap-11 mt-2 flex flex-col">
      <div className="flex flex-col gap-10">
        <h1 className="text-black text-5xl font-extrabold text-center">
          Location
        </h1>
        <div className="relative w-full h-96">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10765.67911766619!2d-64.1858!3d-31.4250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d67c22723c6a5%3A0x8088e5e37a9e7c5!2sPlaza%20Espa%C3%B1a%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
