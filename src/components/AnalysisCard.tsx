interface CardProps {
  title: string;
  innerNumber: number;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  colorClassEffect: string;
}

const AnalysisCard: React.FC<CardProps> = ({
  title,
  innerNumber,
  Icon,
  colorClassEffect,
}) => {
  return (
    <section className="min-w-[20rem]  w-full flex flex-1  items-center gap-5 justify-between rounded-lg p-5 shadow-lg">
      <section className="">
        <h4 className="capitalize font-semibold text-mutedText text-lg mb-7">
          {title}
        </h4>
        <p className="text-mainText text-4xl font-bold">{innerNumber}</p>
      </section>
      <section className={`rounded-full p-4 ${colorClassEffect}`}>
        <Icon size={30} />
      </section>
    </section>
  );
};

export default AnalysisCard;
