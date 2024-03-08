<?php
if(isset($_REQUEST['name'])){
$to  = 'jhaankur269@gmail.com'; // note the comma
// subject
$subject = 'Hines Reserve';
// message
$message = '
  <table>    
    <tr>
      <td>Name</td><td>'.$_REQUEST['name'].'</td>
    </tr>
    <tr>
      <td>Email</td><td>'.$_REQUEST['email'].'</td>
    </tr>
    <tr>
      <td>Phone</td><td>'.$_REQUEST['mobile'].'</td>
    </tr>
    // <tr>
    //   <td>Query</td><td>'.$_REQUEST['message'].'</td>
    // </tr>
  </table>
</body>
</html>
';
// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// Additional headers
$headers .= 'From: Conscient hines <info@dlfbuilders.co.in>' . "\r\n";

// Mail it
 @mail($to, $subject, $message, $headers);
}
?>
<script>
// alert('Enquiry has been sent successfully. We will get back to you soon.');
window.location="thanks.html";
</script>