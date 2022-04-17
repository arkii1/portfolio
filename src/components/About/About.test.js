import React from "react"
import ReactDOM from "react-dom/client"
import { cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import About from "./About"

afterEach(cleanup)

it("renders without crashing", () => {
  const container = document.createElement("div")
  const root = ReactDOM.createRoot(container)
  root.render(<About />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<About />).toJSON()
  expect(tree).toMatchSnapshot()
})
