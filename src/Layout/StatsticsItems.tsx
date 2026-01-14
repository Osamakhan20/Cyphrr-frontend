export const StatItem = ({ icon, label, value }: StatItemProps) => {
  return (
    <div className=" flex flex-col items-center text-center gap-2">
      {icon}
      <h3 className="text-2xl font-black text-textGray">{value}</h3>
      <p className="text-xl text-primary">{label}</p>
    </div>
  );
};

export const StatsGrid = ({
  items,
  className,
}: {
  items: Stat[];
  className?: string;
}) => {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-6 ${
        className ?? ""
      }`}
    >
      {items.map((s, i) => (
        <StatItem key={i} icon={s.icon} label={s.label} value={s.value} />
      ))}
    </div>
  );
};
