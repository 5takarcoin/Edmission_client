export default function FeaturesCard({ img, title } : { img: string, title: string }) {
    return (
      <div>
        <img className="m-auto h-48" src={ img } alt={ title } />
        <h3 className="text-md font-bold text-center px-8">{ title }</h3>
      </div>
    )
  }
  