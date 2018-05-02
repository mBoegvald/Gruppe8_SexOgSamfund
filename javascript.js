$(window).on("load", sidenVises);


//LYDE

function kameraLyd() {
    console.log("kameraLyd");
    $("#camera")[0].play();
    $("#camera")[0].volume = 0.1;
}

function beskedFB() {
    console.log("beskedFB");
    var audio = document.createElement("audio");
    audio.src = "lyde/Msg_FB.mp3";
    audio.play();
    audio.volume = 0.1;
}

function sendBesked() {
    console.log("sendBesked");
    $("#send_message")[0].play();
    $("#send_message")[0].volume = 0.1;
}

//SCENE 1


function sidenVises() {
    console.log("sidenVises");

    //scene 1

    $("#bully_scene1_container").hide();

    $("#muffled")[0].play();



    //scene 2
    $("#the_day_after").hide();
    $("#send_picture_sprite_one").hide();
    $("#send_picture_sprite_two").hide();
    $("#send_picture_sprite_three").hide();
    $("#send_picture_sprite_four").hide();
    $("#send_picture_sprite_five").hide();
    $("#send_picture_sprite_six").hide();
    $("#send_picture_sprite_seven").hide();
    $("#send_picture_sprite_eight").hide();

    //scene 3

    $("#bully_scene3_container").hide();

    $("#victim_container").hide();

    $("#foreground").hide();

    $("#question").hide();
    $("#choice_one_button").hide();
    $("#choice_two_button").hide();
    $("#choice_three_button").hide();

    $("#blue_layer").hide();


    $("#answer_one").hide();
    $("#answer_two").hide();
    $("#answer_three").hide();

    $("#logo").hide();






    setTimeout(tagBillede, 5000);
}

function tagBillede() {
    console.log("tagBillede");

    $("#friday").hide();


    $("#bully_scene1_container").show();

    $("#background").addClass("background_one");
    $("#bully_scene1_sprite").addClass("bully_group_snap");

    setTimeout(kameraLyd, 1400);
    setTimeout(kameraLyd, 2300);
    setTimeout(kameraLyd, 3500);


    setTimeout(dagenEfter, 6000);

}

// SCENE 2

function dagenEfter() {
    console.log("dagenEfter");

    $("#muffled")[0].volume = 0;
    $("#background").removeClass("background_one");
    $("#bully_scene1_sprite").removeClass("bully_group_snap");
    $("#bully_scene1_sprite").hide();

    $("#the_day_after").show();

    setTimeout(modtagBilledeEt, 3000);
}

function modtagBilledeEt() {
    console.log("modtagBilledeEt");

    $("#the_day_after").hide();


    $("#send_picture_sprite_one").show();
    $("#background").addClass("background_two");

    $("#send_picture_sprite_one").addClass("send_picture_sprite_one");

    setTimeout(sendBesked, 1200);

    setTimeout(modtagBilledeSyv, 2000);
    setTimeout(modtagBilledeFire, 5000);
    setTimeout(modtagBilledeFem, 5800);
    setTimeout(modtagBilledeTre, 6500);
    setTimeout(modtagBilledeOtte, 7000);
    setTimeout(modtagBilledeTo, 7200);
    setTimeout(modtagBilledeSeks, 7400);

    setTimeout(gruppeGriner, 13000);

}

function modtagBilledeTo() {
    console.log("modtagBilledeTo");
    $("#send_picture_sprite_two").show();
    $("#send_picture_sprite_two").addClass("send_picture_sprite_two");
    setTimeout(beskedFB, 1200);
}

function modtagBilledeTre() {
    console.log("modtagBilledeTre");
    $("#send_picture_sprite_three").show();
    $("#send_picture_sprite_three").addClass("send_picture_sprite_three");
    setTimeout(beskedFB, 1200);
}

function modtagBilledeFire() {
    console.log("modtagBilledeFire");
    $("#send_picture_sprite_four").show();
    $("#send_picture_sprite_four").addClass("send_picture_sprite_four");
    setTimeout(beskedFB, 1200);

}

function modtagBilledeFem() {
    console.log("modtagBilledeFem");
    $("#send_picture_sprite_five").show();
    $("#send_picture_sprite_five").addClass("send_picture_sprite_five");
    setTimeout(beskedFB, 1200);
}

function modtagBilledeSeks() {
    console.log("modtagBilledeSeks");
    $("#send_picture_sprite_six").show();
    $("#send_picture_sprite_six").addClass("send_picture_sprite_six");
    setTimeout(beskedFB, 1200);
}

function modtagBilledeSyv() {
    console.log("modtagBilledeSyv");
    $("#send_picture_sprite_seven").show();
    $("#send_picture_sprite_seven").addClass("send_picture_sprite_seven");
    setTimeout(beskedFB, 1200);


}

function modtagBilledeOtte() {
    console.log("modtagBilledeOtte");
    $("#send_picture_sprite_eight").show();
    $("#send_picture_sprite_eight").addClass("send_picture_sprite_eight");
    setTimeout(beskedFB, 1200);
}







//SCENE 3


function gruppeGriner() {
    console.log("gruppeGriner");
    $("#background").removeClass("background_two");
    $("#background").addClass("background_three");
    $("#foreground").show();
    $("#victim_container").show();
    $("#bully_scene3_container").show();

    $("#send_picture_sprite_one").hide();
    $("#send_picture_sprite_two").hide();
    $("#send_picture_sprite_three").hide();
    $("#send_picture_sprite_four").hide();
    $("#send_picture_sprite_five").hide();
    $("#send_picture_sprite_six").hide();
    $("#send_picture_sprite_seven").hide();
    $("#send_picture_sprite_eight").hide();

    $("#cry")[0].play();
    $("#cry")[0].volume = 0.1;



    $("#victim_sprite").addClass("victim_cycle");
    $("#bully_scene3_sprite").addClass("bully_cycle");




    setTimeout(userKommerInd, 1000);

}

function userKommerInd() {
    console.log("userKommerInd");

    $("#user_sprite").addClass("user_walkcycle");
    $("#user_container").addClass("user_walk_in");
    $("#user_container").on("animationend", userModtagerBillede);

}

function userModtagerBillede() {
    console.log("userModtagerBillede");
    $("#user_container").removeClass("user_walk_in");
    $("#user_sprite").removeClass("user_walkcycle");

    $("#user_container").off("animationend");

    $("#user_container").addClass("user_position_in");

    $("#user_sprite").addClass("user_recieve_picture");

    setTimeout(beskedFB, 1000);

    setTimeout(userValg, 3000);

}

function userValg() {
    console.log("userValg");

    $("#victim_sprite").removeClass("victim_cycle");
    $("#bully_scene3_sprite").removeClass("bully_cycle");


    $("#question").show();
    $("#choice_one_button").show();
    $("#choice_two_button").show();
    $("#choice_three_button").show();

    $("#choice_one_button").on("click", valgEt);
    $("#choice_two_button").on("click", valgTo);
    $("#choice_three_button").on("click", valgTre);

    $("#choice_one_button").addClass("button_hover");
    $("#choice_two_button").addClass("button_hover");
    $("#choice_three_button").addClass("button_hover");

}

function valgEt() {
    console.log("valgEt");

    $("#user_container").removeClass("user_position_in");
    $("#user_sprite").removeClass("user_recieve_picture");

    $("#choice_one_button").off("click", valgEt);
    $("#choice_two_button").off("click", valgTo);
    $("#choice_three_button").off("click", valgTre);

    $("#question").hide();
    $("#choice_one_button").hide();
    $("#choice_two_button").hide();
    $("#choice_three_button").hide();

    $("#victim_sprite").addClass("victim_cycle");
    $("#bully_scene3_sprite").addClass("bully_cycle");

    $("#user_container").addClass("user_moveto_victim");
    $("#user_sprite").addClass("user_walkcycle");

    $("#user_container").on("animationend", valgEtAlert);

}

function valgEtAlert() {
    console.log("valgEtAlert");

    $("#victim_sprite").removeClass("victim_cycle");
    $("#bully_scene3_sprite").removeClass("bully_cycle");


    $("#user_sprite").removeClass("user_walkcycle");

    $("#user_container").off("animationend");

    $("#user_sprite").addClass("user_stand");

    $("#blue_layer").show();

    $("#answer_one").show();

    setTimeout(slutning, 15000);


}

function valgTo() {
    console.log("valgTo");

    $("#user_container").removeClass("user_position_in");
    $("#user_sprite").removeClass("user_recieve_picture");

    $("#choice_one_button").off("click", valgEt);
    $("#choice_two_button").off("click", valgTo);
    $("#choice_three_button").off("click", valgTre);

    $("#question").hide();
    $("#choice_one_button").hide();
    $("#choice_two_button").hide();
    $("#choice_three_button").hide();

    $("#victim_sprite").addClass("victim_cycle");
    $("#bully_scene3_sprite").addClass("bully_cycle");

    $("#user_container").addClass("user_moveto_bully");
    $("#user_sprite").addClass("user_walkcycle");

    $("#user_container").on("animationend", valgToAlert);


}

function valgToAlert() {
    console.log("valgToAlert");

    $("#victim_sprite").removeClass("victim_cycle");
    $("#bully_scene3_sprite").removeClass("bully_cycle");


    $("#user_sprite").removeClass("user_walkcycle");

    $("#user_container").off("animationend");

    $("#user_sprite").addClass("user_stand");

    $("#blue_layer").show();

    $("#answer_two").show();

    setTimeout(slutning, 15000);
}

function valgTre() {
    console.log("valgTre");

    $("#user_container").removeClass("user_position_in");
    $("#user_sprite").removeClass("user_recieve_picture");

    $("#choice_one_button").off("click", valgEt);
    $("#choice_two_button").off("click", valgTo);
    $("#choice_three_button").off("click", valgTre);

    $("#question").hide();
    $("#choice_one_button").hide();
    $("#choice_two_button").hide();
    $("#choice_three_button").hide();

    $("#victim_sprite").addClass("victim_cycle");
    $("#bully_scene3_sprite").addClass("bully_cycle");

    $("#user_container").addClass("user_moveto_bully");
    $("#user_sprite").addClass("user_walkcycle");

    $("#user_container").on("animationend", valgTreAlert);

}

function valgTreAlert() {
    console.log("valgTreAlert");

    $("#victim_sprite").removeClass("victim_cycle");
    $("#bully_scene3_sprite").removeClass("bully_cycle");


    $("#user_sprite").removeClass("user_walkcycle");

    $("#user_container").off("animationend");

    $("#user_sprite").addClass("user_stand");

    $("#blue_layer").show();

    $("#answer_three").show();

    setTimeout(slutning, 15000);
}

function slutning() {
    console.log("slutning");
    $("#logo").show();

    $("#answer_one").fadeOut(1500, "linear");
    $("#answer_two").fadeOut(1500, "linear");
    $("#answer_three").fadeOut(1500, "linear");
    $("#logo").fadeIn(1500, "linear");

    $("#logo").hover(function () {
        $("#logo").css({
            "transform": "scale(1.1)",
            "transition": "all 0.5s ease-out"
        });
    }, function () {
        $("#logo").css("transform", "scale(1)");
    });



}
