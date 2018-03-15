window.onload = function () {
    const empty = ' ';

    const x = 'X';
    const o = 'O';

    var player = x;

    window.board = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty]
    ];

    var addListeners = function () {
        var tds = document.getElementsByTagName('td');
        for (var i = 0; i < tds.length; i++) {
            tds[i].onclick = function () {

                var indexRowNum = Number(this.getAttribute('data-row'));
                var indexColNum = Number(this.getAttribute('data-col'));

                console.log(indexRowNum);
                console.log(indexColNum);

                if (board[indexRowNum][indexColNum] === empty) {
                    board[indexRowNum][indexColNum] = player;

                    if (player === x) {
                        player = o;
                    } else {
                        player = x;
                    }
                    render();
                    addListeners();
                } else {
                    alert('This cell is occupied, please select a different')
                }
            };
        }
        winner();
    };

    window.winner = function () {
        /*строки*/
        if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
            alert(player + ' is winner');
        }
        if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
            alert(player + ' is winner');
        }
        if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
            alert(player + ' is winner');
        }
        /*диагонали*/
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            alert(player + ' is winner');
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            alert(player + ' is winner');
        }
        /*столбцы*/
        if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
            alert(player + ' is winner');
        }
        if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
            alert(player + ' is winner');
        }
        if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
            alert(player + ' is winner');
        }
    };


    window.render = function () {
        var status;
        if (player === x) {
            status = "Ходит: X"
        } else {
            status = "Ходит: O"
        }


        var htmlBoard = '';
        for (var j = 0; j < board.length; j++) {
            var row = board[j];
            var htmlRow = '<tr>';
            for (var i = 0; i < row.length; i++) {
                var rowNumber = j;
                var colNumber = i;

                var tdTemplate = '<td data-row=' + rowNumber + ' data-col=' + colNumber + '>';

                if (row[i] === x) {
                    tdTemplate += 'X';
                }
                if (row[i] === o) {
                    tdTemplate += 'O';
                }
                tdTemplate += '</td>';
                htmlRow += tdTemplate;
            }
            htmlRow += '</tr>';
            htmlBoard += htmlRow;
            console.log(htmlRow);
        }
        document.getElementById('status').innerHTML = status;


        var root = document.getElementById('game');
        root.innerHTML = htmlBoard;
    };
    render();
    addListeners();
    winner();
};

//при нажатии на клетку td ставим класс occupied
// проверяем нет ли у td такого класса
// если есть то выводим "this cell is occupied, please select a different"
//если нет то ставим значок игрока


//после каждого нажатия на клетку нужно проверять не выпала ли выигрышная комбинация
// проверяем board
//(board[0][2]) === "x" && (board[1][1]) === "x" && (board[2][0]) === "x" или все тоже только равно о
//выводить победа по диагонали

//если больше некуда ходить?

//кнопка сброса
//при нажатии на кнопку все элементы массива board становятся empty
