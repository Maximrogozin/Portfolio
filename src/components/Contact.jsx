// import React from "react";
// import { useLanguage } from "./hooks/UseLang";

// const Contact = () => {
//   const { language } = useLanguage();
//   return (
//     <div className="bg-white border-t border-gray-400  dark:border-gray-900 items-center justify-center dark:bg-gray-900">
//       <div id="contact" className="max-w-[768px] m-auto  p-4 py-16 ">
//         <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-white">
//           {language === "en" ? "Contact" : "Связаться со мной"}
//         </h1>
//         <form
//           action="https://getform.io/f/12b23fc2-c6bb-480d-afc8-f17727682f28"
//           method="POST"
//           encType="multipart/form-data"
//         >
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
//               {language === "en" ? "Name" : "Ваше имя"}
//             </label>
//             <input
//               className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300"
//               type="name"
//               name="name"
//             />
//           </div>
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
//               {language === "en" ? "Email" : "Ваша электронная почта"}
//             </label>
//             <input
//               className="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300 "
//               type="email"
//               name="email"
//             />
//           </div>
//           <div className="flex flex-col py-2">
//             <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
//               {language === "en" ? "Message" : " Ваше сообщение"}
//             </label>
//             <textarea
//               className="border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-300"
//               rows="10"
//               name="message"
//             />
//           </div>
//           <button className="text-[#214ecf] dark:text-gray-800 dark:bg-white border-2 text-xl hover:bg-[#bbd2ff] hover:border-[#bbd2ff] border-[#214ecf] dark:border-white rounded-full px-6 py-2 mx-auto mt-5 mb-8 flex items-center duration-300">
//             {language === "en" ? "Send" : "Отправить"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { useLanguage } from "./hooks/UseLang";
import { useForm } from "react-hook-form";
import TextField from "./input/TextField";

const Contact = () => {
  const { language } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await fetch("https://getform.io/f/12b23fc2-c6bb-480d-afc8-f17727682f28", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();
  };
  return (
    <div className="bg-white border-t border-gray-400  dark:border-gray-900 items-center justify-center dark:bg-gray-900">
      <div id="contact" className="max-w-[768px] m-auto  p-4 py-16 ">
        <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-white">
          {language === "en" ? "Contact" : "Связаться со мной"}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
              {language === "en" ? "Name" : "Ваше имя"}
            </label>
            <TextField
              register={register}
              name="name"
              style="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300"
              rules={{
                required:
                  language === "en"
                    ? "This field is required."
                    : "Это поле обязательно для заполнения",
                minLength: {
                  value: 3,
                  message:
                    language === "en"
                      ? "Field must contain at least 3 characters."
                      : "Поле должно содержать минимум 3 символа",
                },
              }}
              error={errors.name}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
              {language === "en" ? "Email" : "Ваша электронная почта"}
            </label>
            <TextField
              register={register}
              name="email"
              type="email"
              style="border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300"
              rules={{
                required:
                  language === "en"
                    ? "This field is required."
                    : "Это поле обязательно для заполнения",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message:
                    language === "en"
                      ? "Invalid email format."
                      : "Неверный формат электронной почты",
                },
              }}
              error={errors.email}
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="uppercase text-sm py-2 dark:text-white text-[#001b5e]">
              {language === "en" ? "Message" : " Ваше сообщение"}
            </label>
            <textarea
              {...register("message", {
                required:
                  language === "en"
                    ? "This field is required."
                    : "Это поле обязательно для заполнения",
                minLength: {
                  value: 6,
                  message:
                    language === "en"
                      ? "Field must contain at least 6 characters."
                      : "Поле должно содержать минимум 6 символа",
                },
              })}
              className="border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-300"
              rows="10"
              name="message"
            />
            {errors.message && (
              <span className="text-[#DE6636] text-xs pl-2 pt-0.5">
                {errors.message.message}
              </span>
            )}
          </div>
          <button className="text-[#214ecf] dark:text-gray-800 dark:bg-white border-2 text-xl hover:bg-[#bbd2ff] hover:border-[#bbd2ff] border-[#214ecf] dark:border-white rounded-full px-6 py-2 mx-auto mt-5 mb-8 flex items-center duration-300">
            {language === "en" ? "Send" : "Отправить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
