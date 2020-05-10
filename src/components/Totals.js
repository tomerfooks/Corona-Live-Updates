import React,{useEffect, useState} from 'react'

const Totals = (props) => {
    const data = props.props
    const [totals, setTotals] = useState({ confirmed: 0, deaths: 0, active: 0 })
    
    useEffect(() => {
        const results = {confirmed:0, deaths: 0, active:0}
        data.map(eivar => {            
            results.confirmed = results.confirmed + eivar.provinces[0].confirmed
            results.deaths = results.deaths + eivar.provinces[0].deaths
            results.active = results.active + eivar.provinces[0].active
        })
        setTotals(results)
    },[data])
    return (    
        <div className="Totals">
            <h2>Total Infected: <b>{totals.confirmed}</b> </h2>
            <h2>Total Active:<b> {totals.active}</b> </h2>
            <h2>Total Deaths: <b>{totals.deaths}</b> </h2>
        </div>
    )
}

export default Totals 