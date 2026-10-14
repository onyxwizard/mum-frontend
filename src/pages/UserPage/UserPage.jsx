import { useState } from "react";
import { ContractFormService } from "../../service/contractFormService";

export const UserPage = ({ user = null, onUpdateSuccess }) => {
	const isEditing = Boolean(user);

	const [formData, setFormData] = useState({
		name: user?.name ?? "",
		email: user?.email ?? "",
		phone: String(user?.phone ?? ""),
		message: user?.message ?? "",
	});

	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;

		const newValue =
			name === "phone"
				? value
						.split("")
						.filter((digit) => digit >= "0" && digit <= "9")
						.join("")
						.slice(0, 10)
				: value;

		setFormData((current) => ({ ...current, [name]: newValue }));
		setError("");

		if (name === "phone") setPhoneError("");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setIsSaving(true);
		setError("");

		try {
			const response = isEditing
				? await ContractFormService.updateUser(user.id, formData)
				: await ContractFormService.createUser(formData);

			let savedUser = response?.data ?? response;

			if (Array.isArray(savedUser)) savedUser = savedUser[0];

			if (!savedUser || typeof savedUser !== "object") {
				throw new Error("Invalid server response");
			}

			savedUser = { ...(user ?? {}), ...savedUser, ...formData };

			if (savedUser.id == null) {
				throw new Error("Saved contact ID is missing");
			}

			onUpdateSuccess(savedUser);
		} catch (err) {
			console.error("Failed to save contact:", err);
			setError("Unable to save contact. Please try again.");
		} finally {
			setIsSaving(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<h3 className="mb-1">{isEditing ? "Edit contact" : "Add contact"}</h3>
				<p className="text-secondary mb-0">
					{isEditing
						? "Update the contact details below."
						: "Enter the new contact details below."}
				</p>
			</div>

			{error && <div className="alert alert-danger">{error}</div>}

			<div className="mb-3">
				<label className="form-label" htmlFor="contact-name">
					Full name
				</label>
				<input
					id="contact-name"
					className="form-control"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Enter full name"
					required
				/>
			</div>

			<div className="mb-3">
				<label className="form-label" htmlFor="contact-email">
					Email address
				</label>
				<input
					id="contact-email"
					className="form-control"
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="name@example.com"
					required
				/>
			</div>

			<div className="mb-3">
				<label className="form-label" htmlFor="contact-phone">
					Phone number
				</label>
				<input
					id="contact-phone"
					className="form-control"
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Enter 10-digit phone number"
					inputMode="numeric"
					pattern="[0-9]{10}"
					maxLength={10}
					onInvalid={(event) => {
						event.preventDefault();
						setPhoneError("Enter a valid 10-digit phone number.");
					}}
					aria-invalid={Boolean(phoneError)}
					required
				/>
				{phoneError && (
					<div className="invalid-feedback d-block">{phoneError}</div>
				)}
			</div>

			<div className="mb-4">
				<label className="form-label" htmlFor="contact-message">
					Message <span className="text-secondary">(optional)</span>
				</label>
				<textarea
					id="contact-message"
					className="form-control"
					name="message"
					value={formData.message}
					onChange={handleChange}
					placeholder="Enter a message"
					rows={4}
				/>
			</div>

			<div className="text-end">
				<button className="btn btn-primary" type="submit" disabled={isSaving}>
					{isSaving
						? "Saving..."
						: isEditing
							? "Save changes"
							: "Create contact"}
				</button>
			</div>
		</form>
	);
};
