import React from "react";
import Link from "next/link";
import axios from "axios";
import { Button, ReCaptcha, Toast } from "@/components/molecules";
import { useInput } from "@/hooks";

export const ContactForm = () => {
  const { value: name, handler: nameHandler } = useInput("");
  const { value: email, handler: emailHandler } = useInput("");
  const { value: text, handler: textHandler } = useInput("");

  const [token, setToken] = React.useState<null | string>(null);
  const [openToast, setOpenToast] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const submitHandler = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      setLoading(true);
      setError(false);

      axios
        .post("/api/contact", { name, email, text, token })
        .catch(() => setError(true))
        .finally(() => {
          setLoading(false);
          setOpenToast(true);
        });

      nameHandler("");
      emailHandler("");
      textHandler("");
    },
    [nameHandler, emailHandler, textHandler, name, email, text, token]
  );

  return (
    <ReCaptcha.Provider>
      <ReCaptcha.Component onVerify={(tk) => setToken(tk)} />

      <Toast
        type={error ? "fail" : "success"}
        open={openToast}
        onOpenChange={() => setOpenToast(!openToast)}
      >
        {error ? "Failed to send message" : "Successfully sent message"}
      </Toast>

      <section className="relative">
        <form
          className="relative container flex flex-col items-center pt-40 pb-24"
          onSubmit={submitHandler}
        >
          <span className="sm:text-xl font-bold text-primary-600">
            Contact / Quote
          </span>
          <h1 className="mt-4 text-center text-4xl sm:text-5xl md:text-7xl font-bold">
            So, what do you need?
          </h1>

          <div className="grid md:grid-cols-2 w-full max-w-4xl gap-8 mt-12">
            <fieldset className="field">
              <label htmlFor="name" className="label">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                autoComplete="name"
                maxLength={255}
                required
                value={name}
                onChange={(e) => nameHandler(e.target.value)}
              />
            </fieldset>

            <fieldset className="field">
              <label htmlFor="email" className="label">
                E-mail<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input"
                placeholder="Enter your email address"
                autoComplete="email"
                maxLength={255}
                required
                value={email}
                onChange={(e) => emailHandler(e.target.value)}
              />
            </fieldset>

            <fieldset className="field col-span-full">
              <label htmlFor="text" className="label">
                Text<span className="text-red-500">*</span>
              </label>
              <textarea
                id="text"
                name="text"
                className="input min-h-[200px]"
                placeholder="Tell us what do you need"
                maxLength={2500}
                required
                value={text}
                onChange={(e) => textHandler(e.target.value)}
              />
            </fieldset>
          </div>

          <span className="mt-8 text-lg text-center">
            Or email us at{" "}
            <Link href="mailto:contact@zontaz.com" className="link-blue">
              contact@zontaz.com
            </Link>
          </span>

          <Button type="submit" className="mt-8" loading={loading}>
            Send message
          </Button>
        </form>

        <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
        <div
          className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                      to-transparent to-70%`}
        />
      </section>
    </ReCaptcha.Provider>
  );
};
