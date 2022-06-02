exports.up = async (sql) => {
  await sql`
	  CREATE TABLE bicycles (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  status varchar(800) NOT NULL,
  price varchar(5) NOT NULL,
  in_stock_quantity varchar(5) NOT NULL
);
	`;
};

exports.down = async (sql) => {
  await sql`
	  DROP TABLE bicycles
	`;
};
