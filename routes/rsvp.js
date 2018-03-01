var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.addRSVP = function(req,res){
  var rsvpEmail = req.body.rsvpEmail;
  console.log(rsvpEmail); //will print in terminal when POST is made
  data.rsvp.push(rsvpEmail); //add to current data
  res.send(rsvpEmail);
}

exports.adminView = function(req, res){
  res.render('rsvp', data);
};
