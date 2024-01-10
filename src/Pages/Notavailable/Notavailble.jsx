import "./Notavailble.css"

const Notavailble = ({
    isdarkthemeEnabled,
    dark_theme
}) => {
  return (
    <div className="notavailable flex" style={isdarkthemeEnabled ? dark_theme : {}}>
      <span>The Page You Are Looking for Is Not Available</span>
    </div>
  )
}

export default Notavailble
