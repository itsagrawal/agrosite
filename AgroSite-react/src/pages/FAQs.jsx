import { Helmet } from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import useFaqs from "../hooks/useFaqs";
import { Disclosure } from "@headlessui/react";
import { v4 } from "uuid";
import FullPageLoader from "../components/Loader/FullPageLoader";
import FeatureSeller from "../components/feature/FeatureSeller";

export default function FAQs() {
  const fqs = useFaqs();
  return (
    <>
      <Helmet>
        <title>Agrosite - FAQs</title>
      </Helmet>
      {!!fqs ? (
        <>
          <Navbar />
          <div className="h-24"></div>
          <FeatureSeller />
          <div className="max-w-4xl md:mx-auto mx-4 mb-10">
            <h2 className="text-gray-500 font-semibold italic px-2 mb-4">
              FAQ's
            </h2>
            {fqs.map((v) => {
              return (
                <Disclosure key={v4()}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-orange-100 px-4 py-2 text-left text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                        <span>{v.question}</span>
                        <i
                          className={`fa fa-caret-down ${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-orange-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-2 pb-2 text-sm text-gray-500">
                        {v.answer}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              );
            })}
          </div>
          <Footer />
        </>
      ) : (
        <FullPageLoader />
      )}
    </>
  );
}
