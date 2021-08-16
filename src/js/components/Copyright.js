import "../../styles/components/copyright.scss"

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="copyright">
      <p className="copyright__text">©{ currentYear }, All Rights Reserved</p>
    </div>
  )
}

export default Copyright
