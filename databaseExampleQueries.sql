-- Thhis file is not going to be run
-- just example queries

CREATE TABLE bikes (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(50) NOT NULL,
  type varchar(50) NOT NULL,
  status varchar(800) NOT NULL,
  price varchar(5) NOT NULL,
  in_stock_quantity varchar(5) NOT NULL
);


-- inserting some bikes into the database
INSERT INTO bikes
  (name, type, status, price, in_stock_quantity)
VALUES
  ( 'Viner Schnitzel', 'racing bike', 'Old and charming, just like your granmas coat. Perfect for your everyday errands, you will look fancy without making any efforts. Just like with your granmas coat.', 150, 2 ),
  ( 'Max Aluminium', 'city bike', 'Super light, super fast. Almost never used, it desperately need a new owner. Give it a ride. I mean, try.', 300, 3 ),
  ( 'Georgina Funky', 'city bike', 'Take a look at those gorgeous tires and you will instantly fall in in love with Georgina. Of course you will do, everybody loves a good old Georgina.', 100, 2) ,
  ( 'Etienne Etage', 'racing bike', 'Old but good, oh so good. Pair it with a pipe and a baguette: Paris will feel right on the corner.', 200, 1 ),
  ( 'Virginia Ladybug', 'city bike', 'Minimalistic and elegant, but also solid like your parents new years supper. The only difference: no worries for indigestion, you will never get enough of our Virginia.', 250, 2) ,
  ( 'Jolanda Freak', 'city bike', 'You never go unnoticed with Jolanda. There is enough room for your groceries and your dog to be carried with, unless your dog is a great dane.', 100, 4 ),
  ( 'Kelly from the Block', 'city bike', 'An old lady, but still in perfect shape. Perfect for a lazy sundays ride. Bonus: if you dream about Kelly, she will bring you to the moon. ET style.', 100, 2
);

SELECT * FROM bikes;
