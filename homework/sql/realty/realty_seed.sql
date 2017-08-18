TRUNCATE TABLE APARTMENT;
TRUNCATE TABLE OFFICE;
TRUNCATE TABLE STOREFRONT;

ALTER SEQUENCE apartment_id_seq RESTART WITH 1;
ALTER SEQUENCE office_id_seq RESTART WITH 1;
ALTER SEQUENCE storefront_id_seq RESTART WITH 1;

INSERT INTO apartment(apartment_number, number_bedrooms, number_bathrooms, address, tenant, occupied_status, sq_ft, price) VALUES (1000, 1, 1, '1200 Highland Ave', 'Danny Hurley', TRUE, 1000, 1500);
INSERT INTO apartment(apartment_number, number_bedrooms, number_bathrooms, address, tenant, occupied_status, sq_ft, price) VALUES (1001, 2, 2, '1200 Highland Ave', 'Jamie King', TRUE, 2000, 2500);

INSERT INTO office(office_number, number_floors, sq_ft, cubicles, number_bathrooms, address, company_name, occupied_status, price) VALUES (15, 3, 4000, 20, 2, '2000 Roswell Rd', 'Bluth Realty', FALSE, 3000);
INSERT INTO office(office_number, number_floors, sq_ft, cubicles, number_bathrooms, address, company_name, occupied_status, price) VALUES (13, 5, 2500, 10, 1, '2000 Roswell Rd', 'Banana Stand',, TRUE, 6000);

INSERT INTO storefront(address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES ('1250 Lenox Rd', TRUE, 2500, TRUE, 2000, 'Gob Bluth', FALSE);
INSERT INTO storefront(address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES ('1250 Lenox Rd', FALSE, 3000, FALSE, 4000, 'Buster Bluth', TRUE);


