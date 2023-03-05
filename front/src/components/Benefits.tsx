import React from "react";

const use_online = `put text here...`;
const img_to_txt = `put text here...`;
const pdf_to_doc = `put text here...`;
const iOS_Android = `put text here...`;
const secure_conversion = `put text here...`;
const free_tool = `put text here...`;

const benefits = [
  { title: "Use online", text: use_online, icon: "icon url here" },
  { title: "Image to text", text: img_to_txt, icon: "icon url here" },
  { title: "Convert PDF to DOC", text: pdf_to_doc, icon: "icon url here" },
  { title: "Works with iOS and Android", text: iOS_Android, icon: "icon url here" },
  { title: "Secure conversion", text: secure_conversion, icon: "icon url here" },
  { title: "Free tool", text: free_tool, icon: "icon url here" },
];

type BenefitsProps = {
  title: string;
  text: string;
  icon: string; //TODO Replace with: JSX.Element or ReactNode Heroicons!
};

const Benefit = ({ title, text, icon }: BenefitsProps) => {
  return (
    <div>
      <h1><i>{icon}</i>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

const Benefits = () => {
  return (
    <div>
      {benefits.map(({ title, text, icon }) => (
        <Benefit 
          title={title} 
          text={text}
          icon={icon}
        />
      ))}
    </div>
  )
}

export default Benefits;
