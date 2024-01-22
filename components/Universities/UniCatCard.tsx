import React from "react"

function UniCatCard({title, children}: {title: string, children?: React.ReactNode}) {
  return (
    <div>
        <h3 className="text-lg font-bold py-4">{title}</h3>
        <div className="bg-red-400 rounded-xl p-6">
            {children}
        </div>
    </div>
  )
}

export default UniCatCard