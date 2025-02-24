import { pgTable, unique, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"




export const usersTable = pgTable("users_table", {
	id: text("id").primaryKey().notNull(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	plan: text("plan"),
	stripeId: text("stripe_id").notNull(),
},
(table) => {
	return {
		usersTableEmailUnique: unique("users_table_email_unique").on(table.email),
	}
});