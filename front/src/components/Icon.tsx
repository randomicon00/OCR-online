type IconProps = {
  url: string;
};

const Icon = ({ iconUrl }: IconProps) => {
  return <img src={url} alt="" data-testid="icon" />;
};

export default Icon;
