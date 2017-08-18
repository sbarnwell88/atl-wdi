drop table if exists storefront;
drop table if exists office;
drop table if exists apartment;

CREATE TABLE apartment (
    id serial primary key,
    apartment_number integer,
    number_bedrooms integer,
    number_bathrooms integer,
    address varchar not null,
    tenant varchar,
    occupied_status boolean,
    sq_ft integer,
    price integer
);

CREATE TABLE office (
    id serial primary key,
    office_number integer,
    number_floors integer,
    sq_ft integer,
    cubicles integer,
    number_bathrooms integer,
    address varchar not null,
    company_name varchar,
    occupied_status boolean,
    price integer
);

CREATE TABLE storefront (
    id serial primary key,
    address varchar,
    occupied_status boolean,
    price integer,
    kitchen_available boolean,
    sq_ft integer,
    owner varchar,
    outdoor_seating boolean NOT NULL DEFAULT FALSE
);
