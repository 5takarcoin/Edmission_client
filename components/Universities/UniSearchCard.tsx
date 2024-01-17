import UniSearchCardBadge from "@/components/Universities/UniSearchCardBadge";

type University = {
  name: string;
  location: string;
  description: string;
  logo: string;
  image: string;
};

const tempBadge = {
  header: "Extremely Selective",
  icon: "image",
  desc: "some description",
};

export default function UniSearchCard() {
  return (
    <div className="flex-col bg-blue-600">
      <div>maybe sponsored</div>
      <div className="flex items-center">
        <div className="flex-1 p-4  w-36 h-64"><img className="object-cover  rounded-2xl w-full h-full" src="./ezname.jpg" alt="" /></div>
        <div className="flex-[3] h-52 bg-red-700">
          <h2 className="text-3xl font-bold">Uni name</h2>
          <p>
            <span>loc icon</span>
            <span>the loc</span>
            <span>dkw icon</span>
            <span>engineering</span>
            <span>star icon</span>
            <span>stars(total reviews)</span>
          </p>
          <p>Desc ends with dot dot</p>
        </div>
      </div>
      <div>
        <UniSearchCardBadge badge={tempBadge} />
        <UniSearchCardBadge badge={tempBadge} />
        <UniSearchCardBadge badge={tempBadge} />
      </div>
    </div>
  );
}
