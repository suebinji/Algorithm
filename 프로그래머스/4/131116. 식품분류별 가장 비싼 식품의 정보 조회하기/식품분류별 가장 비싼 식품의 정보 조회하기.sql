-- 코드를 입력하세요

SELECT CATEGORY, price as max_price, product_name
from FOOD_PRODUCT 
where category in ('과자', '국', '김치', '식용유')
and price in (select max(price)
from FOOD_PRODUCT
group by CATEGORY)
order by max_price desc

