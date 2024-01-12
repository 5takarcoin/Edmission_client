type University = {
    name: string,
    location: string,
    description: string,
    logo: string,
    image: string,
}

export default function UniHero({uni}: {uni: University}) {
  return (
    <div>
      <div>
        <div>
            <div>UniLogo {uni.logo}</div>
            <div>
                <h2>Name {uni.name}</h2>
                <p><span>location icon</span><span>uni location {uni.location}</span><span>star icon</span><span>rating(total)</span></p>
            </div>
        </div>
        <div>
            <p>{uni.description}Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.</p>
        </div>
      </div>
      <div>
        <div>Image {uni.image}</div>
        <button>Compare</button>
      </div>
    </div>
  )
}
