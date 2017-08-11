/**
 * Created by Agus on 11/8/2017.
 */

function calc_ductulador() {
    a_side = Number(document.getElementById('a_side').value);
    b_side = Number(document.getElementById('b_side').value);
    a_proposed = Number(document.getElementById('a_proposed').value);

    if(a_side!=null && b_side!=null && a_proposed!=null){
        max_b_side = 3*a_proposed;
        var diam_equiv = (1.3 * Math.pow(a_side*b_side, 0.625))/Math.pow((a_side+b_side), 0.25);
        b_new_side = 0;

        for(var i=1; i<= max_b_side ; i++){
            var temp_diam_equiv = (1.3 * Math.pow(a_proposed*i, 0.625))/Math.pow(a_proposed+i, 0.25);

            if(temp_diam_equiv >= diam_equiv){
                b_new_side = i;
                break;
            }
        }
    }


    document.getElementById('b_proposed').value = b_new_side;
}
