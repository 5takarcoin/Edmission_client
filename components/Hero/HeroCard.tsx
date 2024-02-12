export default function HeroCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="bg-ed-white h-full md:h-64 w-full rounded-lg flex">
      <div className="flex flex-row-reverse md:flex-col items-center justify-around w-full px-8">
        <div className="h-20 md:h-48 w-20 md:w-40 flex items-center object-cover">
          <img className="object-contain" src={img} alt={title} />
        </div>
        <div className="">
          <h3 className="font-bold text-lg md:py-4">{title}</h3>
        </div>
      </div>
    </div>
  );
}
