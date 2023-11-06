import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-30 top-8 left-0 right-0 pointer-events-auto">
      <nav className="container flex items-center justify-between">
        <Link href="/">
          <Image
            alt="logo"
            src="/logo.png"
            height={25}
            width={100}
            quality={100}
          />
        </Link>

        <ul className="hidden md:flex gap-16 font-bold text-white">
          <li>
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/showcase" className="link">
              Showcase
            </Link>
          </li>
          <li>
            <Link href="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>

        <Link href="/quotation" className="hidden md:block btn">
          Quotation
        </Link>

        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <button className="md:hidden btn p-3">
              {isOpen && <XMarkIcon className="w-6 h-6" />}
              {!isOpen && <Bars3Icon className="w-6 h-6" />}
            </button>
          </Dialog.Trigger>

          <Dialog.Portal forceMount>
            <Transition.Root show={isOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-30"
                leave="ease-in duration-150"
                leaveFrom="opacity-30"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay
                  className={`fixed z-10 inset-0 bg-black`}
                  forceMount
                />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="ease-out duration-150"
                enterFrom="-right-full"
                enterTo="right-0"
                leave="ease-in duration-150"
                leaveFrom="right-0"
                leaveTo="-right-full"
              >
                <Dialog.Content
                  className={`fixed z-20 top-0 flex flex-col items-center gap-8 
                              pt-36 w-full h-full bg-neutral-950 
                              text-white`}
                  forceMount
                >
                  <Dialog.Close asChild>
                    <Link href="/" className="link">
                      Home
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/showcase" className="link">
                      Showcase
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/contact" className="link">
                      Contact
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close asChild>
                    <Link href="/quotation" className="btn">
                      Quotation
                    </Link>
                  </Dialog.Close>
                </Dialog.Content>
              </Transition.Child>
            </Transition.Root>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </div>
  );
};
