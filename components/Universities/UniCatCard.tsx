import React from "react"

function UniCatCard({title, children}: {title: string, children?: React.ReactNode}) {
  return (
    <div>
        <h3 className="text-lg font-bold p-2 pt-4">{title}</h3>
        <div className="bg-ed-card rounded-xl p-6">
            {children}
        </div>
    </div>
  )
}

export default UniCatCard