class Player {
 
    score = 0;
    balls = [];
  
    hit() {
      let run = Math.floor(Math.random() * 6);
      this.score += run;
      this.balls.push(run);
      return run;
    }
  }

let table=document.getElementById('team1Table')
let table2=document.getElementById('team2Table')
console.log('hello')
// table.rows[1].cells[1].innerText='hello'
function timerStart(){

}
let ballNo=1
let p=new Player()
let i=1
let j=1
let sum=0
let sumTeamOne=0
let teamOneEachPlayer=[]
let teamTwoEachPlayer=[]
let startInt=setInterval(start,1000);
let counterSec=0
let counterMin=0
function start(){
    counterSec++
    if(counterSec==60){
        counterSec=0
        counterMin++
    }
    document.getElementById('seconds').innerHTML=counterSec.toString()
    document.getElementById('minutes').innerHTML=counterMin.toString()
    
}
function team1hit(){
    let run=p.hit()
    sum+=run
    
    if(i<=11){
        table.rows[i].cells[7].innerText=sum
        if(run==0){
            sumTeamOne+=sum
            teamOneEachPlayer.push(sum)
            sum=0
            if(j>=6){
                j=1;
                i++;
            } 
            console.log(run)
            table.rows[i].cells[j].innerText=run;
            i++
            j=1
        }else{
            table.rows[i].cells[j].innerText=run
            console.log(run)
            if(j>=6){
                sumTeamOne+=sum
                teamOneEachPlayer.push(sum)
                sum=0
                j=1;
                i++;
            }else{
                j++;
            }
        }
    }else{
        window.alert('team 1 is over')
    }
    document.getElementById("tOneScore").innerHTML=sumTeamOne
}

let a=1
let b=1
sum=0
let sumTeamTwo=0
function team2hit(){
    let run=p.hit()
    sum+=run
    
    if(a<=11){
        table2.rows[a].cells[7].innerText=sum
        if(run==0){
            sumTeamTwo+=sum
            teamTwoEachPlayer.push(sum)
            sum=0
            if(b>=6){
                b=1;
                a++;
            } 
            console.log(run)
            table2.rows[a].cells[b].innerText=run;
            a++
            b=1
        }else{
            table2.rows[a].cells[b].innerText=run
            console.log(run)
            if(b>=6){
                sumTeamTwo+=sum
                teamTwoEachPlayer.push(sum)
                sum=0
                b=1;
                a++;
            }else{
                b++;
            }
        }
    }else{
        clearInterval(startInt)
        window.alert('team 2 is over')
    }
    document.getElementById("tTwoScore").innerHTML=sumTeamTwo
}

let teamOne={}
let teamTwo={}
let x=1
let third
let second
let first
let firstName
let secondName
let y=0
function gen(){
    let max=0
    if(sumTeamOne>sumTeamTwo){
        teamOneEachPlayer.forEach(x => {
            y++
            let name="PLAYER "+y
            teamOne[x]=name
            if(x>max){
                second=max
                first=x
                max=x
        }    
        });
    }else{
        teamTwoEachPlayer.forEach(x => {
            y++
            let name="PLAYER "+y
            teamOne[x]=name
            if(x>max){
                second=max
                first=x
                max=x
        }    
        });
    }
    let temp=Object.values(teamOne)
    console.log(temp)
    // console.log(,temp[temp.length-2])
    document.getElementById('first').innerHTML=temp[temp.length-1]
    document.getElementById('second').innerHTML=temp[temp.length-2]
}




