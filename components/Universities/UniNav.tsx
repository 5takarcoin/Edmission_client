import Link from "next/link"

function UniNav() {

  const navList = ["About", "Rankings", "Admission Details", "Application Details", "Subject & Majors", "Campus Info", "Life After Graduation", "Reviews", ":::"]

  return (
    <div>
        <div className="flex text-red-900">
            {navList.map((item, key) => {
                return <Link href="./haha/ha" key={key}>{item}</Link>
            })}
        </div>
    </div>
  )
}

export default UniNav