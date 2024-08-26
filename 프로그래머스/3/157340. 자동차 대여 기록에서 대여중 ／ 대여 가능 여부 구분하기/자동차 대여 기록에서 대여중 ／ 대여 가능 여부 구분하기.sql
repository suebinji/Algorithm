-- 코드를 입력하세요
SELECT CAR_ID , max(case when '20221016' between to_char(start_date, 'YYYYMMDD') and to_char(end_date, 'YYYYMMDD') then '대여중' else '대여 가능' end) as AVAILABILITY
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
where 1=1
group by car_id
order by car_id desc
