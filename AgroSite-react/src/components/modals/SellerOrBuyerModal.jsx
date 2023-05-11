import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAppContext } from "../../firebase/ApplicationContext";
import FeatureSeller from "../feature/FeatureSeller";
import { useNavigate } from "react-router-dom";

export default function SellerOrBuyerModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="select-none relative z-50"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full md:max-w-4xl max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold text-gray-900"
                >
                  Are you a seller.
                </Dialog.Title>
                <div className="mt-2">
                  <FeatureSeller />
                </div>

                <div className="mt-4 flex gap-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 items-center gap-x-2"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 items-center gap-x-2"
                    onClick={() => {
                      navigate("/seller");
                      setIsOpen(false);
                    }}
                  >
                    Seller Portal{" "}
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
