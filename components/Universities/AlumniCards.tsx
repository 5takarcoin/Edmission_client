import AlumniCard from "./AlumniCard";

function AlumniCards() {
  return (
    <div className="">
      <h3 className="py-8 text-xl font-bold">Notable Alumnis</h3>
      <div className="flex gap-4 px-12">
        <AlumniCard />
        <AlumniCard />
        <AlumniCard />
        <AlumniCard />
      </div>
    </div>
  );
}

export default AlumniCards;
