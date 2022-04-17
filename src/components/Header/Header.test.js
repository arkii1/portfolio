import React from "react"
import ReactDOM from "react-dom/client"
import { cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Header from "./Header"

afterEach(cleanup)

it("renders without crashing", () => {
  const container = document.createElement("div")
  const root = ReactDOM.createRoot(container)
  root.render(<Header />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Header />).toJSON()
  expect(tree).toMatchSnapshot()
})
