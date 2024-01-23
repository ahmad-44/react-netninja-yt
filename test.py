# Online Python - IDE, Editor, Compiler, Interpreter

def roi(initial, months):
    sum = initial
    yearly = {}
    for i in range(months):
        sum = sum + sum * 0.1
        print(f'Month {(i+1)}: {sum//1}')
        if (i+1) % 12 == 0:
            yearly[f"year {(i+1)//12}"] = sum//1
    print('_____________')
    print('')
    return yearly


print(roi(1000000, 36))
print('_____________')