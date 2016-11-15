<?php
//require_once("verificar_sesion.php");

require_once("clases/AccesoDatos.php");
require_once("clases/Usuario.php");
//var_dump($usuario);
if (!isset($usuario)) {//alta
    $nombre = "";
    $email = "";
    $id = "";
    $password="";
    $botonClick = "AgregarUsuario()";
    $botonTitulo = "Guardar";
} else 
{
    $nombre = $usuario->nombre;
    $email = $usuario->mail;
    $obj=Usuario::TraerUnIDPorMail($email);
    $id=$obj->id;
    $password=$obj->password;
    $botonClick = "ModificarUsuario($id)";    
    $botonTitulo = "Editar Perfil"; 
}


$perfiles = Usuario::TraerTodosLosPerfiles();

?>
<div id="divFrm" class="animated bounceInLeft" style="height:330px;overflow:auto;margin-top:0px;border-style:solid">
    <input type="hidden" id="hdnIdUsuario" value="<?php echo $id; ?>" />
    <input type="text" placeholder="Nombre" required="" id="txtNombre" value="<?php echo $nombre; ?>" />
    <input type="text" placeholder="E-mail" required="" id="txtEmail" value="<?php echo $email; ?>" />
    <input type="password" placeholder="Password" required="" id="txtPassword" value="<?php echo $password; ?>" />

    <span>Perfil</span>
    <select id="cboPerfiles" >
        <?php
        foreach ($perfiles AS $p) {
            $miPerfil = isset($usuario->perfil) ? $usuario->perfil : "";
            $selected = $miPerfil == $p["perfil"] ? "selected" : "";
            echo "<option value='" . $p["perfil"] . "' " . $selected . ">" . $p["perfil"] . "</option>";
        }
        ?>	
    </select>
    <br/><br/>

    <input type="button" class="MiBotonUTN" onclick="<?php echo $botonClick; ?>" value="<?php echo $botonTitulo; ?>"  />
    <input type="hidden" id="hdnQueHago" value="agregar" />
</div>