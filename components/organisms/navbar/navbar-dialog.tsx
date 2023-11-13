import { Fragment, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Socials } from "@/components/molecules";
import { NAVIGATION } from ".";

export const NavbarDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className="lg:hidden ml-auto text-white">
          {isOpen && <XMarkIcon className="w-8 h-8" />}
          {!isOpen && <Bars3Icon className="w-8 h-8" />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal forceMount>
        <Transition show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-black/50 fixed inset-0" forceMount />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="-top-full"
            enterTo="top-0"
            leave="ease-in duration-300"
            leaveFrom="top-0"
            leaveTo="-top-full"
          >
            <Dialog.Content
              className={`lg:hidden fixed z-10 top-0 inset-x-0 flex flex-col 
                          mt-16 border-b border-gray-800 bg-gray-950 
                          text-white`}
              forceMount
            >
              {NAVIGATION.map(({ href, label }) => (
                <Dialog.Close key={label} asChild>
                  <Link
                    href={href}
                    className="link py-4 px-8 border-b border-gray-800"
                  >
                    {label}
                  </Link>
                </Dialog.Close>
              ))}

              <div className="flex flex-wrap gap-4 py-4 px-8">
                <Dialog.Close asChild>
                  <Socials />
                </Dialog.Close>

                <Dialog.Close asChild>
                  <Link href="/contact" className="btn-primary">
                    Get a quote
                    <span className="font-normal ml-1">- it&apos;s free</span>
                  </Link>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Transition.Child>
        </Transition>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
