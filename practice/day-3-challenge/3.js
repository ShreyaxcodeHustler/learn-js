/*Grade calculator (switch)
Write a function getGrade(score) using switch (with fall-through where it makes sense) that returns:

90-100 → "A"
80-89 → "B"
70-79 → "C"
below 70 → "F"

(Hint: switch normally checks exact matches — you'll need switch (true) with case conditions to make ranges work. 
Look this pattern up if it's new to you, it's a common trick.)*/
function getGrade(score){

        switch(true){//swtich(true) helps evaluate case to boolean to make it easier to evaluate
            case score>=90:
                return "A"
            case score>=80:
                return "B"
            case score>=70:
                return "C"
                
            case score<=70:
                return "F"
            default:
                return "Invlalid input"

        }
    }
console.log(getGrade(80));