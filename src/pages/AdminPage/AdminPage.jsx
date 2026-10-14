import { useEffect, useState } from "react";
import { ContractFormService } from "../../service/contractFormService";
import ContactTable from "../../components/ContactTable/ContactTable";
import { UserPage } from "../UserPage/UserPage";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
	const [contacts, setContacts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [selectedUser, setSelectedUser] = useState(null);
	const [isCreating, setIsCreating] = useState(false);

	useEffect(() => {
		const loadContacts = async () => {
			try {
				const response = await ContractFormService.getAllUsers();
				const data = response?.data ?? response;

				setContacts(Array.isArray(data) ? data : []);
			} catch (error) {
				console.error(error);
				setError("Unable to load contacts.");
			} finally {
				setLoading(false);
			}
		};

		loadContacts();
	}, []);

	const closeForm = () => {
		setSelectedUser(null);
		setIsCreating(false);
	};

	const handleSave = (savedUser) => {
		setContacts((current) =>
			current.some((user) => String(user.id) === String(savedUser.id))
				? current.map((user) =>
						String(user.id) === String(savedUser.id) ? savedUser : user,
					)
				: [savedUser, ...current],
		);

		closeForm();
	};

	const handleDelete = async (user) => {
		if (!window.confirm(`Delete ${user.name || "this contact"}?`)) return;

		try {
			await ContractFormService.deleteUser(user.id);

			setContacts((current) =>
				current.filter((item) => String(item.id) !== String(user.id)),
			);
		} catch (error) {
			console.error(error);
			window.alert("Unable to delete contact.");
		}
	};

	return (
		<div className="container-xl py-4">
			<div className="page-header mb-4">
				<div className="row align-items-center">
					<div className="col">
						<div className="page-pretitle">Admin Console</div>
						<h2 className="page-title">Contact submissions</h2>
						<p className="text-secondary mb-0 mt-1">
							Manage your website contacts.
						</p>
					</div>

					<div className="col-auto">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								setSelectedUser(null);
								setIsCreating(true);
							}}
						>
							+ Add contact
						</button>
					</div>
				</div>
			</div>

			<div className="card">
				<div className="card-header d-flex align-items-center justify-content-between">
					<h3 className="card-title mb-0">All contacts</h3>
					<span className="badge bg-blue-lt">{contacts.length} records</span>
				</div>

				<ContactTable
					contacts={contacts}
					loading={loading}
					error={error}
					onEdit={setSelectedUser}
					onDelete={handleDelete}
				/>
			</div>

			{(selectedUser || isCreating) && (
				<div
					className={styles.modalOverlay}
					onMouseDown={(event) => {
						if (event.target === event.currentTarget) closeForm();
					}}
				>
					<div
						className={styles.modalContent}
						role="dialog"
						aria-modal="true"
						aria-label={selectedUser ? "Edit contact" : "Add contact"}
					>
						<div className="text-end mb-3">
							<button
								type="button"
								className="btn btn-outline-secondary btn-sm"
								onClick={closeForm}
							>
								Close
							</button>
						</div>

						<UserPage
							key={selectedUser?.id ?? "new-contact"}
							user={selectedUser}
							onUpdateSuccess={handleSave}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default AdminPage;
