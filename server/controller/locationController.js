const locationController = {};

locationController.getLatLng = (req, res, next) => {
  console.log('inside locationController')

  // let loc = [];
  // geocoder.geocode("Los Angeles", function ( err, data ) {
  //     loc = data;
  //     console.log('i dataaaaa in getLongLat', data)
  //     res.locals.loc;
  //     next();
  // });   
};

locationController.getEvents = (req, res, next) => {
    
};

module.exports = locationController;