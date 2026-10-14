import { useState } from "react";
import styles from "./ContactTable.module.css";

const ContactTable = ({ contacts, loading, error, onEdit, onDelete }) => {
	const [search, setSearch] = useState("");

	const query = search.trim().toLowerCase();

	const filteredContacts = contacts.filter((user) =>
		[user.name, user.email, user.phone].some((value) =>
			String(value ?? "")
				.toLowerCase()
				.includes(query),
		),
	);

	return (
		<>
			<div className={styles.toolbar}>
				<div className={styles.searchBox}>
					<input
						type="search"
						className="form-control"
						placeholder="Search contacts..."
						aria-label="Search contacts by name, email or phone"
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					/>

					{search && (
						<button
							type="button"
							className={styles.clearButton}
							onClick={() => setSearch("")}
							aria-label="Clear search"
							title="Show all contacts"
						>
							×
						</button>
					)}
				</div>
			</div>

			<div className={styles.tableWrapper}>
				<table className="table table-vcenter table-hover mb-0">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Message</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{loading ? (
							<tr>
								<td colSpan={6} className="text-center py-4">
									Loading contacts...
								</td>
							</tr>
						) : error ? (
							<tr>
								<td colSpan={6} className="text-center text-danger py-4">
									{error}
								</td>
							</tr>
						) : filteredContacts.length === 0 ? (
							<tr>
								<td colSpan={6} className="text-center text-secondary py-4">
									{query ? "No matching contacts." : "No contacts found."}
								</td>
							</tr>
						) : (
							filteredContacts.map((user) => (
								<tr key={user.id}>
									<td className="text-secondary">{user.id}</td>
									<td className="fw-medium">{user.name}</td>
									<td>{user.email}</td>
									<td>{user.phone || "—"}</td>
									<td className={styles.messageCell}>{user.message || "—"}</td>
									<td>
										<div className={styles.actions}>
											<button
												type="button"
												className="btn btn-outline-primary btn-sm"
												onClick={() => onEdit(user)}
											>
												Edit
											</button>

											<button
												type="button"
												className="btn btn-outline-danger btn-sm"
												onClick={() => onDelete(user)}
											>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ContactTable;
