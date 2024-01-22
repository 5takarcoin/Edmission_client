type Badge = {
    icon: string,
    header: string,
    desc: string
}

export default function UniSearchCardBadge({ badge, children } : { badge : Badge, children: React.ReactNode}) {
  return (
    <div className="flex-col bg-red-200 inline-block px-4 py-2 rounded-lg">
      <p className="text-md font-semibold text-black flex gap-2 items-center"><span>{children}</span><span>{badge.header}</span></p>
      <p className="text-sm text-black">{badge.desc}</p>
    </div>
  )
}
