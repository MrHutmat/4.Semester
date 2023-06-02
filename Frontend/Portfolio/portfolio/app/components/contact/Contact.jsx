"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import React from "react";
import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Alert from "../Alert";

const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => console.log(formData);

  return (
    <div className="z-10 h-screen flex flex-col relative max-w-7xl items-center justify-evenly text-center md:text-left md:flex-row mx-auto p-5">
      <motion.h3
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
        }}
        className="absolute top-24 uppercase tracking-[20px] text-2xl text-darkturkish"
      >
        Contact
      </motion.h3>

      <div className="flex flex-col space-y-12">
        <motion.h4
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
            times: [0, 0.2, 0.8, 1],
            ease: "easeOut",
          }}
          whileInView={{
            opacity: [0, 0.1, 0.8, 1],
          }}
          className="text-4xl font-bold text-center"
        >
          Her kan du hurtigt komme i kontakt med mig, hvis du vil vide mere!
        </motion.h4>

        <div className="flex flex-col lg:flex-row-reverse">
          <motion.div
            initial={{
              opacity: 0,
              x: 300,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              //ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="lg:space-y-10 flex lg:flex-col lg:justify-center space-x-[70px] lg:space-x-0 lg:items-start mb-10 px-5 mx-auto"
          >
            <div className="flex items-center justify-center space-x-5 hover:animate-pulse">
              <DevicePhoneMobileIcon className="text-themepink h-7 w-7" />
              <p className="text-lg lg:text-2xl font-semibold">+45 23432371</p>
            </div>

            <div className="flex items-center justify-center space-x-5 hover:animate-pulse">
              <EnvelopeIcon className="text-themepink h-7 w-7" />
              <p className="text-lg lg:text-2xl font-semibold">
                mathias@helsengren.com
              </p>
            </div>

            {/* <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-themepink h-7 w-7" />
              <p className="text-2xl font-semibold">4219 Timber Oak Drive</p>
            </div> */}
          </motion.div>

          <motion.form
            initial={{
              opacity: 0,
              x: -300,
            }}
            transition={{
              duration: 0.5,

              //ease: "easeIn",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            noValidate
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-x-2">
              <input
                {...register("name", {
                  required: {
                    value: +true,
                    message: "Vær sød og indsætte et navn først",
                  },
                })}
                placeholder="Navn"
                className="contactInfo"
                type="text"
              />

              <input
                {...register("email", {
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Ikke godkendt email format",
                  },

                  required: {
                    value: +true,
                    message: "Vær sød og indsætte en email adresse først",
                  },
                })}
                placeholder="Email"
                className="contactInfo"
                type="email"
              />
            </div>
            <input
              {...register("subject", {
                required: {
                  value: +true,
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
                  value: +true,
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
            {errors.email && (
              <Alert keyId={"emailKey"} setAlert={errors.email?.message} />
            )}
            {errors.name && (
              <Alert keyId={"nameKey"} setAlert={errors.name?.message} />
            )}
            {errors.subject && (
              <Alert keyId={"subjectKey"} setAlert={errors.subject?.message} />
            )}
            {errors.textMsg && (
              <Alert keyId={"textMsgKey"} setAlert={errors.textMsg?.message} />
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

//<EnvelopeIcon />
//<MapPinIcon />
