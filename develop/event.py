a=[]
count=0
flag=0

name=input("enter your name")
if name not in a:
   a.append(name)
   print(a)
   count=count++
   flag=1
else:
  print("This name is already exists")

rollno=int(input("enter your rollno"))
b=[]
if(rollno not in b):
    print("your rollno is successfully entered")
    b.append(rollno)

college=[]
coll=input("enter your college name")
college.append(coll)

if(flag=1):
    print("your registration process is successful")

    
