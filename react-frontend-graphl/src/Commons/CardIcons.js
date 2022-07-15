const CardIcons = ({ icons: Icons, className }) => {
  return <>{Icons && <Icons className={className} />}</>;
};
export default CardIcons;
