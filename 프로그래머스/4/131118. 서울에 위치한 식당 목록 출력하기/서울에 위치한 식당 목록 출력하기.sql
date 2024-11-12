-- 코드를 입력하세요
SELECT A.REST_ID,	A.REST_NAME,	A.FOOD_TYPE,	A.FAVORITES,	A.ADDRESS, 
round(avg(review_score),2) as score
from REST_INFO A, REST_REVIEW B
where 1=1
and A.REST_ID = B.REST_ID
and A.address like '서울%'
group by A.rest_id
order by score desc, A.FAVORITES desc