import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flatty-login',
  encapsulation: ViewEncapsulation.None,

  styles: [`   
    .login {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .contrast-background {
        background-color: #f34541 !important;
    }   
    .login .middle-container {
        overflow: visible;
        display: table;
        position: static;
        width: 100%;
        height: 100%;
    }
    .login .middle-container .middle-row {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        position: static;
    }
    .login .middle-container .middle-row .middle-wrapper {
        position: static;
    }
    .login .login-container-header {
        padding: 70px 0;
    }
   
    .login .login-container {
        background-color: white;
        position: relative;
        padding: 40px 0;
        -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    }
    .login .login-container:before {
        content: '';
        position: absolute;
        margin-left: -10px;
        left: 50%;
        top: -10px;
        border-bottom: 10px solid white;
        border-top: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
    .login .login-container .title {
        margin: 0 0 20px 0;
        font-size: 28px;       
        font-weight: 400;
        color: #222222;        
    }
    .login .login-container .with-icon-over-input {
        position: relative;
    }
    .login .login-container .with-icon-over-input [class^="fa"] {
        position: absolute;
        right: 10px;
        top: 9px;
    }
    .login .login-container .with-icon-over-input input[type="text"] {
        padding-right: 28px;
    }
    .login .login-container-footer {
        padding: 40px 0;
    }
    .login .login-container-footer a {
        color: white;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
    .login .validate-form input[type="text"], 
    .login .validate-form input[type="password"] {
        border-radius: 0;
    }
    .login .validate-form input[type="text"]:focus,
    .login .validate-form input[type="password"]:focus {
        border-color: #aaaaaa;
        -webkit-box-shadow: 0 0 8px #dce1e5;
        -moz-box-shadow: 0 0 8px #dce1e5;
        box-shadow: 0 0 8px #dce1e5;
    }
    .login .validate-form .form-control {
        color: #3c3c3c;
        border-color: #d0d0d0;
        background-color: white;       
        font-size: 12px;
        font-weight: 100;
    }
    .login.contrast-background .btn {
        border-radius: 0;
        background-color: whitesmoke;
        border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        outline: none;
    }      
    .login.contrast-background .btn:hover {
        border-radius: 0;
        background-color: #d7d7d7;
        border-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.35);
        -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        outline: none;
    }  
    .login a {
        color: #222222;
        font-weight: 100;
    }
    .login a:hover {
        cursor: pointer;
    }
  `],
  template: `
    <section class="content layout-margin">
      <p>Flatty login DEMO</p>
      <div class="login contrast-background">
        <div class="middle-container">
          <div class="middle-row">
            <div class="middle-wrapper">
              <div class="login-container-header">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-12">
                      <div class="text-center">
                        <img width="121" height="31" src="assets/images/logo_lg.svg" alt="Login logo">
                      </div>        
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="login-container">
                <div class='container'>
                  <div class='row'>
                    <div class='col-sm-4 col-sm-offset-4'>
                      <h1 class='text-center title'>Sign in</h1>
                      <form class='validate-form'>
                        <div class='form-group'>
                          <div class='controls with-icon-over-input'>
                            <input type="text"         
                                   class="form-control"
                                   placeholder="E-mail" name="email" />
                            <i class="fa fa-user text-muted"></i>
                          </div>
                        </div>
                        <div class='form-group'>
                          <div class='controls with-icon-over-input'>
                            <input type="password"
                                   placeholder="Password" 
                                   class="form-control" name="password" />
                            <i class='fa fa-lock text-muted'></i>
                          </div>
                        </div>
                        <div class='checkbox'>
                          <label for='remember_me'>
                            <input id='remember_me' name='remember_me' type='checkbox' value='1'>
                            Remember me
                          </label>
                        </div>
                        <button class='btn btn-block'>Sign in</button>
                      </form>
                      <div class='text-center'>
                        <hr class='hr-normal'>
                        <a>Forgot your password?</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="login-container-footer">
                <div class='container'>
                  <div class='row'>
                    <div class='col-sm-12'>
                      <div class='text-center'>
                        <a>
                          <i class='fa fa-user'></i>
                          New to Flatty?
                          <strong>Sign up</strong>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>              
              </div>
            </div>  
          </div>
        </div>          
      </div>
    </section>
  `
})
export class FlattyLogin {
  
}