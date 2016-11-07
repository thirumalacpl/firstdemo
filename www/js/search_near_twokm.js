$(document).on('pageshow', '#search_near_twokm', function(){ 

alert('Doctors around 2km');
twokm =  JSON.parse(sessionStorage.getItem("twokm")); 

  $(document).off('click', '#doctaroundtopageone').on('click', '#doctaroundtopageone', function() {
    sessionStorage.clear();
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });

$('#cadd').empty();

for(a=0;a<twokm.length;a++){
  var twokm_sear_add = twokm[a];
  var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href=""><i class="zmdi zmdi-assignment-account zmd-fw" style="color: white;font-size:30px;"></i></a></span><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'
  
  //var dfr = '<li><div class="nd2-card card-media-right card-media-small"><div class="card-title bgc"><span style="float: right;width: 150px;color: white;"><a href="tel:'+twokm_sear_add.contact_no+'"><i class="zmdi zmdi-phone " style="color: white;padding-right: 25px;font-size:30px;"></i></a><a href="intent://send/'+twokm_sear_add.contact_no+'#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end"><i class="zmdi zmdi-whatsapp " style="color: white;padding-right: 25px; font-size:30px;"></i></a><a href="geo:0,0?q='+twokm_sear_add.hospital_name+'+'+twokm_sear_add.address+';"><i class="zmdi zmdi-turning-sign" style="color: white;font-size:30px;"></i></a></span><h3 style="color:white" class="card-primary-title">'+twokm_sear_add.doctor_name+'</h3><br><h4 style="color:white" class="card-subtitle">'+twokm_sear_add.hospital_name+'</h4><br><h5 style="color:white" class="card-subtitle">'+twokm_sear_add.address+'</h5></div></div></li>'

$('#cadd').append(dfr);

}


});