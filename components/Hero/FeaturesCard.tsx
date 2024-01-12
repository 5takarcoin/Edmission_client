export default function FeaturesCard({ img, title } : { img: string, title: string }) {
    return (
      <div>
        <div>Image { img }</div>
        <h3>{ title }</h3>
      </div>
    )
  }
  