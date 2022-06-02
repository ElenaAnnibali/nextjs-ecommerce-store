const bicycles = [
  {
    name: 'Viner Schnitzel',
    type: 'racing bike',
    status:
      'Old and charming, just like your granmas coat. Perfect for your everyday errands, you will look fancy without making any efforts. Just like with your granmas coat.',
    price: 150,
    in_stock_quantity: 2,
  },
  {
    name: 'Max Aluminium',
    type: 'city bike',
    status:
      'Super light, super fast. Almost never used, it desperately need a new owner. Give it a ride. I mean, try.',
    price: 300,
    in_stock_quantity: 3,
  },
  {
    name: 'Georgina Funky',
    type: 'city bike',
    status:
      'Take a look at those gorgeous tires and you will instantly fall in in love with Georgina. Of course you will do, everybody loves a good old Georgina.',
    price: 100,
    in_stock_quantity: 2,
  },
  {
    name: 'Etienne Etage',
    type: 'racing bike',
    status:
      'Old but good, oh so good. Pair it with a pipe and a baguette: Paris will feel right on the corner.',
    price: 200,
    in_stock_quantity: 1,
  },
  {
    name: 'Virginia Ladybug',
    type: 'city bike',
    status:
      'Minimalistic and elegant, but also solid like your parents new years supper. The only difference: no worries for indigestion, you will never get enough of our Virginia.',
    price: 250,
    in_stock_quantity: 2,
  },
  {
    name: 'Jolanda Freak',
    type: 'city bike',
    status:
      'You never go unnoticed with Jolanda. There is enough room for your groceries and your dog to be carried with, unless your dog is a great dane.',
    price: 100,
    in_stock_quantity: 4,
  },
  {
    name: 'Kelly from the Block',
    type: 'city bike',
    status:
      'An old lady, but still in perfect shape. Perfect for a lazy sundays ride. Bonus: if you dream about Kelly, she will bring you to the moon. ET style.',
    price: 100,
    in_stock_quantity: 2,
  },
];

exports.up = async (sql) => {
  await sql`
	  INSERT INTO bicycles ${sql(
      bicycles,
      'name',
      'type',
      'status',
      'price',
      'in_stock_quantity',
    )}

	`;
};

exports.down = async (sql) => {
  for (const bicycle of bicycles) {
    await sql`
	  DELETE FROM
		  bicycles
		WHERE
		  name = ${bicycle.name} AND
			type = ${bicycle.type} AND
			status = ${bicycle.status} AND
			price = ${bicycle.price} AND
			in_stock_quantity = ${bicycle.in_stock_quantity}
	`;
  }
};
