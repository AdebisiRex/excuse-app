import React from 'react'

const DisplayExcuse = ({content, button, style }) => {
  return (
    <>
        <div className={style}>
            <h3 className='text-center'>{button}</h3>

            <p className='text-center quote fw-bold' >{content}</p>

        </div>
    </>
  )
}

export default DisplayExcuse