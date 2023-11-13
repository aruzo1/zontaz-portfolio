import Head from "next/head";
import { ContactForm } from "@/components/organisms";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact - Zontaz</title>
        <meta
          name="description"
          content="Get in touch with Zontaz! Questions or ready to discuss your website? We're here for you."
        />
      </Head>

      <ContactForm />
    </>
  );
};

export default ContactPage;
