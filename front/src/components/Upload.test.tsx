import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Upload from "./Upload";

test("renders input element with specified name", () => {
  const name = "test-file";
  render(<Upload name={name} />);
  const inputElement = screen.getByLabelText(/upload/i);
  
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("name", name);
});

test("fires onChange event when file is selected", async () => {
  const handleChange = jest.fn();
  render(<Upload name="test-file" onChange={handleChange} />);
  const file = new File(["(⌐□_□)"], "test.png", { type: "image/png" });
  const inputElement = screen.getByLabelText(/upload/i);
  
  await userEvent.upload(inputElement, file);
  
  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(file);
});
