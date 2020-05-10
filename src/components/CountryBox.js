import React, { useState, useEffect } from 'react'
import CountryFlag from 'react-country-flag'

const CountryBox = (props) => {
  const { data } = props.props

  return (
    <div className={'CountryBox'}>
      <div className='head'>
        <img
          className='Flag'
          src={ '//cdn.countryflags.com/thumbs/' + data.country.toLowerCase() + '/flag-square-250.png'
          }
        />
        <h3>{data.country}</h3>
      </div>
      <CountryFlag country={data.country}></CountryFlag>
      <div className='stats'>
        <p>
          Infected: <b>{data ? data['provinces'][0].confirmed : ''}</b>
        </p>
        <p>
          Active : <b>{data ? data['provinces'][0].active : ''}</b>
        </p>
        <p>
          Deaths: <b>{data ? data['provinces'][0].deaths : ''}</b>
        </p>
      </div>
    </div>
  )
}

export default CountryBox
