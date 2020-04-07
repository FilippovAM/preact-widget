import Button from '../../button'
import style from './style.css'

const PanelFile = ({onClick}) => (
  <div class={style.panel}>
    <h2>drag & drop any files</h2>
    <p>or</p>
    <Button onClick={onClick}>Chose a local file</Button>
  </div>
)

export default PanelFile
