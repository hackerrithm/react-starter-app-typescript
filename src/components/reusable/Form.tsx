import React, { useState } from "react";
import { CustomButton } from "./CustomButton";

// type SyntheticEvent = React.SyntheticEvent;
type FormEvent = React.FormEvent<HTMLFormElement>;

interface IFormProps {
	// The type of button for the form
	readonly submitButtonName: string;
	// The http path that the form will be posted to
	readonly action: string;
	// A prop which allows content to be injected
	render: () => React.ReactNode;
	// errors
	errors: any;
	// handleSubmit
	handleSubmit: any;
}

export interface IValues {
	// Key value pairs for all the field values with key being the field name
	[key: string]: any;
}

export interface IErrors {
	// The validation error messages for each field (key is the field name
	[key: string]: string;
}

export interface IFormState {
	value: string;
	// The field values
	values: IValues;

	// The field validation error messages
	errors: IErrors;

	// Whether the form has been successfully submitted
	submitSuccess?: boolean;
}

export const Form: React.FunctionComponent<IFormProps> = ({
	submitButtonName,
	handleSubmit,
	errors,
	action,
	render,
}) => {
	// const errors: IErrors = {};
	const values: IValues = {};
	let value = "";

	const [form, setValues] = useState({
		value: value,
		values: values,
		errors: errors,
		submitSuccess: false,
	});
	// handleSubmit(event: FormEvent) {
	// 	alert("A name was submitted: " + this.state.value);
	// 	event.preventDefault();
	// }

	/**
	 * Returns whether there are any errors in the errors object that is passed in
	 * @param {IErrors} errors - The field errors
	 */
	const haveErrors = (errors: IErrors): boolean => {
		let haveError: boolean = false;
		Object.keys(errors).map((key: string) => {
			if (errors[key].length > 0) {
				haveError = true;
			}
			return haveError;
		});
		return haveError;
	};

	/**
	 * Executes the validation rules for all the fields on the form and sets the error state
	 * @returns {boolean} - Whether the form is valid or not
	 */
	const validateForm = (): boolean => {
		// TODO - validate form
		return true;
	};

	/**
	 * Submits the form to the http api
	 * @returns {boolean} - Whether the form submission was successful or not
	 */
	const submitForm = async (): Promise<boolean> => {
		let testVar: Promise<boolean> = new Promise((resolve, reject) => {
			resolve(true);
		});
		// TODO - submit the form
		return testVar;
	};

	/**
	 * Handles form submission
	 * @param {React.FormEvent<HTMLFormElement>} event - The form event
	 */
	const handleSubmitFunc = async (event: any): Promise<void> => {
		event.preventDefault();
		console.log("in method");

		if (validateForm()) {
			const submitSuccess: boolean = await submitForm();
			setValues({
				value: value,
				values: values,
				errors: errors,
				submitSuccess: submitSuccess,
			});
			console.log(
				"our values - ",
				value,
				" - ",
				values,
				" - ",
				errors,
				" - ",
				submitSuccess
			);
		}
	};

	const { submitSuccess } = form;
	return (
		<div>
			<form onSubmit={handleSubmit(handleSubmitFunc)}>
				<div className="container">
					{render()}
					<div className="form-group">
						<CustomButton
							id="login-button"
							className="btn btn-primary"
							label={submitButtonName}
							disabled={haveErrors(errors)}
						/>
					</div>
					{submitSuccess && (
						<div className="alert alert-info" role="alert">
							The form was successfully submitted!
						</div>
					)}
					{/* {submitSuccess === false && !haveErrors(errors) && (
							<div className="alert alert-danger" role="alert">
								Sorry, an unexpected error has occurred
							</div>
						)} */}
					{submitSuccess === false && haveErrors(errors) && (
						<div className="alert alert-danger" role="alert">
							Sorry, the form is invalid. Please review, adjust
							and try again
						</div>
					)}
				</div>
			</form>
		</div>
	);
};
