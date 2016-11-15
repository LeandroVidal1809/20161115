<?php
//require_once("verificar_sesion.php");
session_start();
if(isset($_SESSION["user"]))
{
$user = $_SESSION["user"];

//var_dump($user);
}
else
{$user=null;}
?>
<html>
    <head>
        <title>PROGRAMACION III</title> 

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script type="text/javascript" src="./js/funciones.js"></script>
        <script type="text/javascript" src="./js/funciones_login.js"></script>
        <script type="text/javascript" src="./js/jquery.js"></script>

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/estilo.css">
        <link rel="stylesheet" type="text/css" href="css/animacion.css">

    </head>
    <body>
        <div class="container" style="width:100%" >
            <div class="page-header">
                <?php
                
                $user = json_encode($user);
                //var_dump($objUser);
                echo "<a class='btn btn-success animated bounceInLeft' href='#' onclick='Enunciado()'><span class='glyphicon glyphicon-home'>&nbsp;</span>Enunciado</a>";
                echo "<a class='btn btn-default animated bounceInLeft' href='#' onclick='MostrarGrilla()'><span class='glyphicon glyphicon-th'>&nbsp;</span>Grilla&nbsp;</a>";

                echo "<a class='btn btn-info animated bounceInLeft' href='#' onclick='CargarFormUsuario()'><span class='glyphicon glyphicon-user'>&nbsp;</span><span class='glyphicon glyphicon-plus-sign'></span>Agregar Usuario&nbsp;</a>";
                echo "<a class='btn btn-primary animated bounceInLeft' href='#' onclick='EditarUsuario($user)'><span class='glyphicon glyphicon-user'></span>Editar Perfil&nbsp;</a>";
                echo "<a class='btn btn-danger animated bounceInLeft' href='#' onclick='Logout()'><span class='glyphicon glyphicon-off'></span>LogOut&nbsp;</a>";
                $objUser = json_decode($user); 
                ?>
                <span id="spanDatos" class="animated bounceInRight" style='margin-top:-10px' ><h3><?php echo $objUser->nombre . " - " . $objUser->perfil; ?>&nbsp;&nbsp;</h3></span>
            </div>
            <h1 style="font-size:28px">SEGUNDO PARCIAL</h1>
             <h1 style="font-size:28px">
             <?php 
              //  if(!isset($_SESSION['mail']))
                //    echo ("Usuario: " .$_SESSION['nombre']);
               ?> 
            </h1>
            <hr/>
            <div id="divAbm"  style='border-style:none;float:left;width:30%'>
                <?php if(isset($_COOKIE["mail"])){
                     echo $_COOKIE['mail'];  ?>
                        <br>
                    <?php echo $_COOKIE['nombre']; }?>
            </div>
            <div id="divGrilla"  style='border-style:none;float:right;width:70%'>
                
            </div>
        </div>
    </body>
</html>