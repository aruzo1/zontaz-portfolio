import React from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

type ReCaptchaComponentProps = {
  onVerify: (token: string) => void;
};

export const ReCaptchaComponent = ({ onVerify }: ReCaptchaComponentProps) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  React.useEffect(() => {
    const verify = () => {
      if (!executeRecaptcha) return;

      executeRecaptcha().then((value) => onVerify(value));
    };

    const verifyInterval = setInterval(verify, 1000);

    return () => clearInterval(verifyInterval);
  }, [executeRecaptcha, onVerify]);

  return null;
};

type ReCaptchaProviderProps = Omit<
  React.ComponentPropsWithoutRef<typeof GoogleReCaptchaProvider>,
  "reCaptchaKey"
>;

export const ReCaptchaProvider = (props: ReCaptchaProviderProps) => {
  const { children, ...rest } = props;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      container={{ parameters: { theme: "dark" } }}
      useEnterprise
      {...rest}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};
