<?php
session_start();
    require_once('clases/lib/nusoap.php');
    require_once('clases/Usuario.php');

    $usuario = isset($_POST['usuario']) ? json_decode(json_encode($_POST['usuario'])) : NULL;
    //var_dump($usuario);
    $obj = new Usuario();
    $obj->email=$usuario->Email;
    $obj->password=$usuario->Password;
    $obj->Exito = TRUE;
    $obj->Mensaje = "";
    $user=Usuario::TraerUsuarioLogueado($obj);
    //var_dump($user);

    if(!$user)
    {
       echo "Usuario o Contraseña incorrectos";		
    }
    else
    {

    	$_SESSION['user']['mail'] = $usuario->Email;
        $_SESSION['user']['nombre']=$user->nombre; 
        $_SESSION['user']['perfil']=$user->perfil;
        //var_dump($_SESSION);
        setcookie("mail",$usuario->Email, time()+30  , '/');
        setcookie("nombre",$user->nombre, time()+30  , '/');
        echo ("Bienvenido " . $user->nombre);
    }
 //IMPLEMENTAR...


  //  echo json_encode($obj);
    ?>