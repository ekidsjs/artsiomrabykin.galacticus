function run(){
    const rightAnswers= ['2', '1','3','1','3', ];
    const userAnswers= [];
    let raiting=0;
    let status='';
    const name=prompt("Введите свое имя:","пиши тебе придётся");
    const years=prompt("Сколько вам лет?", '12 Выбора у тебя нет');
    userAnswers[0]=prompt("Луна это планета? \n1. Да\n2. нет",'я знаю что ты');
    userAnswers[1]=prompt("Из чего состоит солнце? \n1. Из газа\n2. Изо льда \n3.  Из ваты",'1 ответ был не правельный-_-');
    userAnswers[2]=prompt("Какой по счету марс от солце? \n1. 1-й\n2. 3-й\n3. 4-й",'и 2 не правельный:(');
    userAnswers[3]=prompt(" есть ли урана кольца? \n1. Да\n2. нет",'Поздровляю 3 правельный уху!');
    userAnswers[4]=prompt("Какая самая большая планета солнечной системы? \n1. Земля\n2. Луна \n3. Юпитер \n4. сатурн",'Подскаска: САТУРН');
    if (rightAnswers[0] === userAnswers[0]) {
        raiting += 1;
    }
    if (rightAnswers[1] === userAnswers[1]) {
        raiting += 1;
    }
    if (rightAnswers[2] === userAnswers[2]) { 
        raiting += 1;
    }
    if (rightAnswers[3] === userAnswers[3]) {
        raiting += 1;
    }
    if(rightAnswers[4] === userAnswers[4]) {
        raiting += 1;
    }
    if(raiting <= 2){
        status='Ты мало знаеш о космосе, читай книги!!!!!!!';
    }
    else if(raiting < 5){
        status='Ты довльно хорошо знаеш космос, продолжай читат книги!!!!' ; 
    }
    else{
        status='Ты знаеш о нашей голактике проктически всё, На тему 4 класса :) Молодец!';
    }
    alert(`Привет, ${name}! Тебе уже  ${years} лет и ${status}`);
}