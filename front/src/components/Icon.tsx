type IconProps = {
  iconUrl: string;
};

const Icon = ({ iconUrl }: IconProps) => {
  return <img src={iconUrl} alt="" data-testid="icon" />;
};

export default   Icon;
