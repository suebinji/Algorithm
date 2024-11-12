WITH TotalRecords AS (
    SELECT 
        car_id,
        COUNT(*) AS total_rentals
    FROM 
        CAR_RENTAL_COMPANY_RENTAL_HISTORY
    WHERE 
        start_date >= TO_DATE('2022-08-01', 'YYYY-MM-DD') 
        AND start_date <= TO_DATE('2022-10-31', 'YYYY-MM-DD')
    GROUP BY 
        car_id
    HAVING 
        COUNT(*) >= 5  -- 전체 기간 내 대여 횟수가 5회 이상인 차량 필터링
)
SELECT 
    EXTRACT(MONTH FROM start_date) AS month,  -- 월을 숫자로 추출 (앞에 0이 붙지 않음)
    h.car_id,
    COUNT(*) AS records
FROM 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY h
JOIN 
    TotalRecords t ON h.car_id = t.car_id  -- 대여 횟수 5회 이상 차량만 선택
WHERE 
    start_date >= TO_DATE('2022-08-01', 'YYYY-MM-DD') 
    AND start_date <= TO_DATE('2022-10-31', 'YYYY-MM-DD')
GROUP BY 
    EXTRACT(MONTH FROM start_date), h.car_id
ORDER BY 
    month ASC, 
    h.car_id DESC;
