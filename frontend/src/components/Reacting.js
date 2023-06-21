import React from 'react'

function Reacting({value, text, color}) {
  return (
    <div className='liking'>
      <span>
        <i style={{ color }} className={
            value >= 1
                ? 'fa-solid fa-heart'
                : value >= 0.5
                    ? 'fa-solid fa-heart-half'
                    : 'fa-solid fa-heart'
        }>
        </i>
      </span>
      <span>
        <i style={{ color }} className={
            value >= 2
                ? 'fa-solid fa-heart'
                : value >= 1.5
                    ? 'fa-solid fa-heart-half'
                    : 'fa-solid fa-heart'
        }>
        </i>
      </span>
      <span>
        <i style={{ color }} className={
            value >= 3
                ? 'fa-solid fa-heart'
                : value >= 2.5
                    ? 'fa-solid fa-heart-half'
                    : 'fa-solid fa-heart'
        }>
        </i>
      </span>
      <span>
        <i style={{ color }} className={
            value >= 4
                ? 'fa-solid fa-heart'
                : value >= 3.5
                    ? 'fa-solid fa-heart-half'
                    : 'fa-solid fa-heart'
        }>
        </i>
      </span>
      <span>
        <i style={{ color }} className={
            value >= 5
                ? 'fa-solid fa-heart'
                : value >= 4.5
                    ? 'fa-solid fa-heart-half'
                    : 'fa-solid fa-heart'
        }>
        </i>
      </span>
      <span>{text && text}</span>
    </div>
  )
}

export default Reacting
