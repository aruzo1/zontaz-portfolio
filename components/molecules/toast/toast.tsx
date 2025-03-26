import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { useClassNameMerged } from "@/hooks";

const types = {
  success: {
    icon: CheckCircleIcon,
    className: {
      bgColor: "bg-green-900",
      textColor: "text-green-300",
      bgColorHover: "hover:bg-green-800",
    },
  },
  fail: {
    icon: XCircleIcon,
    className: {
      bgColor: "bg-red-900",
      textColor: "text-red-300",
      bgColorHover: "hover:bg-red-800",
    },
  },
};

type Props = {
  children: React.ReactNode;
  type?: keyof typeof types;
  open: boolean;
  onOpenChange: () => void;
};

export const Toast = (props: Props) => {
  const { children, open, onOpenChange, type = "success" } = props;

  const toastType = React.useMemo(() => types[type], [type]);
  const Icon = React.useMemo(() => toastType.icon, [toastType]);

  const rootClassName = useClassNameMerged(
    "flex items-center gap-4 p-4 rounded shine-sm shadow-md",
    toastType.className.bgColor,
    toastType.className.textColor
  );

  const closeButtonClassName = useClassNameMerged(
    "btn p-1",
    toastType.className.bgColor,
    toastType.className.bgColorHover
  );

  return (
    <ToastPrimitive.Provider>
      <Transition
        as={React.Fragment}
        show={open}
        enter="ease-out duration-150"
        enterFrom="opacity-0 translate-x-8"
        enterTo="opacity-100 translate-x-0"
        leave="ease-in duration-150"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-8"
      >
        <ToastPrimitive.Root
          className={rootClassName}
          onOpenChange={onOpenChange}
          duration={2000}
          forceMount
        >
          <Icon className="w-6 h-6" />
          <h3>{children}</h3>
          <ToastPrimitive.Close asChild>
            <button
              className={closeButtonClassName}
              aria-label="Close the alert"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </ToastPrimitive.Close>
        </ToastPrimitive.Root>
      </Transition>

      <ToastPrimitive.Viewport className="z-30 fixed top-24 right-8 pl-8 max-w-full" />
    </ToastPrimitive.Provider>
  );
};
