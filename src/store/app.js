import {action, observable, reaction} from "mobx"

class AppStore {
  @observable
  _theme = observable.box("light")

  @action
  getCurrentTheme() {
    console.log(this._theme.get())
    return this._theme.get()
  }

}

export default AppStore