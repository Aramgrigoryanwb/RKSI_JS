let img;
$('input:file').change(function(){
      img = this.files;
   });
$('form').submit(function(event){
    event.preventDefault();
    let form = new FormData();
    let dataForm = JSON.stringify($(this).serializeArray());
    console.log(dataForm);
    form.append("dataForm", dataForm);
    $.each(img, function(key, value){
        form.append(key, value);
    });
    // console.log(img);
    $.ajax({
        url: "reg.php",
        type: "POST",
        data: form,
        cache: false,
        processData: false,
        contentType: false,
        success: function(res){
            let r = JSON.parse(res);
            if (r.success ==1 ){
                alert("Зарегистрирован");
            } else {
                alert(r.error);
            }
        }, 
    });
});

 
