1. SELECT name, population  FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;
Holy See (Vatican City)

2. SELECT "language" FROM countrylanguage WHERE countrycode = 'VAT';
Italian

3. SELECT * FROM countrylanguage WHERE "language" = 'Italian';
SELECT * FROM country WHERE code = 'SMR';
SMR
San Marino

4. SELECT * FROM city WHERE countrycode = 'SMR';
Serravalle

5. SELECT * FROM city WHERE name ILIKE '%serra%';
Serra, BRA

6. SELECT capital FROM country WHERE code = 'BRA';
211
SELECT * FROM city WHERE id = 211;
Brasilia

7. SELECT name, district FROM city WHERE population = 91084;
Santa Monica, California



