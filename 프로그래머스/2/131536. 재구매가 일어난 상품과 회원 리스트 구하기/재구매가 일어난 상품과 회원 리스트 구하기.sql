-- 코드를 입력하세요
SELECT user_id, product_id
from online_sale
group by user_id, product_id
having count(user_id) >= 2
order by user_id, product_id desc