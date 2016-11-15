function Enunciado() {

    var pagina = "./enunciado.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        async: true
    })
    .done(function (grilla) {

        $("#divGrilla").html(grilla);

        var pagina = "./puntaje.php";

        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "html",
            async: true
        })
        .done(function (grilla) {

            $("#divAbm").html(grilla);

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function MostrarGrilla() {
  //  alert("aca");
    var pagina= "./administracion.php";
    $.ajax({type:'POST',
            url:pagina,
            data:{queMuestro: "MOSTRAR_GRILLA"},
            async:true
        })
    .then(
    function(exito){
        //alert(exito);
        $("#divGrilla").html(exito);     

    },
    function(error){
     
    });

}
function CargarFormUsuario() {

    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "FORM"
        },
        async: true
    })
    .done(function (html) {

        $("#divAbm").html(html);
        $('#cboPerfiles > option[value="usuario"]').attr('selected', 'selected');
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function AgregarUsuario() {
   // alert("aca");

var pagina = "./administracion.php";
var nombre = $("#txtNombre").val();
var email = $("#txtEmail").val();
var password = $("#txtPassword").val();
var perfil= $("#cboPerfiles").val();
var usuario={};
//alert(password);
usuario.nombre=nombre;
usuario.email=email;
usuario.password=password;
usuario.perfil=perfil;

$.ajax({url:pagina,type:'post',
    data:{queMuestro:"ALTA_USUARIO",
    usuario:usuario
    }})
   .then(function(exito){
  // alert(exito);
    alert("Ingresado Exitosamente!");
    MostrarGrilla();
     //     $("#principal").html(exito);
   },function(error){
    alert(error);

   });
}

function EditarUsuario($vec) {//#sin case
//alert($vec);
    var pagina = "./administracion.php";
var obj = $vec;
    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "FORM",
            usuario: obj
        },
        async: true
    })
    .done(function (html) {

        $("#divAbm").html(html);

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function ModificarUsuario($id) {//#3a
//alert("aca");
    if (!confirm("Modificar USUARIO?")) {
      
        return;
    }
//alert("pasooo");
var pagina = "./administracion.php";
var id = $id;
var nombre = $("#txtNombre").val();
var email = $("#txtEmail").val();
var password = $("#txtPassword").val();
var perfil= $("#cboPerfiles").val();
var usuario={};
usuario.id=id;
usuario.nombre=nombre;
usuario.email=email;
usuario.password=password;
usuario.perfil=perfil;
//alert(id);
//alert("paso");
$.ajax({url:pagina,type:'post',
    data:{queMuestro:"MODIFICAR_USUARIO",
    usuario:usuario
    }})
   .then(function(exito){
   //alert(exito);
    alert("Ingresado Exitosamente!");
    MostrarGrilla();
     //     $("#principal").html(exito);
   },function(error){
    //alert(error);

   });
}

function EliminarUsuario($vec) {//#3b

    if (!confirm("Eliminar USUARIO?")) {
        return;
    }


    var pagina = "./administracion.php";

    //var id = $("#hdnIdUsuario").val();
    //var foto = $("#hdnFotoSubir").val();

    var usuario = {};
    usuario.id = $vec.id;

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "json",
        data: {
            queMuestro: "ELIMINAR_USUARIO",
            usuario: usuario
        },
        async: true
    })
    .done(function (objJson) {

        if (!objJson.Exito) {
            alert(objJson.Mensaje);
            return;
        }

        alert(objJson.Mensaje);

        $("#divAbm").html("");
        MostrarGrilla();

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function Logout() {//#5
    
    var pagina = "./administracion.php";

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "html",
        data: {
            queMuestro: "LOGOUT"
        },


        async: true
    })
    .done(function (html) {

        window.location.href = "login.php?uss=1";
        

    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });

}
function traerCdsConWS(){
    
//implementar...

}
