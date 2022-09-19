import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import React from "react";
import App from "./App";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders header", () => {
  act(() => {
    render(<App />, container);
  });
  expect(container.querySelector(".header").textContent).toBe("SignalS + Composition test");
  
});

