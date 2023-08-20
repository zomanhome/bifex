import {createStore} from "@badm/react-store"
import ContactsStore from "./contacts"
import AppStore from "./app"

export const store = createStore({
  AppStore: new AppStore(),
  ContactsStore: new ContactsStore(),
})

store.setDefaultErrorsHandler((store, errors, request) => {
})