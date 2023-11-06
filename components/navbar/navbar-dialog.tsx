import { Fragment, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { NAVIGATION } from "./constants";

export const NavbarDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="md:hidden btn p-3">
          {isOpen && <XMarkIcon className="w-6 h-6" />}
          {!isOpen && <Bars3Icon className="w-6 h-6" />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal forceMount>
        <Transition
          as={Fragment}
          show={isOpen}
          enter="ease-out duration-150"
          enterFrom="-right-full"
          enterTo="right-0"
          leave="ease-in duration-150"
          leaveFrom="right-0"
          leaveTo="-right-full"
        >
          <Dialog.Content
            className={`fixed z-20 top-0 flex flex-col items-center gap-8 pt-36 
                        w-full h-full bg-neutral-950 text-white`}
            forceMount
          >
            {NAVIGATION.map(({ href, label }, i) => (
              <Dialog.Close key={label} asChild>
                <Link
                  href={href}
                  className={i === NAVIGATION.length - 1 ? "btn" : "link"}
                >
                  {label}
                </Link>
              </Dialog.Close>
            ))}
          </Dialog.Content>
        </Transition>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
