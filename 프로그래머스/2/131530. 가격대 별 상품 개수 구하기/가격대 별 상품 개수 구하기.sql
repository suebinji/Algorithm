-- 코드를 입력하세요
/*
SELECT product_id, product_code, price,
case when price between 0 and 10000 then '0'
when price between 10000 and 20000 then 10000 
when price between 20000 and 30000 then 20000
when price between 30000 and 40000 then 30000 
else 4 end as price_group,
count(*) as products
from product
group by price_group
order by price_group
limit 3

select price
from product*/

SELECT TRUNCATE(PRICE,-4) AS PRICE_GROUP, COUNT(*) AS PRODUCTS
FROM PRODUCT
GROUP BY TRUNCATE(PRICE,-4)
ORDER BY PRICE_GROUP