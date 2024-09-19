aa = int(input())

if (aa % 400 == 0) or (aa % 4 == 0 and aa % 100 != 0):
	print(1)
else :
	print(0)