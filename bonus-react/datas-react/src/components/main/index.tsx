import { useState } from 'react'
import { Form } from '../form'
import './main.css'
import { showDate } from '../../utils/show-date'

export function Main() {
  const [date, setDate] = useState('')
  const [days, setDays] = useState(0)
  const [months, setMonths] = useState(0)
  const [years, setYears] = useState(0)

  return (
    <div>
      <h1 className='main-title'>Datas</h1>
      <Form
       date={{
        value: date,
        setDate,
       }}
       daysMonthsYears={{
        days: {
          value: days,
          setDays
        },
        months: {
          value: months,
          setMonths
        },
        years: {
          value: years,
          setYears
        }
       }}
       />
       <p className='date'>{showDate(date, days, months, years)}</p>
    </div>
  )
}
