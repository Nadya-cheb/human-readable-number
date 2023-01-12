module.exports = function toReadable (number) {
        /*0-19*/
        let range1_19 = {
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
        let range20_90 = {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety',
        }
          
        let range = '';
        let arrString = String(number).split('');
    
        switch (true) {
            case arrString.length == 1:
            case arrString.length == 2: 
                if (number < 20) range = "1_19"; 
                else range = "20_90"; 
                break;
            case arrString.length == 3: range = "100_900"; 
                break;
        }
        let resArray = [];    
      
        switch (true) {
            case arrString.length == 3:
                //hundred
                resArray.push(range1_19[arrString[0]]);
                resArray.push('hundred');

                let number_new = number - arrString[0] * 100;
                if (number_new > 0) {
                    let arrString_new = String(number_new).split('');
                    
                    if (arrString_new.length == 2 || arrString_new.length == 1) {
                            if (number_new <= 19) {
                                resArray.push(range1_19[number_new]);
                            } else {
                                resArray.push(range20_90[arrString_new[0] * 10]);

                                if (arrString_new[1] * 1 != 0) {
                                    resArray.push(range1_19[arrString_new[1] * 1]);
                                }
                            }
                    }
                }
                break;
            case (arrString.length == 2 || arrString.length == 1):
                if (number <= 19) {
                    resArray.push(range1_19[number]);
                } else {
                    resArray.push(range20_90[arrString[0] * 10]);

                    if (arrString[1] * 1 != 0) {
                        resArray.push(range1_19[arrString[1] * 1]);
                    }
                }
                break;
        }
     return resArray.join(' ');
}
