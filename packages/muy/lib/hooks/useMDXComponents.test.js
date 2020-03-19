import React from "react"
import useMDXComponents from "./useMDXComponents"

describe("useMDXComponent hook", () => {
  it("should define component for h1", () => {
    const actual = useMDXComponents()
    expect(actual.h1).toBeDefined()
  })
})
