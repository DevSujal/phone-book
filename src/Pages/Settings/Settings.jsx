import "./Settings.css"

const Settings = (props) => {
  return (
    <div className='settings' style={props.isdarkthemeEnabled ? props.dark_theme : {}}>
      Please find Settings Here
    </div>
  )
}

export default Settings
