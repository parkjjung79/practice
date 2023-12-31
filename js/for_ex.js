// for문 연습1 : 외부JS파일 - for_ex.js
// js외부파일은 html 문서에 직접 들어가 작동되므로
// css처럼 'utf-8' 인코딩 설정이 필요없음!

// 1. 이벤트 대상선정 ////////////////////////

// 1-1. 이벤트 대상: 미니언즈
var mini = document.querySelector('.mini');


// 1-2. 출력대상: 파란박스
var blue_box = document.querySelector('.Bcase');

console.log('미니언즈:',mini,blue_box);




// 2. 이벤트 연결하기 ////////////////////////////

// 2-1. 미니언즈 이미지 클릭시 넣기함수 호출
// mini[0].onclick = insertMini;
// mini[0].addEventListener('click',insertMini);
// mini[1].addEventListener('click',insertMini);
// mini[2].addEventListener('click',insertMini);
// -> 이 요소에 클릭이벤트를 등록하는데, 함수와 연결하려하는 것임

// 기본 for문으로 반복하여 개수만큼 이벤트 셋팅하기
// for(시;한;증){코드}
// 시한증->(0부터 시작; 개수보다 작을떄까지 반복 ; 1씩 증가)
for(var i=0;i<mini.length;i++){
    mini[i].addEventListener('click',insertMini);

    console.log('for문내i:',i);
    
} //////////////// for //////////////////

console.log('for문밖i:',i);


// 3. 함수만들기


/************************************ 
        함수명 : insertMini
        기능: 미니언즈 이미지 개수만큼 넣기
************************************/


// 3-1. 미니언즈 넣기 함수
function insertMini(){
    // 1. 호출확인
    console.log('미니넣어',this);


} //////////////////insertMini함수//////////////