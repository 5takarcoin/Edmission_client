export default function HeroCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    // <div className="bg-ed-white h-20 md:h-64 w-64 rounded-lg flex items-center justify-center">
    //     <div>
    //     <div>
    //       <img src={img} alt={title} />
    //     </div>
    //     <div>
    //       <h3 className="font-bold text-lg">{title}</h3>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-ed-white h-full md:h-64 w-full rounded-lg flex">
      <div className="flex flex-row-reverse items-center justify-between w-full px-8">
        <div className="h-20 w-20 flex items-center object-cover">
          <img className="object-contain" src={img} alt={title} />
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
}
