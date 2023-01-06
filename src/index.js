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
        let arrString = String(number).split('');
    
        switch (true) {
            case arrString.length == 1: unit = "1_10"; break;
            case arrString.length == 2: if (number < 20) unit = "11_19"; else unit = "20_90"; break;
            case arrString.length == 3: unit = "100_900"; break;
        }
        let resArray = [];    
      
        switch (unit) {
            case "100_900":
                resArray.push(unit100_900[arrString[0] * 100]);

                let number_new = number - arrString[0] * 100;
                if (number_new > 0) {
                    let arrString_new = String(number_new).split('');
                    switch (true) {
                        case arrString_new.length == 1: unit = "1_10"; break;
                        case arrString_new.length == 2: if (number_new < 20) unit = "11_19"; else unit = "20_90"; break;
                    }

                    switch (unit) {
                        case "20_90":
                            resArray.push(unit20_90[arrString_new[0] * 10]);
                            if (arrString_new[1] != 0) {
                                resArray.push(unit1_10[arrString_new[1] * 1]);
                            }
                            break;
                        case "11_19":
                            resArray.push(unit10_19[number_new]);
                            break;
                        case "1_10":
                            resArray.push(unit1_10[number_new]);
                            break;
                    }
                }
                break;
            case "20_90":
                resArray.push(unit20_90[arrString[0] * 10]);
                if (arrString[1] != 0) {
                    resArray.push(unit1_10[arrString[1] * 1]);
                }
                break;
            case "11_19":
                resArray.push(unit10_19[number]);
                break;
            case "1_10":
                resArray.push(unit1_10[number]);
                break;
            }
            res= resArray.join(' ');

        return res;
}
