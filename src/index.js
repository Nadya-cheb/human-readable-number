module.exports = function toReadable (number) {
    /*0-10*/
    let unit1_10 = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
    }
    /*11-20*/
    let unit10_19 = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }
    /*20-90*/
    let unit20_90 = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
    /*100-900*/
    let unit100_900 = {
        100: 'one hundred',
        200: 'two hundred',
        300: 'three hundred',
        400: 'four hundred',
        500: 'five hundred',
        600: 'six hundred',
        700: 'seven hundred',
        800: 'eight hundred',
        900: 'nine hundred',
    }

    let unit = '';
    switch (true) {
        case (number / 10 <= 1): unit = "1_10"; break;
        case (number / 100 < 1): if (number < 20) unit = "11_19"; else unit = "20_90"; break;
        case (number / 1000 < 1): unit = "100_900"; break;
    }
    let str = '';
    let sringNum = number + '';
    let part1 = '';
    let part2 = '';
    switch (unit) {
        case "1_10": str = unit1_10[number]; break;
        case "11_19": str = unit10_19[number]; break;
        case "20_90":
            part1 = unit20_90[sringNum[0] * 10];

            part2 = '';
            if (number % 10 != 0) {
                part2 = ' ' + unit1_10[number % 10];
            }
            str = part1 + part2;
            break;
        case "100_900":
            let num100 = Number(sringNum[0]) * 100;
            part1 = unit100_900[num100];

            let num2 = number - num100;
            let unit_new = '';
            part2 = '';
            if (num2 > 0) {
                switch (true) {
                    case (num2 / 10 <= 1): unit_new = "1_10"; break;
                    case (num2 / 100 < 1): if (num2 < 20) unit_new = "11_19"; else unit_new = "20_90"; break;
                }
                switch (unit_new) {
                    case "1_10": part2 = unit1_10[num2]; break;
                    case "11_19": part2 = unit10_19[num2]; break;
                    case "20_90":
                        let part11 = unit20_90[sringNum[1] * 10];
                        let part21 = '';
                        if (num2 % 10 != 0) {
                            part21 = ' ' + unit1_10[num2 % 10];
                        }
                        part2 = part11 + part21;
                        break;
                }
                part2 = ' ' + part2;
            }

            str = part1 + part2;
            break;
    }
    //console.log(number + ' :' + str);
    return str;
}
