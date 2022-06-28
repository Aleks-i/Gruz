$(".calculator input").on("input change", function (event) {
    var parameterName = $(this).attr("id").split("calc-")[1];
    let isintercity = $('#calc-intercity')[0].checked;

    switch (parameterName) {
        case "gruzch":
            var gr = $(this).val();
            $("#calc-gruzch_value").html("Грузчики: <b>" + gr + "</b> чел.");
            break;
        case "grhour":
            var grh = $(this).val();
            if (grh === "2") {
                $("#calc-grhour_value").html("Время(мин 2 ч.): <b>" + grh + "</b> ч.");
            } else {
                $("#calc-grhour_value").html("Время: <b>" + grh + "</b> ч.");
            }
            break;
        case "gazelh":
            var h = $(this).val();
            $("#calc-gazelh_value").html("Газель + 2 грузчика на: <b>" + h + "</b> ч.");
            break;
        case "intercity":
            if (isintercity) {
                $("#calc-gazelarea_value").show();
                $("#calc-gazelarea").show();
            } else {
                $("#calc-gazelarea_value").hide();
                $("#calc-gazelarea").hide();
            }
            break;
        case "gazelarea":
            var km = $(this).val();
            $("#calc-gazelarea_value").html("Расстояние до населенного пункта: <b>" + km + "</b> км.");
            break;
        case "furniture":
            var furnit = $(this).val();
            $("#calc-furniture_value").html("Сборка/разборка перевозимой мебели: <b>" + furnit + "</b> ед.");
            break;
        case "packaging":
            var pack = $(this).val();
            $("#calc-packaging_value").html("Упаковка  мебели: <b>" + pack + "</b> ед.");
            break;
        case "container":
            var cont = $(this).val();
            if (cont == 1) {
                $("#calc-container").val("2");
                cont = $(this).val();
                $("#calc-container_value").html("Минимум 2-е суток: <b>" + cont + "</b> сут.");
            } else {
                $("#calc-container_value").html("Комплект(10 шт.) контейнеров 600х400х400: <b>" + cont + "</b> сут.");
            }
            break;
    }

    var gruzch = parseInt($("#calc-gruzch").val(), 10);
    var grhour = parseInt($("#calc-grhour").val(), 10);
    var gazelh = parseInt($("#calc-gazelh").val(), 10);
    var gazelarea;
    if (!isintercity) {
        gazelarea = 0;
    } else {
        gazelarea = parseInt($("#calc-gazelarea").val(), 10);
    }
    var furniture = parseInt($("#calc-furniture").val(), 10);
    var packaging = parseInt($("#calc-packaging").val(), 10);
    var conteiner = parseInt($("#calc-container").val(), 10);
    var conteinerprise;
    if (conteiner === 0 || conteiner === 1 || conteiner === 2) {
        conteinerprise = 1500 * conteiner;
    } else {
        conteinerprise = 3000 + (conteiner - 2) * 1000;
    }

    var targetGruzch = gruzch * grhour * 350;
    var targetGazel = 1300 * gazelh + gazelarea * 2 * 22;
    var targetFurniture = furniture * 2 * 500 + packaging * 300 + conteinerprise;
    var targetTotal = targetGruzch + targetGazel + targetFurniture;

    $("#calc-target-gruzch span").html("<b>" + targetGruzch + "</b> рублей");
    $("#calc-target-gazel span").html("<b>" + targetGazel + "</b> рублей");
    $("#calc-target-furniture span").html("<b>" + targetFurniture + "</b> рублей");
    $("#calc-target-total span").html("<b>" + targetTotal + "</b> рублей");
});