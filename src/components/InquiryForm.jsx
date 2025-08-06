import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "../components/SpinnerContext";
import { companyDetails } from "../data/constant";
import line from "../assets/images/line.png";

const InquiryForm = () => {
  const { setSpinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  // handle form submit click
  const handleFormSubmit = async (values) => {
    setSpinner(true);

    var emailBody = "Name: " + values.name + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phone + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    // Construct the request payload
    var payload = {
      to: companyDetails.email,
      subject: "You have a new message from VIHAANG AI GLOBAL SERVICES PVT LTD",
      body: emailBody,
      name:"VIHAANG AI GLOBAL"
    };

    await fetch("https://send-mail-redirect-boostmysites.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };
  return (
    <div className="wrapper">
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto bg-white p-5 sm:p-8 shadow-large shadow-black/10 rounded-lg relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-5">
          <div className="flex flex-col gap-3">
            <div data-aos="fade-up" className="flex items-center gap-3">
              <img src={line} alt="line" className="w-[3rem]" />
              <h6 className="font-medium text-secondary">
                Book an Appointment
              </h6>
            </div>
            <h2 data-aos="fade-up" className="heading-2 capitalize bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p data-aos="fade-up" className="max-w-[35rem] lg:max-w-max">
              At VIHAANG AI GLOBAL SERVICES PVT LTD, we’re dedicated to providing technology solutions that
              transform businesses. Contact us today to discuss how our
              expertise can support your business goals.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            data-aos="fade-up"
            className="flex flex-col gap-1"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Name
                </label>
                <input
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Full Name"
                  {...register("name", {
                    required: "Full name is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Full name is required";
                      }
                    },
                  })}
                />
                <small className="error-message">{errors.name?.message}</small>
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Email
                </label>
                <input
                  type="email"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Entered email is invalid",
                    },
                  })}
                />
                <small className="error-message">{errors.email?.message}</small>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[6-9]\d{9}$/i,
                      message: "Entered phone number is invalid",
                    },
                  })}
                />
                <small className="error-message">{errors.phone?.message}</small>
              </div>

              <div className="flex flex-col">
                <label htmlFor="" className="text-sm ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                  placeholder="Enter Subject"
                  {...register("subject", {
                    required: "Subject is required",
                    validate: (val) => {
                      if (val.trim() !== "") {
                        return true;
                      } else {
                        return "Subject is required";
                      }
                    },
                  })}
                />
                <small className="error-message">
                  {errors.subject?.message}
                </small>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm ml-1">
                Message
              </label>
              <textarea
                type="text"
                className="border outline-none border-secondary bg-black/5 rounded-sm p-2"
                placeholder="Enter Message"
                rows="4"
                {...register("message", {
                  required: "Message is required",
                  validate: (val) => {
                    if (val.trim() !== "") {
                      return true;
                    } else {
                      return "Message is required";
                    }
                  },
                })}
              />
              <small className="error-message">{errors.message?.message}</small>
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="px-4 py-3 text-white bg-secondary rounded-sm w-full max-w-[50%]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
