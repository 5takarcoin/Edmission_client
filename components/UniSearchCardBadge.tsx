type Badge = {
    icon: string,
    header: string,
    desc: string
}

export default function UniSearchCardBadge({ badge } : { badge : Badge}) {
  return (
    <div>
      <p><span>{badge.icon}</span><span>{badge.header}</span></p>
      <p>{badge.desc}</p>
    </div>
  )
}
