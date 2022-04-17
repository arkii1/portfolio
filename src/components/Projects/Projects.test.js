import React from "react"
import ReactDOM from "react-dom/client"
import { cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Projects from "./Projects"

afterEach(cleanup)

it("renders without crashing", () => {
  const container = document.createElement("div")
  const root = ReactDOM.createRoot(container)
  root.render(<Projects />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Projects />).toJSON()
  expect(tree).toMatchSnapshot()
})
