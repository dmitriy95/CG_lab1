$(function () {
    $('#1').click(function(){
$('#myTable tbody>tr:last').clone(true).insertAfter('#myTable tbody>tr:last'); 
});
    $('#2').click(function(){
    $('#myTable tr:last').remove();
});
});
  

    


