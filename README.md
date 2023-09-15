Qus 1 : 

3 Freatures are here : 

• This project is a programming course registration project .
• This project create by react jsx and tailwindcss.
• This project simple and beautiful simple to code .


Qus 2 : 

I use two hook in react to make this project.discuss react hook how i manage :

useSate hook : first i create a useState hook . the useSate hook takes two arguments firstly take current state and second take a update state and useSate hook defiend then initial value . example : const [name , setName] = useSate([]).here is initial value is empty array cause i handle load data from useEffect hook . if my fetch data is empty then return empty array .


useEffect hook : second i create useEffect hook to load data , useEffect hook take two arguments one arguments is callback funcation and second arguments is dependency. callback is a function that contains the side-effect logic. callback is executed right after the Dom update. useEffect runs every render and when useEffect fetch the datas then take useSate hook and then use the states.


then again i used UseSate hook to manage the clicked button actions . 