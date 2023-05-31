"use client";

import { FaTimes } from "react-icons/fa";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import React from "react";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const Contact = () => {
  const { handleSubmit, register, formState } = useForm();
  const { error } = formState;
  const onSubmit = (data) => console.log(data);

  return (
    <div className="z-10 h-screen flex flex-col relative max-w-7xl items-center justify-evenly text-center md:text-left md:flex-row mx-auto p-5">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish">
        Contact
      </h3>

      <div className="flex flex-col space-y-12">
        <h4 className="text-4xl font-bold text-center">
          Her kan du hurtigt komme i kontakt med mig, hvis du vil vide mere!
        </h4>

        <div className="flex flex-col lg:flex-row-reverse">
          <div className="lg:space-y-10 flex lg:flex-col lg:justify-center space-x-[70px] lg:space-x-0 lg:items-start mb-10 px-5 mx-auto">
            <div className="flex items-center justify-center space-x-5">
              <DevicePhoneMobileIcon className="text-themepink h-7 w-7" />
              <p className="text-lg lg:text-2xl font-semibold">+45 23432371</p>
            </div>

            <div className="flex items-center justify-center space-x-5">
              <EnvelopeIcon className="text-themepink h-7 w-7" />
              <p className="text-lg lg:text-2xl font-semibold">
                mathias@helsengren.com
              </p>
            </div>

            {/* <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-themepink h-7 w-7" />
              <p className="text-2xl font-semibold">4219 Timber Oak Drive</p>
            </div> */}
          </div>

          <form
            noValidate
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div
              className="hidden flex p-4 mb-4 text-themepink rounded-md bg-themelight"
              role="alert"
            >
              <BsFillInfoSquareFill className="flex-shrink-0 w-5 h-5" />
              <div className="ml-3 text-sm font-medium">{error}</div>
              <button className="ml-auto -mx-1.5 -my-1.5 bg-themelight text-themepink rounded-lg focus:ring-2 focus:ring-darkturkish p-1.5 hover:bg-[#353d47] inline-flex h-8 w-8">
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            <div className="space-x-2">
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Vær sød og indsætte et navn først",
                  },
                })}
                placeholder="Navn"
                className="contactInfo"
                type="text"
              />

              <input
                {...register(
                  "email",
                  {
                    required: {
                      value: true,
                      message: "Vær sød og indsætte en email adresse først",
                    },
                  },
                  {
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Ikke godkendt email format",
                    },
                  }
                )}
                placeholder="Email"
                className="contactInfo"
                type="email"
              />
            </div>

            <input
              {...register("subject", {
                required: {
                  value: true,
                  message: "Vær sød og indsætte et emne først",
                },
              })}
              placeholder="Emne"
              className="contactInfo"
              type="text"
            />

            <textarea
              {...register("textMsg", {
                required: {
                  value: true,
                  message: "Vær sød og indsætte en besked først",
                },
              })}
              placeholder="Besked..."
              className="contactInfo"
            />

            <button
              type="submit"
              className="text-themeblack/90 text-xl bg-themepink hover:bg-themepink/80 font-bold py-5 rounded inline-flex justify-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//<EnvelopeIcon />
//<MapPinIcon />
