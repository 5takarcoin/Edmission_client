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
    <div className="flex md:flex-col itemx-center px-12">
      <div className="flex-1 flex justify-center">
        <img className="h-24 md:h-36 p-4 md:px-0" src={img} alt={title} />
      </div>
      <div className="flex-[2] flex justify-center items-center">
        <h3 className="text-md font-bold text-start md:text-center pb-2 pr-8 md:p-2">{title}</h3>
      </div>
    </div>
  );
}
