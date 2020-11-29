cd C:\Users\%username%\Desktop
if exist print (
    echo print existe;
) else (
    mkdir print;

)
SET toPrint
for %f in (.\*) do toPrint

//mspaint /pt greyfax.png