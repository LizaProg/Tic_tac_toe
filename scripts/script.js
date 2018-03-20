window.onload = function () {
    const empty = ' ';

    const x = 'X';
    const o = 'O';

    var player = x;

    var board = [
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty]
    ];

    window.info = function () {
        console.log(player);
        console.log(board);
    };

    var addListeners = function () {
        var tds = document.getElementsByTagName('td');
        for (var i = 0; i < tds.length; i++) {
            tds[i].onclick = function () {

                var indexRowNum = Number(this.getAttribute('data-row'));
                var indexColNum = Number(this.getAttribute('data-col'));

                if (board[indexRowNum][indexColNum] === empty) {
                    board[indexRowNum][indexColNum] = player;
                    if (isCurrentPlayerWinner() === true) {
                        render();
                        alert(player + ' is winner');
                        return;
                    }

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
    };

    var isCurrentPl
    ayerWinner = function () {
        var result = false;
        if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
            result = true;
        }
        if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
            result = true;
        }
        if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
            result = true;
        }
        /*диагонали*/
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            result = true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            result = true;
        }
        /*столбцы*/
        if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
            result = true;
        }
        if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
            result = true;
        }
        if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
            result = true;
        }
        return result;
    };


    var render = function () {
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
        }
        document.getElementById('status').innerHTML = status;

        var root = document.getElementById('game');
        root.innerHTML = htmlBoard;
    };

    var restart = function () {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board[i].length; j++) {
                board[i][j] = empty;
            }
        }
        player = x;
        render();
        addListeners();
    };

    var btn = document.getElementById('btnRestart');
    btn.onclick = restart;

    render();
    addListeners();
};


