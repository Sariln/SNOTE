//<<<<How to install add id >>> s-noted <<< in to your text box>>>>
// <<<<v.0.0.1-beta>>>><<<<06>><<09>><<19>>>>
// Link Need to your header website 
// Bootstrap4 v5.1.2
// Jquery v3.4.1
$(document).ready(function(){
  var Selector = {
  HTML:'<div class="col-12 p-0 mx-auto border-top" id="s-note"></div>',
  TEXT:"OK",
  S_ICON:['code','bold','italic','underline','strikethrough','subscript','superscript','align-center','align-left','align-right','align-justify','list','list-ol','link','unlink'],
  MODE:['ShowCode','bold','italic','underline','strikethrough','subscript','superscript','justifyCenter','justifyLeft','justifyRight','justifyFull','insertUnorderedList','insertOrderedList','createLink','unLink'],
  IMAGE:'',
  MORE_FONT:window.sNote.FONT||"",
  ROUTE:window.sNote.ROUTE||"",
}
var FONT = {
  FACE:['Arial','Arial Black','Times New Roman','Roboto','Impact','Khmer OS','Khmer OS Battambang','Khmer OS Bokor','Khmer OS Content','Khmer OS Muol Light',Selector.MORE_FONT],
  SIZE:[8,10,12,15,24,30,36],
}
 var s_icon = "";
$("body").find("input#s-noted,textarea#s-noted").after(Selector.HTML);
for(var i = 0; i < (Selector.S_ICON).length ; i++){
  s_icon += '<button type="button" class="btn S-btn m-0 s-icon rounded-0" s-note="'+Selector.MODE[i]+'"><i class="fas fa-'+Selector.S_ICON[i]+'"></i></button>';
};
var f_face = "";
for(var i = 0; i < FONT.FACE.length-1 ; i++){ 
  f_face += '<option value="'+FONT.FACE[i]+'" style="font-family:'+FONT.FACE[i]+'">'+FONT.FACE[i]+'</option>';
  if((i+2) == FONT.FACE.length && Selector.MORE_FONT != ""){
    for(var j = 0;j < Selector.MORE_FONT.length;j++){
      f_face += '<option value="'+Selector.MORE_FONT[j]+'" style="font-family:'+Selector.MORE_FONT[j]+'">'+Selector.MORE_FONT[j]+'</option>';
    }
  }
};
var f_size = "";
for(var i = 0; i < (FONT.SIZE).length ; i++){ 
  f_size += '<option value="'+(i+1)+'">'+FONT.SIZE[i]+'</option>';
};
var NOTE = $("body").find("#s-note");
NOTE.html(s_icon); 
NOTE.append('<button type="button" class="btn S-btn m-0 rounded-0 s-icon LinkVideo"><i class="fab fa-youtube"></i></button>'); 
NOTE.append('<button type="button" class="btn S-btn m-0 rounded-0 s-icon Upload"><input type="file" class="Image" id="Image" name="Image"><i class="fas fa-image"></i></button>'); 
NOTE.append('<button type="button" class="btn S-btn m-0 rounded-0 s-icon ExpandNote"><i class="fas fa-expand"></i></button>'); 
NOTE.append('<select class="col-lg-3 col-sm-2 S-btn border-top-0 border-bottom-0 border-right-0 rounded-0 m-0 custom-select FontFace">'+f_face+'</select>');
NOTE.append('<select class="col-1 S-btn border-top-0 border-bottom-0 border-left-0 rounded-0 m-0 custom-select FontSize">'+f_size+'</select>'); 
NOTE.append('<button type="button" class="btn S-btn m-0 rounded-0 s-icon Upload"><input type="color" class="Color" id="Color" name="Color" s-note="foreColor"><i class="fas fa-font"></i></button>'); 
NOTE.append('<button type="button" class="btn S-btn m-0 rounded-0 s-icon Upload"><input type="color" class="Color" id="Color" name="Color" s-note="hiliteColor"><i class="fas fa-palette"></i></button>'); 
NOTE.append('<iframe id="iframe" class="border bg-white" width="100%" height="100%" name="s_note"></iframe>');

var iframe = $('#s-note').find('#iframe').contents().find('body');
function EnableNote(){
  s_note.document.designMode = 'On';
}
EnableNote();
NOTE.find("button").click(function(){
  var Event = $(this).attr("s-note");
  sNote(Event);
});
NOTE.find(".FontFace").change(function(){
  sNoteArg('fontName',$(this).val());
});
NOTE.find(".FontSize").change(function(){
  sNoteArg('fontSize',$(this).val());
});
NOTE.find(".Color").change(function(){
  sNoteArg($(this).attr("s-note"),$(this).val());
});
var x = 0;
var Link = "";
function sNote(cmd){
  if(cmd == 'createLink'){
    Link = prompt('Insert URL : ','http://');
    if(window.GetSelect() == 0){
      iframe.append("<a href='"+Link+"'>"+Link+"</a>");
    }else{
      sNoteArg(cmd, Link);
    }
  }
  else if(cmd == 'ShowCode'){
    if(x == 0){
      x++;
    var code = iframe.html();
    var CodeStr = new String(code);
    $("#s-note").find("button,select").hide();
    $("#s-note").find("button:first-child,button.ExpandNote").show();
    iframe.text(CodeStr);
    iframe.css({
      'font-family': "'Courier New', Courier, monospace",
      'font-size': '13px',
      'color': '#ddca7e',
      'background':'#1d1e22',
    })
    }else{
    x--;  
    var code = iframe.text();
    iframe.html(code);
    iframe.removeAttr('style');
    $("#s-note").find("button,select").show();
    }
  }else{
    s_note.document.execCommand(cmd, false, null);
  }
}
function sNoteArg(cmd, arg){
  s_note.document.execCommand(cmd, false, arg);
  if(cmd == 'insertImage'){
    iframe.find('img[src="'+arg+'"]').css({
      'width' : '100%',
    });
    iframe.find('img[src="'+arg+'"]').after('<div><br></div>').before('<div><br></div>');
  }
}
$("#s-note").find(".LinkVideo").click(function(){
  LinkVideo = prompt('Insert Video URL : ','');
  var youTubeUrl = LinkVideo;
  if(youTubeUrl != ''){
    var youTubeId;
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = youTubeUrl.match(regExp);
    if (match && match[2].length == 11) {
        youTubeId = match[2];
    } else {
        youTubeId = 'no video found';
    }
  iframe.append('<div><br></div><div style="position: relative;width: 100%;height: 0;padding-bottom: 56.25%;"><iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="//www.youtube.com/embed/'+youTubeId+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div><br></div>');
  }
});
$("#s-note").find(".Image").change(function(){
  Selector.IMAGE = $(this).val();
  // var Image = "<img src='"+Selector.IMAGE+"' width='100%'>";
  var form = $(this).closest('form');
  var frm = new FormData(form[0]);
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
  $.ajax({
      url:Selector.ROUTE,
      method:"POST",
      data:frm,
      contentType:false,
      cache:false,
      processData:false,
      dataType:'json',
      success:function(data){
        sNoteArg('insertImage',data.image_path+data.image);
      }
    
  });
});
$("body").find("input#s-noted").attr('type','hidden');
$("body").find("textarea#s-noted").css({display:'none'});
var DesData = $("body").find("input#s-noted,textarea#s-noted").val();
var Submit = $("body").find("form").find('input[type="submit"],button[type="submit"]');

Submit.click(function(e){
    var desData = iframe.html();
    $(this).parents('form').find("input#s-noted,textarea#s-noted").val(desData);
    // e.preventDefault();
});

var i = 1;
var snote = NOTE;
$("#s-note").find(".ExpandNote").click(function(){
  if(i==1){
    snote.removeClass('FullNote');
    snote.addClass('MediumNote');
    i++;
  }
  else if(i==2){
    $(this).find('i').removeClass('fa-expand');
    $(this).find('i').addClass('fa-compress');
    snote.removeClass('FullNote MediumNote');
    snote.addClass('FullNote');
    i-=2;
  }
  else{
    $(this).find('i').addClass('fa-expand');
    $(this).find('i').removeClass('fa-compress');
    snote.removeClass('FullNote MediumNote');
    i++;
  }
});

$("#iframe").ready(function(){
  iframe.append(DesData);
});
});
// Global Function Getselect
window.GetSelect = function GetSelect(){
    var x = document.getElementById("iframe");
    if (x.contentDocument.getSelection() != ""){
      return 1;
    }else{
      return 0;
    }
};