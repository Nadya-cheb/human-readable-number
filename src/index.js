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
           
        let resArray = []; 
        let numberCheck;
        let arrString = String(number).split('');
      
        switch (true) {
            case arrString.length == 3:
                //hundred
                resArray.push(range1_19[arrString[0]]);
                resArray.push('hundred');

                numberCheck = number - arrString[0] * 100;
                if (numberCheck > 0) {
                    let arrString_new = String(numberCheck).split('');
                    
                    if (arrString_new.length == 2 || arrString_new.length == 1) {
                            if (numberCheck <= 19) {
                                resArray.push(range1_19[numberCheck]);
                            } else {
                                numberCheck = arrString_new[0] * 10;
                                resArray.push(range20_90[numberCheck]);

                                numberCheck = arrString_new[1] * 1;
                                if (numberCheck != 0) {
                                    resArray.push(range1_19[numberCheck]);
                                }
                            }
                    }
                }
                break;
            case (arrString.length == 2):
            case (arrString.length == 1):
                if (number <= 19) {
                    resArray.push(range1_19[number]);
                } else {
                    numberCheck = arrString[0] * 10;
                    resArray.push(range20_90[numberCheck]);

                    numberCheck = arrString[1] * 1;
                    if (arrString.length == 1) {
                        resArray.push(range1_19[numberCheck]);
                    } else {
                        if (numberCheck != 0) {
                            resArray.push(range1_19[numberCheck]);
                       }
                    }                    
                }
                break;
        }
     return resArray.join(' ');
}
