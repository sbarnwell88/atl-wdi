TRUNCATE TABLE APARTMENT;
TRUNCATE TABLE OFFICE;
TRUNCATE TABLE STOREFRONT;

ALTER SEQUENCE apartment_id_seq RESTART WITH 1;
ALTER SEQUENCE office_id_seq RESTART WITH 1;
ALTER SEQUENCE storefront_id_seq RESTART WITH 1;

INSERT INTO apartment(apartment_number, number_bedrooms, number_bathrooms, address, tenant, occupied_status, sq_ft, price) VALUES (1000, 1, 1, '1200 Highland Ave', 'Danny Hurley', TRUE, 1000, 1500);
INSERT INTO apartment(apartment_number, number_bedrooms, number_bathrooms, address, tenant, occupied_status, sq_ft, price) VALUES (1001, 2, 2, '1200 Highland Ave', 'Jamie King', TRUE, 2000, 2500);

INSERT INTO office(office_number, address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES (15, '2000 Roswell Rd', FALSE, 3000, TRUE, 4000, 'Jon Doe', FALSE);
INSERT INTO office(office_number, address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES (13, '2000 Roswell Rd', TRUE, 6000, FALSE, 5000, 'Jane Doe', TRUE);

INSERT INTO storefront(address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES ('1250 Lenox Rd', TRUE, 2500, TRUE, 2000, 'Gob Bluth', FALSE);
INSERT INTO storefront(address, occupied_status, price, kitchen_available, sq_ft, owner, outdoor_seating) VALUES ('1250 Lenox Rd', FALSE, 3000, FALSE, 4000, 'Buster Bluth', TRUE);


