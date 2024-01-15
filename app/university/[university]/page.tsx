import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";
import UniSearchCard from "@/components/Universities/UniSearchCard";

export default function page() {
  return (
    <div className="bg-green-200 space-y-8">
      <div className="">
        <h1 className="text-4xl font-bold">Explore Universities</h1>
        <p className="text-lg">
          Search Through over 1,250 universities all around the world. Or take
          the Edmission Quiz to find the perfect college suited for you.
        </p>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Sidebar />
        </div>
        <div className="flex-[3] p-4">
          <p>sort relevance bar</p>
          <UniSearchCard />
          <UniSearchCard />
          <StillCantFind />
          <UniSearchCard />
        </div>
      </div>
    </div>
  );
}
