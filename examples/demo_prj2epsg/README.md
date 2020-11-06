# prj2epsg

## create sql

```sql
shp2pgsql -s SRID nyc_census_blocks.shp >> nyc_census_blocks.sql;
shp2pgsql -s SRID nyc_homicides.shp >> nyc_homicides.sql;
shp2pgsql -s SRID nyc_streets.shp >> nyc_streets.sql;
shp2pgsql -s SRID nyc_subway_stations.shp >> nyc_subway_stations.sql

```