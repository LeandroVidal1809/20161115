
function Login() {
//alert("aca");
    var pagina = "./admin_login.php";

    var usuario = {};
    usuario.Email=$("#email").val();
    usuario.Password=$("#password").val()
    $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
            usuario: usuario
        },
        async: true
    })
    .done(function (objJson) {
        alert(objJson);
        //alert("acaSS");
        window.location.href = "index.php";
     
        
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert("falla");
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });


}

 function CerrarSesion()
    {
        var pagina = "./administracion.php";
      $.ajax({
        type: 'POST',
        url: pagina,
        //dataType: "json",
        data: {
           // usuario: usuario
            queMuestro:'CerrarSesion'
        },
        async: true
    })
    .done(function (objJson) {
        //alert(objJson);
        //alert("acaSS");
       // window.location.href = "index.php";
        Logout();
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert("falla");
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
        $_SESSION['user']['mail']=null;
        $_SESSION['user']['nombre']=null;
        $_SESSION['user']['perfil']=null;
        Logout();
    }
