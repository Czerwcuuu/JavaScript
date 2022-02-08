const API_KEY = 'ccd7d3931b9c3b669eaf45e6fc10cd77';
const ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=' + API_KEY;
let map = null;

$('#check-weather').click(function () { //Sprawdza czy jest podana nazwa miasta
if (!$('#city-name').val()) {
    $('#city-name-validation').show();
    return;
}

$("#loader").removeClass('d-none');

$.ajax({
    url: ENDPOINT + '&q=' + $('#city-name').val(),
    type: 'GET',
    success: function (result) {
        $('.list-group.weather').html('');
        $.each(result.list, function (index, value) {
            $('.list-group.weather').append(
                '<div class="list-group-item list-group-item-action list-groupitem list-group-item-light">' +
                '<span class="date">' + new Date(value.dt *
                    1000).toLocaleString() + '</span>' +
                '<p class="temperature">' +
                '<img src="http://openweathermap.org/img/wn/' +
                value.weather[0].icon +
                '@2x.png" alt="icon"/>' +
                value.main.temp + ' C</p>' +
                '</div>'
            )
        });
        if (map != undefined) {
            map.remove();
        }
        map = L
            .map('map')
            .setView(
                [
                    result.city.coord.lat,
                    result.city.coord.lon,
                ],
            );
        L
            .tileLayer(
                'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href = "http://osm.org/copyright" > OpenStreetMap < /a> contributors'
                }
            ).addTo(map);
        L.circle(
                [
                    result.city.coord.lat,
                    result.city.coord.lon,
                ], {
                    color: '#005b96',
                    fillColor: '#005b96',
                    fillOpacity: 0.5,
                    radius: 999
                }
            )
            .addTo(map);
    },
    complete: function () {
        $("#loader").addClass('d-none');
    },
})
});