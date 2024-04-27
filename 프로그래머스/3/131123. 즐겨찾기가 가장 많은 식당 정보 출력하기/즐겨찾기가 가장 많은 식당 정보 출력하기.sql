-- 코드를 입력하세요
WITH maxFavTab AS (
   SELECT food_type, max(favorites) as maxF
   FROM rest_info
   group by food_type
)
SELECT a.food_type, rest_id, rest_name, a.favorites
from rest_info a
join maxFavTab b
on a.food_type = b.food_type and a.favorites = b.maxF
group by a.food_type
order by a.food_type desc
/*
WITH MaxFavorites AS (
    SELECT FOOD_TYPE, MAX(FAVORITES) AS MaxFav
    FROM REST_INFO
    GROUP BY FOOD_TYPE
)
SELECT r.FOOD_TYPE, r.REST_ID, r.REST_NAME, r.FAVORITES
FROM REST_INFO r
JOIN MaxFavorites mf ON r.FOOD_TYPE = mf.FOOD_TYPE AND r.FAVORITES = mf.MaxFav
ORDER BY r.FOOD_TYPE DESC;*/