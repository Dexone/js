function validateBattlefield(field) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
    let rasstanovka = {}
    let korabli = { '4p': [], '3p': [], '2p': [], '1p': [] }

    for (let i = 0; i < 10; i++) { //пуш в расстановку
        field[i].forEach((element, index) => {
            rasstanovka[alphabet[index] + "" + i] = element
        });
    }

    for (let a = 0; a < 10; a++) { //ищем 4 палубник по горизонтали //проход по вертикали

        for (let b = 0; b < 7; b++) { //проход по горизонтали
            if (rasstanovka[alphabet[b] + a] === 1 && rasstanovka[alphabet[b + 1] + a] === 1 && rasstanovka[alphabet[b + 2] + a] === 1 && rasstanovka[alphabet[b + 3] + a] === 1) { //если 4 клетки подряд по горизонтали = 1 //
                
                if (rasstanovka[alphabet[b + 4] + a] === 0 || (b + 4) > 9) { //если справа стоит 0 или заканчивается поле //

                    if (rasstanovka[alphabet[b - 1] + a] === 0 || b === 0) { //если слева стоит 0 или заканчивается поле

                        if ((rasstanovka[alphabet[b] + (a - 1)] === 0 && rasstanovka[alphabet[b + 1] + (a - 1)] === 0 && rasstanovka[alphabet[b + 2] + (a - 1)] === 0 && rasstanovka[alphabet[b + 3] + (a - 1)] === 0) || a === 0) { //если сверху стоят четыре ноля или корабль стоит в самом верху

                            if ((rasstanovka[alphabet[b] + (a + 1)] === 0 && rasstanovka[alphabet[b + 1] + (a + 1)] === 0 && rasstanovka[alphabet[b + 2] + (a + 1)] === 0 && rasstanovka[alphabet[b + 3] + (a + 1)] === 0) || a === 9) { //если снизу стоят четыре ноля или корабль стоит в самом низу

                                if (rasstanovka[alphabet[b - 1] + (a - 1)] === 0 || b === 0 || a === 0) { //если слева сверху стоит 0 или заканчивается поле

                                    if (rasstanovka[alphabet[b - 1] + (a + 1)] === 0 || b === 0 || a === 9) { //если слева снизу стоит 0 или заканчивается поле

                                        if (rasstanovka[alphabet[b + 4] + (a - 1)] === 0 || b === 6 || a === 0) { //если справа сверху стоит 0 или заканчивается поле

                                            if (rasstanovka[alphabet[b + 4] + (a + 1)] === 0 || b === 6 || a === 9) { //если справа снизу стоит 0 или заканчивается поле

                                                korabli["4p"].push([alphabet[b] + a, alphabet[b + 1] + a, alphabet[b + 2] + a, alphabet[b + 3] + a]) //пуш координат 4 палубника в корабли
                                                rasstanovka[alphabet[b] + a] = 0 //удаление из расстановки 4 палубника
                                                rasstanovka[alphabet[b + 1] + a] = 0
                                                rasstanovka[alphabet[b + 2] + a] = 0
                                                rasstanovka[alphabet[b + 3] + a] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let a = 0; a < 10; a++) { //ищем 4 палубник по вертикали //проход по горизонтали

        for (let b = 0; b < 7; b++) { //проход по вертикали

            if (rasstanovka[alphabet[a] + b] === 1 && rasstanovka[alphabet[a] + (b + 1)] === 1 && rasstanovka[alphabet[a] + (b + 2)] === 1 && rasstanovka[alphabet[a] + (b + 3)] === 1) { //если 4 клетки подряд по вертикали = 1

                if (rasstanovka[alphabet[a + 1] + b] === 0 && rasstanovka[alphabet[a + 1] + (b + 1)] === 0 && rasstanovka[alphabet[a + 1] + (b + 2)] === 0 && rasstanovka[alphabet[a + 1] + (b + 3)] === 0 || a === 9) { //если справа стоят 0 или заканчивается поле

                    if (rasstanovka[alphabet[a - 1] + b] === 0 && rasstanovka[alphabet[a - 1] + (b + 1)] === 0 && rasstanovka[alphabet[a - 1] + (b + 2)] === 0 && rasstanovka[alphabet[a - 1] + (b + 3)] === 0 || a === 0) { //если слева стоят 0 или заканчивается поле

                        if (rasstanovka[alphabet[a] + (b - 1)] === 0 || b === 0) { //если сверху стоит 0 или заканчивается поле

                            if (rasstanovka[alphabet[a] + (b + 4)] === 0 || b === 6) { //если снизу стоит 0 или заканчивается поле

                                if (rasstanovka[alphabet[a - 1] + (b - 1)] === 0 || b === 0 || a === 0) { //если слева сверху 0 или заканчивается поле

                                    if (rasstanovka[alphabet[a - 1] + (b + 4)] === 0 || b === 6 || a === 0) { //если слева снизу 0 или заканчивается поле

                                        if (rasstanovka[alphabet[a + 1] + (b - 1)] === 0 || b === 0 || a === 9) { //если справа сверху 0 или заканчивается поле

                                            if (rasstanovka[alphabet[a + 1] + (b + 4)] === 0 || b === 6 || a === 9) { //если справа снизу 0 или заканчивается поле

                                                korabli["4p"].push([alphabet[a] + b, alphabet[a] + (b + 1), alphabet[a] + (b + 2), alphabet[a] + (b + 3)]) //пуш координат 4 палубника в корабли
                                                rasstanovka[alphabet[a] + b] = 0 //удаление из расстановки 4 палубника
                                                rasstanovka[alphabet[a] + (b + 1)] = 0
                                                rasstanovka[alphabet[a] + (b + 2)] = 0
                                                rasstanovka[alphabet[a] + (b + 3)] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (let a = 0; a < 10; a++) { //ищем 3 палубник по горизонтали //проход по вертикали

        for (let b = 0; b < 8; b++) { //проход по горизонтали
            if (rasstanovka[alphabet[b] + a] === 1 && rasstanovka[alphabet[b + 1] + a] === 1 && rasstanovka[alphabet[b + 2] + a] === 1) { //если 3 клетки подряд по горизонтали = 1 //
                
                if (rasstanovka[alphabet[b + 3] + a] === 0 || (b + 3) > 9) { //если справа стоит 0 или заканчивается поле //

                    if (rasstanovka[alphabet[b - 1] + a] === 0 || b === 0) { //если слева стоит 0 или заканчивается поле

                        if ((rasstanovka[alphabet[b] + (a - 1)] === 0 && rasstanovka[alphabet[b + 1] + (a - 1)] === 0 && rasstanovka[alphabet[b + 2] + (a - 1)] === 0) || a === 0) { //если сверху стоят три ноля или корабль стоит в самом верху

                            if ((rasstanovka[alphabet[b] + (a + 1)] === 0 && rasstanovka[alphabet[b + 1] + (a + 1)] === 0 && rasstanovka[alphabet[b + 2] + (a + 1)] === 0) || a === 9) { //если снизу стоят три ноля или корабль стоит в самом низу

                                if (rasstanovka[alphabet[b - 1] + (a - 1)] === 0 || b === 0 || a === 0) { //если слева сверху стоит 0 или заканчивается поле

                                    if (rasstanovka[alphabet[b - 1] + (a + 1)] === 0 || b === 0 || a === 9) { //если слева снизу стоит 0 или заканчивается поле

                                        if (rasstanovka[alphabet[b + 3] + (a - 1)] === 0 || b === 7 || a === 0) { //если справа сверху стоит 0 или заканчивается поле

                                            if (rasstanovka[alphabet[b + 3] + (a + 1)] === 0 || b === 7 || a === 9) { //если справа снизу стоит 0 или заканчивается поле

                                                korabli["3p"].push([alphabet[b] + a, alphabet[b + 1] + a, alphabet[b + 2] + a]) //пуш координат 3 палубника в корабли
                                                rasstanovka[alphabet[b] + a] = 0 //удаление из расстановки 4 палубника
                                                rasstanovka[alphabet[b + 1] + a] = 0
                                                rasstanovka[alphabet[b + 2] + a] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let a = 0; a < 10; a++) { //ищем 3 палубник по вертикали //проход по горизонтали

        for (let b = 0; b < 8; b++) { //проход по вертикали

            if (rasstanovka[alphabet[a] + b] === 1 && rasstanovka[alphabet[a] + (b + 1)] === 1 && rasstanovka[alphabet[a] + (b + 2)] === 1) { //если 3 клетки подряд по вертикали = 1

                if (rasstanovka[alphabet[a + 1] + b] === 0 && rasstanovka[alphabet[a + 1] + (b + 1)] === 0 && rasstanovka[alphabet[a + 1] + (b + 2)] === 0 || a === 9) { //если справа стоят 0 или заканчивается поле

                    if (rasstanovka[alphabet[a - 1] + b] === 0 && rasstanovka[alphabet[a - 1] + (b + 1)] === 0 && rasstanovka[alphabet[a - 1] + (b + 2)] === 0 || a === 0) { //если слева стоят 0 или заканчивается поле

                        if (rasstanovka[alphabet[a] + (b - 1)] === 0 || b === 0) { //если сверху стоит 0 или заканчивается поле

                            if (rasstanovka[alphabet[a] + (b + 3)] === 0 || b === 7) { //если снизу стоит 0 или заканчивается поле

                                if (rasstanovka[alphabet[a - 1] + (b - 1)] === 0 || b === 0 || a === 0) { //если слева сверху 0 или заканчивается поле

                                    if (rasstanovka[alphabet[a - 1] + (b + 3)] === 0 || b === 7 || a === 0) { //если слева снизу 0 или заканчивается поле

                                        if (rasstanovka[alphabet[a + 1] + (b - 1)] === 0 || b === 0 || a === 9) { //если справа сверху 0 или заканчивается поле

                                            if (rasstanovka[alphabet[a + 1] + (b + 3)] === 0 || b === 7 || a === 9) { //если справа снизу 0 или заканчивается поле

                                                korabli["3p"].push([alphabet[a] + b, alphabet[a] + (b + 1), alphabet[a] + (b + 2)]) //пуш координат 3 палубника в корабли
                                                rasstanovka[alphabet[a] + b] = 0 //удаление из расстановки 3 палубника
                                                rasstanovka[alphabet[a] + (b + 1)] = 0
                                                rasstanovka[alphabet[a] + (b + 2)] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (let a = 0; a < 10; a++) { //ищем 2 палубник по горизонтали //проход по вертикали

        for (let b = 0; b < 9; b++) { //проход по горизонтали
            if (rasstanovka[alphabet[b] + a] === 1 && rasstanovka[alphabet[b + 1] + a] === 1) { //если 2 клетки подряд по горизонтали = 1 //
                
                if (rasstanovka[alphabet[b + 2] + a] === 0 || (b + 2) > 9) { //если справа стоит 0 или заканчивается поле //

                    if (rasstanovka[alphabet[b - 1] + a] === 0 || b === 0) { //если слева стоит 0 или заканчивается поле

                        if ((rasstanovka[alphabet[b] + (a - 1)] === 0 && rasstanovka[alphabet[b + 1] + (a - 1)] === 0) || a === 0) { //если сверху стоят два ноля или корабль стоит в самом верху

                            if ((rasstanovka[alphabet[b] + (a + 1)] === 0 && rasstanovka[alphabet[b + 1] + (a + 1)] === 0 ) || a === 9) { //если снизу стоят два ноля или корабль стоит в самом низу

                                if (rasstanovka[alphabet[b - 1] + (a - 1)] === 0 || b === 0 || a === 0) { //если слева сверху стоит 0 или заканчивается поле

                                    if (rasstanovka[alphabet[b - 1] + (a + 1)] === 0 || b === 0 || a === 9) { //если слева снизу стоит 0 или заканчивается поле

                                        if (rasstanovka[alphabet[b + 2] + (a - 1)] === 0 || b === 8 || a === 0) { //если справа сверху стоит 0 или заканчивается поле

                                            if (rasstanovka[alphabet[b + 2] + (a + 1)] === 0 || b === 8 || a === 9) { //если справа снизу стоит 0 или заканчивается поле

                                                korabli["2p"].push([alphabet[b] + a, alphabet[b + 1] + a]) //пуш координат 2 палубника в корабли
                                                rasstanovka[alphabet[b] + a] = 0 //удаление из расстановки 2 палубника
                                                rasstanovka[alphabet[b + 1] + a] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let a = 0; a < 10; a++) { //ищем 2 палубник по вертикали //проход по горизонтали

        for (let b = 0; b < 9; b++) { //проход по вертикали

            if (rasstanovka[alphabet[a] + b] === 1 && rasstanovka[alphabet[a] + (b + 1)] === 1) { //если 2 клетки подряд по вертикали = 1

                if (rasstanovka[alphabet[a + 1] + b] === 0 && rasstanovka[alphabet[a + 1] + (b + 1)] === 0 || a === 9) { //если справа стоят 0 или заканчивается поле

                    if (rasstanovka[alphabet[a - 1] + b] === 0 && rasstanovka[alphabet[a - 1] + (b + 1)] === 0 || a === 0) { //если слева стоят 0 или заканчивается поле

                        if (rasstanovka[alphabet[a] + (b - 1)] === 0 || b === 0) { //если сверху стоит 0 или заканчивается поле

                            if (rasstanovka[alphabet[a] + (b + 2)] === 0 || b === 8) { //если снизу стоит 0 или заканчивается поле

                                if (rasstanovka[alphabet[a - 1] + (b - 1)] === 0 || b === 0 || a === 0) { //если слева сверху 0 или заканчивается поле

                                    if (rasstanovka[alphabet[a - 1] + (b + 2)] === 0 || b === 8 || a === 0) { //если слева снизу 0 или заканчивается поле

                                        if (rasstanovka[alphabet[a + 1] + (b - 1)] === 0 || b === 0 || a === 9) { //если справа сверху 0 или заканчивается поле

                                            if (rasstanovka[alphabet[a + 1] + (b + 2)] === 0 || b === 8 || a === 9) { //если справа снизу 0 или заканчивается поле

                                                korabli["2p"].push([alphabet[a] + b, alphabet[a] + (b + 1)]) //пуш координат 2 палубника в корабли
                                                rasstanovka[alphabet[a] + b] = 0 //удаление из расстановки 2 палубника
                                                rasstanovka[alphabet[a] + (b + 1)] = 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    for (let a = 0; a < 10; a++) { //ищем 1 палубник по горизонтали //проход по вертикали

        for (let b = 0; b < 10; b++) { //проход по горизонтали
            if (rasstanovka[alphabet[b] + a] === 1) { //если 1 клетки подряд по горизонтали = 1 //
                
                if (rasstanovka[alphabet[b + 1] + a] === 0 || (b + 1) > 9) { //если справа стоит 0 или заканчивается поле //

                    if (rasstanovka[alphabet[b - 1] + a] === 0 || b === 0) { //если слева стоит 0 или заканчивается поле

                        if ((rasstanovka[alphabet[b] + (a - 1)] === 0) || a === 0) { //если сверху стоит ноль или корабль стоит в самом верху

                            if ((rasstanovka[alphabet[b] + (a + 1)] === 0) || a === 9) { //если снизу стоит ноль или корабль стоит в самом низу

                                if (rasstanovka[alphabet[b - 1] + (a - 1)] === 0 || b === 0 || a === 0) { //если слева сверху стоит 0 или заканчивается поле

                                    if (rasstanovka[alphabet[b - 1] + (a + 1)] === 0 || b === 0 || a === 9) { //если слева снизу стоит 0 или заканчивается поле

                                        if (rasstanovka[alphabet[b + 1] + (a - 1)] === 0 || b === 9 || a === 0) { //если справа сверху стоит 0 или заканчивается поле

                                            if (rasstanovka[alphabet[b + 1] + (a + 1)] === 0 || b === 9 || a === 9) { //если справа снизу стоит 0 или заканчивается поле

                                                korabli["1p"].push([alphabet[b] + a]) //пуш координат 1 палубника в корабли
                                                rasstanovka[alphabet[b] + a] = 0 //удаление из расстановки 1 палубника
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    for (let a = 0; a < 10; a++) { //ищем 2 палубник по вертикали //проход по горизонтали

        for (let b = 0; b < 10; b++) { //проход по вертикали

            if (rasstanovka[alphabet[a] + b] === 1) { //если 1 клетка подряд по вертикали = 1

                if (rasstanovka[alphabet[a + 1] + b] === 0 || a === 9) { //если справа стоят 0 или заканчивается поле

                    if (rasstanovka[alphabet[a - 1] + b] === 0 || a === 0) { //если слева стоит 0 или заканчивается поле

                        if (rasstanovka[alphabet[a] + (b - 1)] === 0 || b === 0) { //если сверху стоит 0 или заканчивается поле

                            if (rasstanovka[alphabet[a] + (b + 1)] === 0 || b === 9) { //если снизу стоит 0 или заканчивается поле

                                if (rasstanovka[alphabet[a - 1] + (b - 1)] === 0 || b === 0 || a === 0) { //если слева сверху 0 или заканчивается поле

                                    if (rasstanovka[alphabet[a - 1] + (b + 1)] === 0 || b === 9 || a === 0) { //если слева снизу 0 или заканчивается поле

                                        if (rasstanovka[alphabet[a + 1] + (b - 1)] === 0 || b === 0 || a === 9) { //если справа сверху 0 или заканчивается поле

                                            if (rasstanovka[alphabet[a + 1] + (b + 1)] === 0 || b === 9 || a === 9) { //если справа снизу 0 или заканчивается поле

                                                korabli["1p"].push([alphabet[a] + b]) //пуш координат 1 палубника в корабли
                                                rasstanovka[alphabet[a] + b] = 0 //удаление из расстановки 1 палубника
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }





    if(korabli['4p'].length === 1 && korabli['3p'].length === 2 && korabli['2p'].length === 3 && korabli['1p'].length === 4){
        return true
    }
    else{
        return false
    }

}


console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))