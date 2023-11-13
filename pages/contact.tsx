import Head from "next/head";
import { ContactForm } from "@/components/organisms";

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
