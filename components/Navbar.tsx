export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div>Logo</div>
      <div className="flex justify-between items-center">
        <li className="list-none p-4">High Schools</li>
        <li className="list-none p-4">Colleges</li>
        <li className="list-none p-4">Universities</li>
        <li className="list-none p-4">EdJourney</li>
        <button>Sign Up</button>
      </div>
    </div>
  )
}
