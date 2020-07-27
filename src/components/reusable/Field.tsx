import * as React from "react";
import { useForm } from "react-hook-form";

// The available editors for the field
type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
	// The unique field name
	id: string;

	// The label text for the field
	label?: string;

	// The editor for the field
	editor?: Editor;

	// The drop down items for the field
	options?: string[];

	// The field value
	value?: any;

	// The ref
	refe?: any;

	// errors
	errors?: any;

	// name
	name?: any;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
	id,
	label,
	editor,
	options,
	value,
	refe,
	errors,
	name,
}) => {
	const { register } = useForm();

	return (
		<div className="form-group">
			{label && <label htmlFor={id}>{label}</label>}
			{editor!.toLowerCase() === "textbox" && (
				<input
					id={id}
					type="text"
					value={value}
					onChange={(e: React.FormEvent<HTMLInputElement>) =>
						console.log("1: ", e)
					}
					onBlur={(e: React.FormEvent<HTMLInputElement>) =>
						console.log("error is: ", errors, " - 2 here: ", e)
					}
					className="form-control"
					ref={register({
						required: "Required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "invalid email address"
						}
						})}
					name={name}
				/>
			)}
			{errors && (errors!.email && errors!.email.message)}
			{editor!.toLowerCase() === "multilinetextbox" && (
				<textarea
					id={id}
					value={value}
					onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
						console.log("1: ", e)
					}
					onBlur={(e: React.FormEvent<HTMLTextAreaElement>) =>
						console.log("2: ", e)
					}
					className="form-control"
				/>
			)}

			{editor!.toLowerCase() === "dropdown" && (
				<select
					id={id}
					name={id}
					value={value}
					onChange={(e: React.FormEvent<HTMLSelectElement>) =>
						console.log("1: ", e)
					}
					onBlur={(e: React.FormEvent<HTMLSelectElement>) =>
						console.log("2: ", e)
					}
					className="form-control"
				>
					{options &&
						options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
				</select>
			)}
		</div>
	);
};
Field.defaultProps = {
	editor: "textbox",
};
