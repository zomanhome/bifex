import React from "react"
import "../static/styles.css"
import Header from "./components/header"
import {observer} from "mobx-react-lite"
import Layout from "./components/layout";
import Calculator from "./components/calculator"
import {ThemeSwitcherProvider} from 'react-css-theme-switcher'
import {ConfigProvider} from "antd"
import enUS from "antd/locale/en_US"
import {themes, algorithm} from "./services/theme-service"

const App = observer(() => {
  return (
    <ConfigProvider locale={enUS} theme={algorithm()}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme="light">
        <Layout>
          <Header/>
          <Calculator/>
        </Layout>
      </ThemeSwitcherProvider>
    </ConfigProvider>
  )
})

export default App