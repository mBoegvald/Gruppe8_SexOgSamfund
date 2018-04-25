$(window).on("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");
    $("#titelbillede").addClass("show");

    $("#titelbillede").on("click", tagBillede);

}

function tagBillede() {
    console.log("tagBillede");
    $("#scene").addClass("scene_one");
    setTimeout(modtagBillede, 4000);

}

function modtagBillede() {
    console.log("modtagBillede");
    $("#scene").removeClass("scene_one");
    $("#scene").addClass("scene_two");


}

function gruppeGriner() {
    console.log("gruppeGriner");
    $("#scene").removeClass("scene_two");
    $("#scene").addClass("scene_three");

}

function charKommerInd() {
    console.log("charKommerInd");
    $("#char_user_container").addClass("char_user_move_in");

}

function userValg() {
    console.log("userValg");
    $("choice_one").addClass("show");
    $("choice_two").addClass("show");
    $("choice_three").addClass("show");

}

function valgEt() {
    console.log("valgEt");
    $("choice_one").addClass("hide");
    $("choice_two").addClass("hide");
    $("choice_three").addClass("hide");
    $("#char_user_container").addClass("char_user_moveto_victim");
    $("#char_user_sprite").addClass("char_user_walkcycle");
    $("#char_user_container").on("animationend", valgEtAlert);

}

function valgEtAlert() {
    console.log("valgEtAlert");
    $("#ending").addClass("ending_one");
}

function valgTo() {
    console.log("valgTo");
    $("choice_one").addClass("hide");
    $("choice_two").addClass("hide");
    $("choice_three").addClass("hide");
    $("#char_user_container").off("animationend");
    $("#char_user_container").addClass("char_user_moveto_bully");
    $("#char_user_sprite").addClass("char_user_walkcycle");
    $("#char_user_container").on("animationend", valgToAlert);

}

function valgToAlert() {
    console.log("valgToAlert");
    $("#ending").addClass("ending_two");
}

function valgTre() {
    console.log("valgTre");
    $("choice_one").addClass("hide");
    $("choice_two").addClass("hide");
    $("choice_three").addClass("hide");
    $("#char_user_container").off("animationend");
    $("#char_user_container").addClass("char_user_moveto_bully");
    $("#char_user_sprite").addClass("char_user_walkcycle");
    $("#char_user_container").on("animationend", valgTreAlert);

}

function valgTreAlert() {
    console.log("valgTreAlert");
    $("#char_user_container").off("animationend");
    $("#ending").addClass("ending_three");
}
