import React from 'react';
import './dotCard.css'


export function DotsCard({content}) {
  return (
  <>
      <div className="card">
  <div className="card__img" >
      {content}
    <div className="card__grid-effect">
      {/* Loop through numbers 1 to 100 */}
      {Array.from({ length: 100 }, (_, index) => (
        <a key={index} className="card__grid-effect-tile" href='#'></a>
        ))}
    </div>
  </div>
</div>

</>

  )
}
