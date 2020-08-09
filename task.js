const chat = document.getElementsByClassName("chat-widget");
const input = document.getElementsByClassName("chat-widget__input");
const chatContainer = document.getElementsByClassName("chat-widget__messages-container");

chat[0].addEventListener("click", () =>{
    chat[0].classList.add("chat-widget_active");
});

input[0].addEventListener("keyup", (event) =>{
    if(event.keyCode == 13){
        event.preventDefault();
        let date = new Date();
        if (input[0].value) {
            chatContainer[0].innerHTML += 
                `<div class="message message_client">
                    <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
                    <div class="message__text">
                        ${input[0].value}
                    </div>
                </div>`;
            input[0].value = "";
            printMessageBot();
        }
    }
})

function getMessage() {
    const messages = [
        'Ожидайте связи с оператором',
        'Вам здесь не рады',
        'Вы вообще кто такой',
        'Привет, Олег',
        'Алохамора',
        'Тихамат',
        'Безусловно ваше мнение очень важно для нас, ожидайте 40 лет',
        'Вареники с вишней очень вкусные',
        'Привет',
        'Добрый вечер, дорогой пользователь',
        'Я ваш персональный помошник по всем вопросам'
      ],
      index = Math.floor(Math.random() * messages.length);

    return messages[index];
  }

function printMessageBot() {
    let date = new Date();
    chatContainer[0].innerHTML += 
                `<div class="message">
                    <div class="message__time">${date.getHours() + ":" + date.getMinutes()}</div>
                    <div class="message__text">
                        ${getMessage()}
                    </div>
                </div>`;
}