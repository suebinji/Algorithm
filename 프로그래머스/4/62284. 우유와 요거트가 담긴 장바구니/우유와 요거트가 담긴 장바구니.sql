-- 코드를 입력하세요
WITH T1 as ( 
SELECT cart_id, name 
from CART_PRODUCTS 
group by cart_id, name
having name like '%Yogurt%'
or name like '%Milk%'
order by 1
) 
select cart_id--, count(*) 
from T1 
group by cart_id
having count(*) >= 2
order by 1
