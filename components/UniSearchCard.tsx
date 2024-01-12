import UniSearchCardBadge from "@/components/UniSearchCardBadge";

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
    <div>
      <div>maybe sponsored</div>
      <div>
        <div>Image</div>
        <div>
          <h2>Uni name</h2>
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
