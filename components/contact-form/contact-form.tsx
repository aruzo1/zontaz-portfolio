import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useInput } from "@/hooks";

const ReCaptcha = ({ onVerify }: { onVerify: (token: string) => void }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    const verify = () => {
      if (!executeRecaptcha) return;

      executeRecaptcha().then((value) => onVerify(value));
    };

    const verifyInterval = setInterval(verify, 3000);

    return () => clearInterval(verifyInterval);
  }, [executeRecaptcha, onVerify]);

  return null;
};

export const ContactForm = () => {
  const { value: name, handler: nameHandler } = useInput("");
  const { value: email, handler: emailHandler } = useInput("");
  const { value: message, handler: messageHandler } = useInput("");

  const [token, setToken] = useState<null | string>(null);

  const submitHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      axios.post("/api/contact", { name, email, message, token });

      nameHandler("");
      emailHandler("");
      messageHandler("");
    },
    [nameHandler, emailHandler, messageHandler, name, email, message, token]
  );

  return (
    <section>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
        container={{ parameters: { theme: "dark" } }}
      >
        <form
          className="relative container flex flex-col items-center pt-48 pb-32"
          onSubmit={submitHandler}
        >
          <ReCaptcha onVerify={(t) => setToken(t)} />

          <span className="sm:text-xl font-bold text-primary-600">
            Contact / Quote
          </span>
          <h2 className="mt-4 text-center text-4xl sm:text-5xl md:text-7xl font-bold">
            So, what do you need?
          </h2>

          <div className="grid md:grid-cols-2 w-full max-w-5xl gap-8 mt-12">
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
                required
                value={email}
                onChange={(e) => emailHandler(e.target.value)}
              />
            </fieldset>

            <fieldset className="field col-span-full">
              <label htmlFor="message" className="label">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="input min-h-[200px]"
                placeholder="Tell us what do you need"
                required
                value={message}
                onChange={(e) => messageHandler(e.target.value)}
              />
            </fieldset>
          </div>

          <span className="text-lg mt-8">
            Or email us at{" "}
            <Link href="mailto:contact@zontaz.com" className="link-blue">
              contact@zontaz.com
            </Link>
          </span>

          <button className="btn mt-8">Send message</button>
        </form>
      </GoogleReCaptchaProvider>

      <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
      <div
        className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                    to-transparent to-70%`}
      />
    </section>
  );
};
