import * as React from "react";
import { Form } from "../reusable/Form";
import { Field } from "../reusable/Field";
import { useForm } from "react-hook-form";

export const LoginForm: React.SFC = () => {
	const { register, handleSubmit, errors } = useForm();
	// const FancyButton = React.forwardRef((props, ref) => (
	// 	<button ref={ref} className="FancyButton">
	// 	  {props.children}
	// 	</button>
	//   ));

	return (
		<Form
			handleSubmit={handleSubmit}
			errors={errors}
			submitButtonName="login"
			action="http://localhost:8080/users"
			render={() => (
				<React.Fragment>
					<Field id="email" label="Email" name={"Email"} refe={register({
						required: "Required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "invalid email address"
						}
						})} />
					<Field id="password" label="Password" />
					{/* <Field
						id="reason"
						label="Reason"
						editor="dropdown"
						options={[
							"",
							"Marketing",
							"Support",
							"Feedback",
							"Jobs",
						]}
					/>
					<Field id="notes" label="Notes" editor="multilinetextbox" /> */}
				</React.Fragment>
			)}
		/>
	);
};
