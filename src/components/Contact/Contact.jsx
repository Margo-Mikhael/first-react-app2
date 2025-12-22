import React from "react";
import Header from "../Header/Header";

export default function Contact() {
  return (
    <div className="grow flex flex-col gap-8 items-center justify-center min-h-[620px]">
      <Header text="contact component" isDark={true} />

      <form className="w-full max-w-3xl px-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Age"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
          />
        </div>
        <div className="mb-6">
          <textarea
            placeholder="Message"
            rows="5"
            maxLength="500"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white py-2 rounded-lg font-semibold hover:bg-secondary/80"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
