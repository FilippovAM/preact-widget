import { Component } from 'preact'
import Button from './button'
import WidgetModal from './widget-modal'
import { useContext, useState } from 'preact/compat'
import { LocaleStore } from '../store/locale'
import LanguageSelect from './language-select'
import WidgetTabs from './widget-tabs'

export default class App extends Component {
  render(props) {
    const [isOpen, setIsOpen] = useState()
    const {state: {translate: t}} = useContext(LocaleStore)

    return (
      <div id="app">
        <Button onClick={() => setIsOpen(true)}>{t('Upload files')}</Button>
        <LanguageSelect />

        <WidgetModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <WidgetTabs
            activeTab={props.activeTab}
            tabs={props.tabs}
          />
        </WidgetModal>
      </div>
    )
  }
}
