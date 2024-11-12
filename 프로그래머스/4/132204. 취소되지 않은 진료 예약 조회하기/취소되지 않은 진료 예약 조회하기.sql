-- 코드를 입력하세요

select B.APNT_NO,	A.PT_NAME,	A.PT_NO, C.MCDP_CD, C.DR_NAME,	APNT_YMD 
from PATIENT  A,
APPOINTMENT  B ,
DOCTOR  C
where to_char(APNT_YMD,'YYYY-MM-DD') = '2022-04-13'
and apnt_cncl_yn= 'N'
and C.MCDP_CD ='CS'
and A.PT_NO = B.PT_NO
and C.DR_ID = B.MDDR_ID
order by APNT_YMD