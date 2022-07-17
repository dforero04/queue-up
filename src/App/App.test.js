import {
  cleanup,
  fireEvent,
  getByLabelText,
  getByRole,
  queryByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import exp from "constants";
import App from "./App.tsx";

afterEach(cleanup);

test("renders Start Room and Join Room buttons", () => {
  const { getByTestId } = render(<App />);
  // const startBtn = getByLabelText("Start Room");
  // const joinBtn = getByLabelText("Join Room");
  expect(getByTestId(/startBtn/i)).toBeTruthy();
  expect(getByTestId(/joinBtn/i)).toBeTruthy();
});

test("renders Join Modal when Join Room button is clicked", () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("joinBtn"));
  // await waitFor(() => screen.getByText("Enter Room Code"))

  expect(screen.getAllByText("Enter Room Code")).toBeTruthy();
});
