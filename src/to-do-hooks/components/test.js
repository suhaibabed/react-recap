import { render } from "@testing-library/react";
import ListItem from "./ListItem/ListItem";

describe("ListItem", () => {
  it("should render the component", () => {
    const { getByTestId } = render(<ListItem />);
    const component = getByTestId("ListItem");
    expect(component).toBeInTheDocument();
  });
});
