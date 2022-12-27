

<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      href="css/style.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        
       
    
    
        .app-container {
          height: 100vh;
          width: 100%;
        }
        .complete {
          text-decoration: line-through;
        }
      </style>
    </head>
    <body>
        <div
        class="app-container d-flex align-items-center justify-content-center flex-column"
        ng-app="myApp"
        ng-controller="myController"
      >
      <style>
      .form-control {
        height: 41px;
        background: #f2f2f2;
        box-shadow: none !important;
        border: none;
      }
      </style>
    <% if (locals.messages.errors) { %>
        <% messages.errors.forEach( el => { %>
            <div class="alert alert-danger"><%= el.msg %></div>
        <% }) %>    
    <% } %>
    <% if (locals.messages.info) { %>
        <% messages.info.forEach( el => { %>
            <div class="alert alert-danger"><%= el.msg %></div>
        <% }) %>    
    <% } %>
    <style>
        
    </style>
    </head>
    <div class="login">
        
           <h1><center>Account Login</center></h1>
           
             
                
    <form action="/login" method="POST" >
     
      
     
      <div class="form-group">
      
        <input 
        type = "email" name= "email"  class="form-control" placeholder="Email">
        </div>
        <div class="form-group">

        <input type="password" name="password"  class="form-control" placeholder="Password">

        <div class="form-group">

        <input type="submit" class = "btn btn-danger btn mr-3 btn">
        
        </div>
        </div>
    </div>
    </form>
</body>
</html>
<!--
<style>
  
  .form-control {
    height: 41px;
    background: #f2f2f2;
    box-shadow: none !important;
    border: none;
  }
  .form-control:focus {
    background: #e2e2e2;
  }
  .form-control, .btn {        
    border-radius: 3px;
  }
  .signup-form {
    width: 400px;
    margin: 30px auto;
  }
  .signup-form form {
    color: #999;
    border-radius: 3px;
    margin-bottom: 15px;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .signup-form h2  {
    color: #333;
    font-weight: bold;
    margin-top: 0;
  }
  .signup-form hr  {
    margin: 0 -30px 20px;
  }    
  .signup-form .form-group {
    margin-bottom: 20px;
  }
  .signup-form input[type="checkbox"] {
    margin-top: 3px;
  }
  .signup-form .row div:first-child {
    padding-right: 10px;
  }
  .signup-form .row div:last-child {
    padding-left: 10px;
  }
  .signup-form .btn {        
    font-size: 16px;
    font-weight: bold;
    background: #3598dc;
    border: none;
    min-width: 140px;
  }
  .signup-form .btn:hover, .signup-form .btn:focus {
    background: #2389cd !important;
    outline: none;
  }
  .signup-form a {
    color: #fff;
    text-decoration: underline;
  }
  .signup-form a:hover {
    text-decoration: none;
  }
  .signup-form form a {
    color: #3598dc;
    text-decoration: none;
  }	
  .signup-form form a:hover {
    text-decoration: underline;
  }
  .signup-form .hint-text  {
    padding-bottom: 15px;
    text-align: center;
  }
  </style>
  </head>
  <body>
  <div class="signup-form">
      <form action="/examples/actions/confirmation.php" method="post">
      <h2>Sign Up</h2>
      <p>Please fill in this form to create an account!</p>
      <hr>
          <div class="form-group">
        <div class="row">
          <div class="col"><input type="text" class="form-control" name="username" placeholder="username" required="required"></div>
          
        </div>        	
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Email" required="required">
          </div>
      <div class="form-group">
              <input type="password" class="form-control" name="password" placeholder="Password" required="required">
          </div>
      <div class="form-group">
              <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
          </div>        
          
     
      </form>
    
  </div>
  </body>
  </html>

-->
