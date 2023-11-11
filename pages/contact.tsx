import Head from "next/head";
import { ContactForm } from "@/components";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Zontaz</title>
      </Head>

      <ContactForm />
    </>
  );
};

export default ContactPage;
