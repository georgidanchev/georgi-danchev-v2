const SectionHeader = (props) => {
  return (
    <div className={`section-header${props.link_title != null ? " section-header--w-t-btn" : ""} `}>
      <div className="section-header__wrapper">
        <p className="section-header__subheading">{props.subtitle}</p>
        <h2 className="section-header__heading">{props.title}</h2>
      </div>
      {props.link_title != null ? (
        <a href={props.link_url} className="btn section-header__btn">
          {props.link_title}
        </a>
      ) : (
        ""
      )}
    </div>
  )
}

export default SectionHeader
