//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호 < 유저번호 Down!
//유저번호 < 랜덤번호 Up!
//Reset 버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다

let RandomNum = 0
let PlayButton = document.getElementById("play-button")
let UserInput = document.getElementById("user-input")
let ResultArea = document.getElementById("result-area")
PlayButton.addEventListener("click",play)
function PickRandomNum(){
    RandomNum = Math.floor(Math.random()*100)+1
    console.log("정답",RandomNum)
}
function play(){
    let UserValue = UserInput.value
    if(UserValue < RandomNum){
        ResultArea.textContent = "Up!!!"
    }else if(UserValue > RandomNum){
        ResultArea.textContent = "DOWN!!!"
    }else{
        ResultArea.textContent = "맞췄습니다!!!"
    }
}
PickRandomNum()