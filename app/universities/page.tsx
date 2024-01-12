import Sidebar from "@/components/Sidebar/Sidebar";
import StillCantFind from "@/components/StillCantFind";
import UniSearchCard from "@/components/UniSearchCard";

export default function page() {
  return (
    <div>
        <div>

      <h1>Explore Universities</h1>
      <p>Search Through over 1,250 universities all around the world. Or take the Edmission Quiz to find the perfect college suited for you.</p>
        </div>
        <div>
            <div>
                <Sidebar />
            </div>
            <div>
                <p>sort relevance bar</p>
                <UniSearchCard />
                <UniSearchCard />
                <StillCantFind />
                <UniSearchCard />

            </div>
        </div>
    </div>
  )
}
