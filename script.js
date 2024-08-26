let autoplay=0;
    //let rand;
    let choice;
    //let cmp;
    let result;

    document.addEventListener('keydown',()=>{
      //document.getElementById('help').innerHTML='';
      let randk=generate();
      let choicek;
      
      if(event.key=='r'){
      choicek='Rock';
      compare(randk,choicek);
      }
      else if(event.key=='p'){
      choicek='Paper';compare(randk,choicek);
      }
      else if(event.key=='s'){
      choicek='Scissors';
      compare(randk,choicek);
      }
      //else
      //document.getElementById('help').innerHTML='Invalid input\nr for rock\np for Paper\ns for Scissors';

      else if(event.key=='Backspace'){
        document.getElementById('help').innerHTML=
        '<p>Are you sure you want to reset the score?<button id="yes">Yes</button><button id="no">No</button></p>';
        document.getElementById('yes').addEventListener('click',()=>{console.log('yes'); score.Win=0;
          score.Lose=0;score.Tie=0;
          localStorage.removeItem('score');
          reset();
          document.getElementById('help').innerHTML='';})
        document.getElementById('no').addEventListener('click',
          ()=>{document.getElementById('help').innerHTML='';})
      }
    })
  

    let score=JSON.parse(localStorage.getItem('score'))||{Win:0,Lose:0,Tie:0};
        
    document.querySelector('#scoreboard').innerHTML=`Wins:${score.Win},Losses:${score.Lose},Ties${score.Tie}`;
    
    function generate(){
        let cmp,rand;
        cmp=Math.floor(Math.random()*3)
        if(cmp==0){
        rand='Rock'
        }
        else if(cmp==1){
        rand='Paper';
        }
        else{
        rand='Scissors';
        }
        return rand;
    }

    function compare(rand,choice){
        if(rand=='Rock'&&choice=='Paper'){
            score.Win++;
            result='You win';
            }
            else if(rand=='Rock'&&choice=='Scissors'){
            score.Lose++;
            result='You Lose';
            }
            else if(rand=='Paper'&&choice=='Rock'){
            score.Lose++;
            result='You Lose';
            }
            else if(rand=='Paper'&&choice=='Scissors'){
            score.Win++;
            result='You win';
            }
            else if(rand=='Scissors'&&choice=='Rock'){
            score.Win++;
            result='You win';
            }
            else if(rand=='Scissors'&&choice=='Paper'){
            score.Lose++;
            result='You Lose';
            }
            else{
            score.Tie++;
            result='Tie';
            }
            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('#livescore').innerHTML=`${result}.`
            document.querySelector('#moves').innerHTML=`You <img src="Rock Paper Scissors_files/${choice}-emoji.png">  <img src="Rock Paper Scissors_files/${rand}-emoji.png">Computer`;
            document.querySelector('#scoreboard').innerHTML=
            `Wins:${score.Win},Losses:${score.Lose},Ties:${score.Tie}`;
    }

    function reset(){
        document.querySelector('#scoreboard').innerHTML=
        `Wins:${score.Win},Losses:${score.Lose},Ties${score.Tie}`;
    }


let id;
    function auto(){
        let autoC,autoI;
        if(autoplay==0){
            document.getElementById('auto').innerHTML='Stop Auto-play';
            id=setInterval(function() {
                            autoplay=1;
                            autoC=generate();
                            autoI=generate()
                            compare(autoC,autoI);
                        },1000) ;
        }
        else{
        clearInterval(id);
        document.getElementById('auto').innerHTML='Auto-play';
        autoplay=0;
        }
    }