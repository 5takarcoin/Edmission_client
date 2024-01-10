export default function Footer() {
  return (
    <div className="flex-col items-center justify-between">
      <div className="flex justify-between">
        <div>
          <div>Logo</div>
          <p>Helping you find your ideal institution.</p>
          <h3>A concern of Khiyo Inc.</h3>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h3>EXPLORE</h3>
            <li className="list-none p-4">High Schools</li>
            <li className="list-none p-4">Colleges</li>
            <li className="list-none p-4">Universities</li>
            <li className="list-none p-4">EdJourney</li>
          </div>
          <div>
            <h3>FOLLOW US</h3>
            <li className="list-none p-4">Facebook</li>
            <li className="list-none p-4">Youtube</li>
            <li className="list-none p-4">Instagram</li>
            <li className="list-none p-4">Threads</li>
          </div>
        </div>
      </div>
      <div>
        <p>All Rights Reserved by Khiyo Inc. © 2023</p>
      </div>
    </div>
  );
}
