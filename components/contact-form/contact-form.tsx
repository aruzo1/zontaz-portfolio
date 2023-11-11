import Link from "next/link";

export const ContactForm = () => {
  return (
    <section>
      <form className="relative container flex flex-col items-center pt-48 pb-32">
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

      <div className="-z-20 absolute inset-0 bg-topography-pattern opacity-5" />
      <div
        className={`-z-10 absolute inset-0 bg-gradient-to-t from-gray-950 
                    to-transparent to-70%`}
      />
    </section>
  );
};
