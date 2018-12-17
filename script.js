$(document).ready(function () {


    let check;
    $('.place').each(function (ind, el) { //index elementa, i samui element
        check = true;
        $(el).one('click', function () {
            if (check) {
                $(el).append(`<img src="X.png" alt="">`).addClass('chackedByX');
                $('#player1').css({
                    display: 'none'
                })
                $('#player2').css({
                    display: 'inline-block'
                })
                check = false;
            } else if (check == false) {
                $(el).append(`<img src="O.png" alt="">`).addClass('chackedByO');
                $('#player2').css({
                    display: 'none'
                })
                $('#player1').css({
                    display: 'inline-block'
                })
                check = true;
            }

            if ($("body").find('.place').eq(0).is('.chackedByX') && $("body").find('.place').eq(1).is('.chackedByX') && $("body").find('.place').eq(2).is('.chackedByX')) { //winner horizontal
                winnerPlayer1()
            } else if ($("body").find('.place').eq(0).is('.chackedByO') && $("body").find('.place').eq(1).is('.chackedByO') && $("body").find('.place').eq(2).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(3).is('.chackedByX') && $("body").find('.place').eq(4).is('.chackedByX') && $("body").find('.place').eq(5).is('.chackedByX')) {
                winnerPlayer1()
            } else if ($("body").find('.place').eq(3).is('.chackedByO') && $("body").find('.place').eq(4).is('.chackedByO') && $("body").find('.place').eq(5).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(6).is('.chackedByX') && $("body").find('.place').eq(7).is('.chackedByX') && $("body").find('.place').eq(8).is('.chackedByX')) {
                winnerPlayer1()
            } else if ($("body").find('.place').eq(6).is('.chackedByO') && $("body").find('.place').eq(7).is('.chackedByO') && $("body").find('.place').eq(8).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(0).is('.chackedByX') && $("body").find('.place').eq(3).is('.chackedByX') && $("body").find('.place').eq(6).is('.chackedByX')) { //winner vertical
                winnerPlayer1()
            } else if ($("body").find('.place').eq(0).is('.chackedByO') && $("body").find('.place').eq(3).is('.chackedByO') && $("body").find('.place').eq(6).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(1).is('.chackedByX') && $("body").find('.place').eq(4).is('.chackedByX') && $("body").find('.place').eq(7).is('.chackedByX')) {
                winnerPlayer1()
            } else if ($("body").find('.place').eq(1).is('.chackedByO') && $("body").find('.place').eq(4).is('.chackedByO') && $("body").find('.place').eq(7).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(2).is('.chackedByX') && $("body").find('.place').eq(5).is('.chackedByX') && $("body").find('.place').eq(8).is('.chackedByX')) {
                winnerPlayer1()
            } else if ($("body").find('.place').eq(2).is('.chackedByO') && $("body").find('.place').eq(5).is('.chackedByO') && $("body").find('.place').eq(8).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(0).is('.chackedByX') && $("body").find('.place').eq(4).is('.chackedByX') && $("body").find('.place').eq(8).is('.chackedByX')) { //winner diagonal
                winnerPlayer1()
            } else if ($("body").find('.place').eq(0).is('.chackedByO') && $("body").find('.place').eq(4).is('.chackedByO') && $("body").find('.place').eq(8).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(2).is('.chackedByX') && $("body").find('.place').eq(4).is('.chackedByX') && $("body").find('.place').eq(6).is('.chackedByX')) {
                winnerPlayer1()
            } else if ($("body").find('.place').eq(2).is('.chackedByO') && $("body").find('.place').eq(4).is('.chackedByO') && $("body").find('.place').eq(6).is('.chackedByO')) {
                winnerPlayer2()
            } else if ($("body").find('.place').eq(0).is('.chackedByO') || $("body").find('.place').eq(0).is('.chackedByX')) { //nobody win
                if ($("body").find('.place').eq(1).is('.chackedByO') || $("body").find('.place').eq(1).is('.chackedByX')) {
                    if ($("body").find('.place').eq(2).is('.chackedByO') || $("body").find('.place').eq(2).is('.chackedByX')) {
                        if ($("body").find('.place').eq(3).is('.chackedByO') || $("body").find('.place').eq(3).is('.chackedByX')) {
                            if ($("body").find('.place').eq(4).is('.chackedByO') || $("body").find('.place').eq(4).is('.chackedByX')) {
                                if ($("body").find('.place').eq(5).is('.chackedByO') || $("body").find('.place').eq(5).is('.chackedByX')) {
                                    if ($("body").find('.place').eq(6).is('.chackedByO') || $("body").find('.place').eq(6).is('.chackedByX')) {
                                        if ($("body").find('.place').eq(7).is('.chackedByO') || $("body").find('.place').eq(7).is('.chackedByX')) {
                                            if ($("body").find('.place').eq(8).is('.chackedByO') || $("body").find('.place').eq(8).is('.chackedByX')) {
                                                $('#winner').html('Nobody win,try again...'),
                                                    $('#winner').css({
                                                        color: 'yellow'
                                                    })
                                                $('#places').css({
                                                    backgroundImage: 'url(giphy.gif)',
                                                    backgroundSize: '100% 100%'
                                                })
                                                $('.place').css({
                                                    display: 'none'
                                                })
                                                $('#player2').css({
                                                    display: 'none'
                                                })
                                                $('#player1').css({
                                                    display: 'none'
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        })
    })

    function winnerPlayer1() { //winner finish 1
        $('#winner').html('WINNER PLAYER 1'),
            $('#winner').css({
                color: 'green'
            })
        $('#places').css({
            backgroundImage: 'url(Clarckson.gif)',
            backgroundSize: '100% 100%'
        })
        $('.place').css({
            display: 'none'
        })
        $('#player2').css({
            display: 'none'
        })
    }

    function winnerPlayer2() { //winner finish 2
        $('#winner').html('WINNER PLAYER 2'),
            $('#winner').css({
                color: 'pink'
            })
        $('#places').css({
            backgroundImage: 'url(Clarckson.gif)',
            backgroundSize: '100% 100%'
        })
        $('.place').css({
            display: 'none'
        })
        $('#player1').css({
            display: 'none'
        })
    }
})
