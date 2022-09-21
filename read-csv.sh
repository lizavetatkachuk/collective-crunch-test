#!/bin/bash

#set env variables as bash variables
set -o allexport
source .env
set +o allexport

#log in postgres and switch to desired database
psql -U postgres -d ${DB_NAME} 
# -c "COPY ${TABLE_NAME}(stand_id,longitude,latitude,main_species,vol_m3_per_ha,age_years,size_in_ha) FROM './sample.csv' DELIMITER ',' CSV HEADER;"
psql \copy forest FROM './sample.csv' csv header;