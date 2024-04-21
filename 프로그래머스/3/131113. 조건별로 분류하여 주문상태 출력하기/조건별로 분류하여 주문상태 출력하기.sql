-- 코드를 입력하세요
SELECT order_id, product_id, date_format(out_date,'%Y-%m-%d') as out_date, -- date_format(out_date, '%Y%m%d') <= '20220501',
case when date_format(out_date, '%Y%m%d') <= '20220501' =1 then '출고완료'
when date_format(out_date, '%Y%m%d') <= '20220501' =0 then '출고대기'
else '출고미정' end as '출고여부'
from food_order 
order by order_id