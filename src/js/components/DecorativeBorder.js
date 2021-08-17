const DecorativeBorder = (props) => {
  return (
    <div className="decorative-border">
      <div className={`decorative-border__inner decorative-border__inner--${props.location}`}></div>
    </div>
  )
}

export default DecorativeBorder
