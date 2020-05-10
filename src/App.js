import React, { useState, useEffect } from 'react'
import CountryBox from './components/CountryBox'
import Totals from './components/Totals'
import './App.css'

function App() {
  const [data, setData] = useState([])

  const getData = () => {
    let today = new Date()
    const dd = String(today.getDate()-1).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd
    fetch(
      'https://covid-19-data.p.rapidapi.com/report/country/all?date-format=YYYY-MM-DD&format=json&date='+today,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key':
            'b1a265c662msh9cc063942e6c98cp10736cjsn2701e74b40c1',
        },
      }
    )
      .then((response) =>
        response.json().then((json) => {
          json.sort((a, b) => {
            const one = a.provinces[0].deaths
            const two = b.provinces[0].deaths
            if (one >= two) return -1
            else return 1
          })
          setData(json)
        })
      )
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    if (Object.keys(data).length === 0) getData()
  }, [])
  return (
    <div className='App'>
      <Totals props={data} ></Totals>
      <div className='Countries'>
        {Object.keys(data).length !== 0
          ? data.map((country,index) => (
            <CountryBox
                key={country.country}
                props={{ data: country, top: index < 5 ? 'top' : null  }}></CountryBox>
            ))
          : null}
      </div>
    </div>
  )
}

export default App
