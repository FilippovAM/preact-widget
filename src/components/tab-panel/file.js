import Button from '../button'

const PanelFile = ({onClick}) => (
  <>
    <h2>drag & drop any files</h2>
    <p>or</p>
    <Button onClick={onClick}>Chose a local file</Button>
  </>
)

export default PanelFile
