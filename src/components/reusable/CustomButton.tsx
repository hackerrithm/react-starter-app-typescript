import * as React from "react";
import Button from "@material-ui/core/Button";

export interface IFieldProps {
	// The unique field name
	id: string;

	// className
	className: string;

	// The label text for the field
	label?: string;

	// disabled
	disabled?: boolean;
}

export const CustomButton: React.FunctionComponent<IFieldProps> = ({
	id,
	label,
	className,
	disabled,
}) => {
	return (
		<Button
			className={className}
			type={"submit"}
			color={"primary"}
			id={id}
			disabled={disabled}
		>
			{label}
		</Button>
	);
};
