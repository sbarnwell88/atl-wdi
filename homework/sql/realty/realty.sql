1. SELECT AVG(sq_ft) FROM office;
2. SELECT COUNT (*) FROM apartment;
3. SELECT apartment_number FROM apartment WHERE (tenant = '') IS NOT FALSE;
4. SELECT company_name FROM office;
5. SELECT *, cubicles+number_bathrooms as total FROM office;
6. SELECT * from storefront WHERE kitchen_available = TRUE;
7. SELECT * FROM storefront WHERE outdoor_seating = TRUE ORDER BY sq_ft DESC;
8. SELECT * FROM office ORDER BY cubicles ASC;
9. SELECT * FROM office ORDER BY cubicles, number_bathrooms ASC;