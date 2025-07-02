import { forwardRef, useEffect, useImperativeHandle } from "react"
import ReactSelect from "react-select"

// styles
import styles from "../../assets/styles/modules/form.module.css"
import "../../assets/styles/select.css"

// from index

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--form-bg)",
    height: "3.69231rem",
    border: 0,
    outline: state.isFocused
      ? "1px solid var(--primary)"
      : "1px solid var(--form-outline)",
    fontWeight: "700",
    padding: "0 0.7rem",
    "&:hover": {
      outline: "1px solid var(--primary)"
    }
  }),
  input: (provided) => ({
    ...provided,
    color: "var(--text)"
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "var(--form-bg)" : "var(--form-bg)",
    color: state.isSelected ? "var(--primary)" : "var(--form-placeholder)",
    fontWeight: "700",
    fontSize: "1.15rem",
    padding: "1.15rem 1.85rem",
    borderBottom: "1px solid var(--form-outline)",
    top: "1rem",
    "&:hover": {
      color: "var(--primary)"
    },
    "&:active": {
      backgroundColor: "var(--primary)",
      color: "white"
    }
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "1.85rem",
    boxShadow: "var(--box-shadow)",
    transition: "150ms ease-in",
    backgroundColor: "var(--form-bg)"
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "var(--primary)"
  })
}

const Select = forwardRef((props, ref) => {
  const { onChange, selectedValue, options, id, label, defaultOption } = props

  useImperativeHandle(
    ref,
    () => {
      return {
        _test(value) {
          console.log("test", value)
        },
        get value() {
          return selectedValue
        }
      }
    },
    [selectedValue]
  )

  useEffect(() => {
    const selected = options.filter((option) => option.value === defaultOption)
    if (defaultOption && selected) {
      onChange?.(selected[0])
    }
  }, [defaultOption])

  return (
    <div
      className={styles.formContainer}
      style={{
        width: props.width ?? "18.46154rem"
      }}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <ReactSelect
        options={options}
        onChange={(value) => {
          if (value) {
            onChange?.(value)
          }
        }}
        value={selectedValue}
        styles={customStyles}
        classNamePrefix="custom-select"
      />
    </div>
  )
})

export default Select
