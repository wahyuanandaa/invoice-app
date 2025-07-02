import { forwardRef, useRef, useImperativeHandle, useEffect } from "react"

// styles
import styles from "../../assets/styles/modules/form.module.css"

// libraries
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../../assets/styles/date.css"

// svg
import calendarSvg from "../../assets/svg/icon-calendar.svg"

const DateComponent = forwardRef((props, ref) => {
  const childRef = useRef(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        _test(value) {
          console.log("test", value)
        },
        get value() {
          return childRef.current?.value || ""
        },
        focus() {
          if (childRef.current) {
            childRef.current.focus()
          }
        },
        scrollIntoView() {
          if (childRef.current) {
            childRef.current.scrollIntoView()
          }
        }
      }
    },
    []
  )

  const handleDayHover = (date) => {
    return date && date.getDate() === 15 ? "custom-hover-class" : null
  }

  useEffect(() => {
    if (props.defaultDate) {
      props.setDate(new Date(props.defaultDate))
    }
  }, [props.defaultDate])

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <div className={styles.calendarContainer} onClick={onClick} ref={ref}>
      <label htmlFor={props.id}>
        <input
          type="text"
          id={props.id}
          name={props.name}
          value={value}
          className={styles.calendar}
          readOnly
        />
      </label>
      <img src={calendarSvg} alt="calendar icon" />
    </div>
  ))

  const today = new Date()

  return (
    <div
      className={styles.formContainer}
      style={{
        width: props.width ?? "18.46154rem"
      }}
    >
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <DatePicker
        selected={props.date}
        name="createdAt"
        maxDate={today}
        onChange={(date) => {
          if (date) {
            props.setDate(date)
          }
        }}
        dayClassName={handleDayHover}
        formatWeekDay={() => {
          return ""
        }}
        dateFormatCalendar="MMM yyyy"
        customInput={<CustomDateInput />}
        dateFormat={"dd MMM yyyy"}
      />
    </div>
  )
})

export default DateComponent
