import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FindMore from "./FindMore";
import { createRoot } from "react-dom/client";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<FindMore/>", () => {
  it("should have text -Find more about me", () => {
    render(<FindMore />, container);

    expect(container.textContent).toBe("Find more about meLinkedInGitHub");
  });
});
