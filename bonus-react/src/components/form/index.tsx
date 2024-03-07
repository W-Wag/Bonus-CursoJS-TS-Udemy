import './form.css'

interface FormProps {
  date: {
    value: string
    setDate: React.Dispatch<React.SetStateAction<string>>
  }
  daysMonthsYears: {
    days: {
      value: number
      setDays: React.Dispatch<React.SetStateAction<number>>
    }
    months: {
      value: number
      setMonths: React.Dispatch<React.SetStateAction<number>>
    }
    years: {
      value: number
      setYears: React.Dispatch<React.SetStateAction<number>>
    }
  }

}

export function Form({date, daysMonthsYears}: FormProps) {
  return (
   <form className='main-form'>
    <div className='main-date'>
    <label htmlFor="main-date"></label>
    <span>Data: </span>
    <input
    type="date"
    id='main-date'
    placeholder='DD/MM/AAAA'
    value={date.value}
    onChange={(e) => date.setDate(e.target.value)
    }
    />
    </div>

    <div className='main-days'>
    <label htmlFor="main-date"></label>
    <span>+/- Dias: </span>
    <input
    type="number"
    id='main-date'
    className='number-input'
    value={daysMonthsYears.days.value}
    onChange={(e) => daysMonthsYears.days.setDays(Number(e.target.value))}
    />
    </div>

    <div className='main-month'>
    <label htmlFor="more-month"></label>
    <span>+/- Meses: </span>
    <input
    type="number"
    id='more-month'
    className='number-input'
    value={daysMonthsYears.months.value}
    onChange={(e) => daysMonthsYears.months.setMonths(Number(e.target.value))}
    />
    </div>

    <div className='main-year'>
    <label htmlFor="more-days"></label>
    <span>+/- Anos: </span>
    <input
    type="number"
    id='more-days'
    className='number-input'
    value={daysMonthsYears.years.value}
    onChange={(e) => daysMonthsYears.years.setYears(Number(e.target.value))}
    />
    </div>
   </form>
  )
}
