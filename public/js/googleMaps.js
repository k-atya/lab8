function initMap() {
	// add your code here
  var ucsd_ltlng = {lat:32.880, lng:-117.236};

  //Create map object and specify the DOM element for display
  var map = new google.maps.Map(document.getElementbyID('map'), {
    center: ucsd_ltlng,
    zoon: 15
  });

  var marker = new google.maps.Marker({
    position: ucsd_ltlng,
    map: map,
    title: "UCSD"
  });
}
