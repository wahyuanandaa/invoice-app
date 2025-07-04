import { useMediaQuery } from "react-responsive"

import styles from "../../assets/styles/modules/buttons.module.css"
import plusSvg from "../../assets/svg/icon-plus.svg"

const Button = (props) => {
  const { variant } = props

  const isWide = useMediaQuery({ minWidth: 768 })

  return (
    <button
      className={`${styles.button} ${styles[variant ?? ""]}`}
      style={{
        width: props.width
      }}
      {...props}
    >
      {variant && variant === "addButton" && (
        <div className={styles.plusSvg}>
          <img
            src={plusSvg}
            alt=""
            style={{
              width: "10px",
              height: "10px"
            }}
          />
        </div>
      )}
      <span className="text-center">
        {isWide ? props.children : props.shorttext ?? props.children}
      </span>
    </button>
  )
}

export default Button
