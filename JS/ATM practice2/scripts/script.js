var five_hundreds_cnt = 10;
var two_hundreds_cnt = 10;
var one_hundreds_cnt = 10;
var fifty_cnt = 20;
var twenty_cnt = 25;
var ten_cnt = 50;
var total = 10000;

function update_balance(){
    document.getElementById("500_balance").innerHTML=five_hundreds_cnt;
    document.getElementById("200_balance").innerHTML=two_hundreds_cnt;
    document.getElementById("100_balance").innerHTML=one_hundreds_cnt;
    document.getElementById("50_balance").innerHTML=fifty_cnt;
    document.getElementById("20_balance").innerHTML=twenty_cnt;
    document.getElementById("10_balance").innerHTML=ten_cnt;

    total = (500*five_hundreds_cnt) + (200*two_hundreds_cnt) + (100*one_hundreds_cnt) + 
    (50*fifty_cnt) + (20*twenty_cnt) + (10*ten_cnt);

    document.getElementById("total_balance").innerHTML=total;
}

var deposit_amount = 0;

function calc_deposit(denomination, denomination_id){
    var note = Number(document.getElementById(denomination_id).value);
    var sum = note * Number(denomination);
    deposit_amount += sum;
    document.getElementById("deposit_amount").innerHTML="Total amount to deposit &#8377;" + deposit_amount;
}

document.getElementById("deposit_submit").addEventListener("click", deposit);

function deposit(event){
    event.preventDefault();
    var five_hundreds = Number(document.getElementById("500_cnt").value);
    var two_hundreds = Number(document.getElementById("200_cnt").value);
    var one_hundreds = Number(document.getElementById("100_cnt").value);
    var fifty = Number(document.getElementById("50_cnt").value);
    var twenty = Number(document.getElementById("20_cnt").value);
    var ten = Number(document.getElementById("10_cnt").value);
    
    const note_check = [five_hundreds, two_hundreds, one_hundreds, fifty, twenty, ten];

    for (let i = 0; i < note_check.length; i++){
        if (!(Number.isInteger(note_check[i]) && note_check[i] >= 0)){
            window.alert("please enter proper input")
            return;
        }
    }

    five_hundreds_cnt += five_hundreds;
    two_hundreds_cnt += two_hundreds;
    one_hundreds_cnt += one_hundreds;
    fifty_cnt += fifty;
    twenty_cnt += twenty;
    ten_cnt += ten;
    
    update_balance();
}


document.getElementById("withdrawl_submit").addEventListener("click", withdrawl);

function withdrawl(event){
    event.preventDefault()

    var amount = Number(document.getElementById("withdrawl_amount").value);
    if (!(Number.isInteger(amount) && amount > 0)){
        window.alert("please enter proper amount for withdrawl")
        return;
    }
    else if (amount > total){
        document.getElementById("withdraw_msg").innerHTML="insufficient balance";
    }
    else if (amount%10 != 0){
        document.getElementById("withdraw_msg").innerHTML="please enter amount in multiples of 10";
    }
    else{

        var temp_five_hundred = five_hundreds_cnt;
        var temp_two_hundred = two_hundreds_cnt;
        var temp_one_hundred = one_hundreds_cnt;
        var temp_fifty = fifty_cnt;
        var temp_twenty = twenty_cnt;
        var temp_ten = ten_cnt;

        while(Math.floor(amount/500) && temp_five_hundred){
            amount -= 500;
            temp_five_hundred--;
        }
        while(Math.floor(amount/200) && temp_two_hundred){
            amount -= 200;
            temp_two_hundred--;
        }
        while(Math.floor(amount/100) && temp_one_hundred){
            amount -= 100;
            temp_one_hundred--;
        }
        while(Math.floor(amount/50) && temp_fifty){
            amount -= 50;
            temp_fifty--;
        }
        while(Math.floor(amount/20) && temp_twenty){
            amount -= 20;
            temp_twenty--;
        }
        while(Math.floor(amount/10) && temp_ten){
            amount -= 10;
            temp_ten--;
        }

        if (amount == 0){

            document.getElementById("withdraw_msg").innerHTML="transaction for withdrawl is successful <br>" + 
            "<br> Please collect ...<br>" +
            "&#8377;500 Notes: " + Number(five_hundreds_cnt - temp_five_hundred) + "<br>" +
            "&#8377;200 Notes: " + Number(two_hundreds_cnt - temp_two_hundred) + "<br>" +
            "&#8377;100 Notes: " + Number(one_hundreds_cnt - temp_one_hundred) + "<br>" +
            "&#8377;50 Notes: " + Number(fifty_cnt - temp_fifty) + "<br>" +
            "&#8377;20 Notes: " + Number(twenty_cnt - temp_twenty) + "<br>" +
            "&#8377;10 Notes: " + Number(ten_cnt - temp_ten);

            five_hundreds_cnt = temp_five_hundred;
            two_hundreds_cnt = temp_two_hundred;
            one_hundreds_cnt = temp_one_hundred;
            fifty_cnt = temp_fifty;
            twenty_cnt = temp_twenty;
            ten_cnt = temp_ten;

            update_balance();
        }
        else{
            document.getElementById("withdraw_msg").innerHTML="insufficient notes in machine <br> transaction failed";
        }
    }

}