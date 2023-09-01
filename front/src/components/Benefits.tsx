import React from "react";
import {
  ChatAlt2Icon,
  DocumentTextIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PhotographIcon,
} from "@heroicons/react/solid";

// TODO use an array for all these texts. Change this. 
const use_online = `Use it online without installing any software`;
const img_to_txt = `Convert images to editable text`;
const pdf_to_doc = `Convert PDF files to editable Word documents`;
const iOS_Android = `Works on both iOS and Android devices`;
const secure_conversion = `Secure conversion with encryption and automatic deletion of uploaded files`;
const free_tool = `Completely free to use without any hidden fees or limits`;

const benefits = [
  {
    title: "Use online",
    text: use_online,
    icon: <GlobeAltIcon className="h-6 w-6" />,
  },
  {
    title: "Image to text",
    text: img_to_txt,
    icon: <PhotographIcon className="h-6 w-6" />,
  },
  {
    title: "Convert PDF to DOC",
    text: pdf_to_doc,
    icon: <DocumentTextIcon className="h-6 w-6" />,
  },
  {
    title: "Works with iOS and Android",
    text: iOS_Android,
    icon: <ChatAlt2Icon className="h-6 w-6" />,
  },
  {
    title: "Secure conversion",
    text: secure_conversion,
    icon: <LockClosedIcon className="h-6 w-6" />,
  },
  {
    title: "Free tool",
    text: free_tool,
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
            Why Use Online OCR?
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {benefits.map(({ title, text, icon }) => (
              <Benefit title={title} text={text} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
