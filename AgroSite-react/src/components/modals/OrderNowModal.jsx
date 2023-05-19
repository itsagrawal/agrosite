import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useRef } from "react";
import DeliverySVG from "../../assets/Delivery.svg";
import useLocation from "../../hooks/useLocation";
import { Timestamp, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { useAppContext } from "../../firebase/ApplicationContext";
import { orderDoc } from "../../firebase/dbReferences";

export default function MyModal({ product }) {
  let [isOpen, setIsOpen] = useState(false);
  const locs = useLocation();
  const formRef = useRef();
  const { user } = useAppContext();

  function submitHandler() {
    let oid = v4();
    console.log(product);
    let selectLoc = formRef.current.location.value;
    let selectQuant = formRef.current.quantity.value;
    let contactNo = formRef.current.contactNo.value;
    if (!contactNo || contactNo.length !== 10) {
      alert("Enter Mobile Number");
    }
    {
      let mailAddress = formRef.current.mailAddress.value;
      if (!user) {
        alert("Please Sign In");
      } else if (product.quantity < selectQuant) {
        alert("Couldn't Place your Order, Stock is low");
      } else {
        let obj = {
          amount: product.price,
          buyerName: user.displayName,
          location: selectLoc,
          quantity: selectQuant,
          productId: product.id,
          sellerName: product.sellerName,
          status: "Pending",
          uid: user.uid,
          dateCreated: Timestamp.now(),
          sid: product.sid,
          contactNo,
          mailAddress,
        };
        setDoc(orderDoc(oid), obj);
      }
      closeModal();
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="">
        <button
          className="bg-[#d36938] w-full py-1 px-2 rounded shadow"
          onClick={openModal}
        >
          Order Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4"
                  >
                    Complete Order Details
                  </Dialog.Title>
                  <div className="mt-2 grid md:grid-cols-2 gap-y-4">
                    <div className="">
                      <img
                        src={DeliverySVG}
                        alt=""
                        className="md:h-40 h-24 mx-auto"
                      />
                    </div>
                    <div className="">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                        className="grid gap-y-4"
                        ref={formRef}
                      >
                        <div className="grid md:grid-cols-2">
                          <label htmlFor="location">Select Location</label>
                          <select
                            name="location"
                            id="location"
                            className="border rounded px-2"
                            required
                          >
                            {locs.map((v) => {
                              return (
                                <option value={v} key={v4()}>
                                  {v}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="grid md:grid-cols-2">
                          <label htmlFor="quantity">Select Quantity</label>
                          <input
                            type="number"
                            min={0}
                            step={1}
                            name="quantity"
                            id="quantity"
                            className="border rounded px-2"
                            defaultValue={1}
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-2">
                          <label htmlFor="contactNo">Enter Contact No.</label>
                          <input
                            type="text"
                            name="contactNo"
                            id="contactNo"
                            className="border rounded px-2"
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-2">
                          <label htmlFor="mailAddress">
                            Enter Mail Address
                          </label>
                          <input
                            type="email"
                            name="mailAddress"
                            id="mailAddress"
                            className="border rounded px-2"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-x-2 justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submitHandler}
                    >
                      Order
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
