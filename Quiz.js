function displayAnswer() {
    const radios = document.getElementsByName('quiz');
    let selectedValue = '';
    for (let radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break;
        }
    }

    const answer = document.getElementById('answer');
    if (selectedValue === '焼きそばパン') {
        answer.textContent = '正解！食べられないパンは焼きそばパン！';
    } else if (selectedValue) {
        answer.textContent = '不正解！もう一度考えてみて！';
    } else {
        answer.textContent = '選択肢を選んでください。';
    }
    answer.style.display = 'block';
    
}