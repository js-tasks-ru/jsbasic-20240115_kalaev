function makeFriendsList(friends) {
    let ul = document.createElement(`ul`); //создали новый элемент ul
    for (let item of friends) {//перебрали объекты массива
        let li = document.createElement(`li`); //внутри цикла создаем новый элемент
        li.innerHTML = `${item.firstName} ${item.lastName}`; //устанавливаем текстовое содержимое знак `$` нам в помощь
        ul.appendChild(li); //appendChild возмет всех детей в ul
    }
    return ul;
}
