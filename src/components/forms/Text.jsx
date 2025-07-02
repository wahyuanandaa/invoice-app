import { forwardRef, useRef, useImperativeHandle } from "react"

// styles
import styles from "../../assets/styles/modules/form.module.css"

const Text = forwardRef((props, ref) => {
  const childRef = useRef(null)
  const valid = props.isValid ?? false

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
          if (childRef.current && !valid) {
            childRef.current.scrollIntoView(false)
          }
        }
      }
    },
    [valid]
  )

  return (
    <div
      className={`${styles.formContainer} ${valid ? "" : styles.error}`}
      style={{
        width: props.width
      }}
    >
      {props.label && (
        <div className={styles.labelGroup}>
          <label htmlFor={props.id}>{props.label}</label>
          {!valid && <label htmlFor={props.id}>{props.errorMsg}</label>}
        </div>
      )}
      <input
        ref={childRef}
        value={props.value}
        name={props.name ?? ""}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e)
          }
        }}
        id={props.id || ""}
        type={props.type || "text"}
        placeholder={props.placeholder ?? ""}
      />
    </div>
  )
})

export default Text
