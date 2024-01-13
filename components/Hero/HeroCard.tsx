export default function HeroCard({
  img,
  title,
}: {
  img: string;
  title: string;
}) {
  return (
    <div className="bg-gray-400 h-64 w-64 rounded-lg flex items-center justify-center">
        <div>
        <div>
          <img src={img} alt={title} />
        </div>
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
      </div>
    </div>
  );
}
