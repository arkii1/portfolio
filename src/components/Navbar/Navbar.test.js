import React from "react"
import ReactDOM from "react-dom/client"
import { cleanup } from "@testing-library/react"
import renderer from "react-test-renderer"
import Navbar from "./Navbar"

afterEach(cleanup)

it("renders without crashing", () => {
  const container = document.createElement("div")
  const root = ReactDOM.createRoot(container)
  root.render(<Navbar />)
})

it("matches snapshot", () => {
  const tree = renderer.create(<Navbar />).toJSON()
  expect(tree).toMatchSnapshot()
})
