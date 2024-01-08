import React from "react";
import {
  ChatAlt2Icon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PhotographIcon,
} from "@heroicons/react/solid";

const BENEFITS = [
  {
    title: "Use online",
    text: "Use it online without installing any software",
    icon: <GlobeAltIcon className="h-6 w-6" />,
  },
  {
    title: "Image to text",
    text: "Convert images to editable text",
    icon: <PhotographIcon className="h-6 w-6" />,
  },
  {
    title: "Convert PDF to DOC",
    text: "Convert PDF files to editable Word documents",
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  {
    title: "Works with iOS and Android",
    text: "Works on both iOS and Android devices",
    icon: <ChatAlt2Icon className="h-6 w-6" />,
  },
  {
    title: "Secure conversion",
    text: "Secure conversion with encryption and automatic deletion of uploaded files",
    icon: <LockClosedIcon className="h-6 w-6" />,
  },
  {
    title: "Free tool",
    text: "Completely free to use without any hidden fees or limits",
    icon: <PhotographIcon className="h-6 w-6" />,
  },
];

type BenefitsProps = {
  title: string;
  text: string;
  icon: JSX.Element;
};

const Benefit = ({ title, text, icon }: BenefitsProps) => {
  return (
    <div>
      <div className="flex items-center">
        {icon} 
        <h1 className="ml-2 text-lg font-medium text-gray-900">{title}</h1>
      </div>
      <p className="mt-2 text-base text-gray-500">{text}</p>
    </div>
  );
};

const Benefits = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Benefits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Use OCR Online?
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {BENEFITS.map(({ title, text, icon }) => (
              <div className="my-4">
                <Benefit title={title} text={text} icon={icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
