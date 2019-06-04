<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-10 col-md-8 col-lg-6 centered">
          <img class="logo" alt="Parken" src="../assets/logo.png">
          <div class="card shadow ">
            <article class="card-body">
              <h4 class="card-title text-center mb-4 mt-1">Inicio de Sesión</h4>
              <hr>
              <p class="text-center">Por favor introduzca su nombre de usuario y contraseña</p>
              <form>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                    </div>
                    <input name="" class="form-control" placeholder="Usuario" type="email">
                  </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                    </div>
                      <input class="form-control" placeholder="******" type="password">
                  </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                  <button type="submit" class="btn btn-accent btn-block">Iniciar Sesión</button>
                </div> <!-- form-group// -->
                <p class="text-center"><a href="#" class="btn">¿Olvidó su contraseña?</a></p>
              </form>
            </article>
          </div> <!-- card.// -->
        </div>
      </div>      
    </div> 
  </div>
</template>

<style>
  

  .login {
    height: 100vh;
    background: linear-gradient(#FF9800 330px, #fff 330px);
  }

  .container{
    padding: 30px;    
  }

  .card {
    margin-top: 25px;
  }
</style>
