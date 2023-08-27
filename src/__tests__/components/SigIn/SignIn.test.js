import { render, screen, fireEvent, waitFor } from "@testing-library/react-native"
import { SignInViewContainer } from "../../../components/SignIn/SignIn"

describe("SignIn", () => {
    describe("SignInViewContainer", () => {
        it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
            const onSubmit = jest.fn()
            render(<SignInViewContainer onSubmit={onSubmit} />)

            fireEvent.changeText(screen.getByPlaceholderText("Username"), "kalle")
            fireEvent.changeText(screen.getByPlaceholderText("Password"), "password")
            fireEvent.press(screen.getByText("Sign in"))

            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: "kalle",
                    password: "password",
                })
            })
        })
    })
})
