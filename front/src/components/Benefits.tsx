import React from "react";

const benefits = [
  { title: "use online", text: "paragraph", icon: "icon url here" },
  { title: "image to text", text: "paragraph", icon: "icon url here" },
  { title: "convert PDF to DOC", text: "paragraph", icon: "icon url here" },
  { title: "works with iOS and Android", text: "paragraph", icon: "icon url here" },
  { title: "secure conversion", text: "paragraph", icon: "icon url here" },
  { title: "free tool", text: "paragraph", icon: "icon url here" },
];

type BenefitsProps = {
  title: string;
  text: string;
  icon: string; //TODO use an element here: JSX.Element or ReactNode
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
