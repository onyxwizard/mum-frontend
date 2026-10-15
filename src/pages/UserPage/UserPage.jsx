import { useState } from "react";
import { ContractFormService } from "../../service/contractFormService";

const emptyForm = {
	name: "",
	email: "",
	phone: "",
	message: "",
};

export const UserPage = ({ user = null, onUpdateSuccess, onSuccess }) => {
	const isEditing = Boolean(user);
	const isAdminForm = typeof onUpdateSuccess === "function";

	const [formData, setFormData] = useState(() => ({
		name: user?.name ?? "",
		email: user?.email ?? "",
		phone: String(user?.phone ?? ""),
		message: user?.message ?? "",
	}));

	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [phoneError, setPhoneError] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;

		const newValue =
			name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;

		setFormData((current) => ({
			...current,
			[name]: newValue,
		}));

		setError("");
		setSuccess("");

		if (name === "phone") {
			setPhoneError("");
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		setIsSaving(true);
		setError("");
		setSuccess("");

		let response;

		// 1. Send the request and check for API/database errors.
		try {
			response = isEditing
				? await ContractFormService.updateUser(user.id, formData)
				: await ContractFormService.createUser(formData);

			console.log("Contact request response:", response);
			console.log("Response data:", response?.data);
			console.log("Response error:", response?.error);
			console.log("Nested error:", response?.data?.error);

			// Supabase-style responses can resolve with an error property.
			const requestError = response?.error ?? response?.data?.error;

			if (requestError) {
				throw requestError instanceof Error
					? requestError
					: new Error(requestError.message ?? "Request failed");
			}
		} catch (err) {
			console.error("Contact request failed:", err);
			setError("Unable to save the contact. Please try again.");
			return;
		} finally {
			setIsSaving(false);
		}

		// 2. Public contact form: let Contact.jsx show the success screen.
		if (!isAdminForm) {
			setFormData({ ...emptyForm });
			setPhoneError("");

			if (typeof onSuccess === "function") {
				try {
					onSuccess();
				} catch (err) {
					// The request already succeeded; don't report this as a DB failure.
					console.error("Contact success callback failed:", err);
					setSuccess("Your message was submitted successfully.");
				}
			} else {
				setSuccess("Your message was submitted successfully.");
			}

			return;
		}

		// 3. Admin form: extract the saved record for the contacts table.
		let savedUser = response?.data ?? response;

		if (Array.isArray(savedUser)) {
			savedUser = savedUser[0];
		}

		// Support APIs that wrap the saved record in { data: contact }.
		if (
			savedUser?.data &&
			typeof savedUser.data === "object" &&
			savedUser.id == null
		) {
			savedUser = savedUser.data;
		}

		if (!savedUser || typeof savedUser !== "object") {
			setError(
				"The request completed, but the API did not return the saved contact. Check the admin list before trying again.",
			);
			return;
		}

		savedUser = {
			...(user ?? {}),
			...savedUser,
			...formData,
		};

		if (savedUser.id == null) {
			setError(
				"The request completed, but the contact ID was not returned. Refresh the admin list and check the database before retrying.",
			);
			return;
		}

		// 4. Update the admin UI separately from the database request.
		try {
			onUpdateSuccess(savedUser);
		} catch (err) {
			console.error("Admin UI update failed:", err);
			setError(
				"The contact may have been saved, but the admin list could not update. Refresh the page before retrying.",
			);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<h3 className="mb-1">
					{isEditing
						? "Edit contact"
						: isAdminForm
							? "Add contact"
							: "Contact us"}
				</h3>

				<p className="text-secondary mb-0">
					{isEditing
						? "Update the contact details below."
						: isAdminForm
							? "Enter the new contact details below."
							: "Tell us about your project and how we can help."}
				</p>
			</div>

			{error && (
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			)}

			{success && (
				<div className="alert alert-success" role="status">
					{success}
				</div>
			)}

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
					autoComplete="name"
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
					autoComplete="email"
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
					autoComplete="tel"
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
					placeholder="Tell us about your project"
					rows={4}
				/>
			</div>

			<div className="text-end">
				<button className="btn btn-primary" type="submit" disabled={isSaving}>
					{isSaving
						? "Submitting..."
						: isEditing
							? "Save changes"
							: isAdminForm
								? "create"
								: "Send message"}
				</button>
			</div>
		</form>
	);
};
