export default function FeaturesCard({
  img,
  title,
  reverse = false,
}: {
  img: string;
  title: string;
  reverse?: boolean;
}) {
  return (
    <div className="flex itemx-center px-12">
      <div className="flex-1 flex justify-center">
        <img className="h-24 p-4" src={img} alt={title} />
      </div>
      <div className="flex-[2] flex justify-center items-center">
        <h3 className="text-md font-bold text-start pb-2 pr-8">{title}</h3>
      </div>
    </div>
  );
}
