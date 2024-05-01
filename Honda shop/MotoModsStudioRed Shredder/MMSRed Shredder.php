<?php
include("../../header.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MotoModsStudio Red Shredder</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../../header.css">
    <link rel="stylesheet" href="../../footer.css">
    <link rel="stylesheet" href="../../DesignPageFiles/style.css">
    <link rel="icon" href="../../bildes/MotomodsStudio.png">
  
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-58YLPGKCVW"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-58YLPGKCVW');
</script>

  </head>
  <body>
    
    <div class = "card-wrapper">
      <div class = "card">
        <!-- card left -->
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img src = "MMSRedShredder/MMSRed Shredder1.png" alt = "bike image">
              <img src = "MMSRedShredder/MMSRed Shredder2.png" alt = "bike image">
              <img src = "MMSRedShredder/MMSRed Shredder3.png" alt = "bike image">
              <img src = "MMSRedShredder/Number-font-style.png" alt = "number font style image">
              <img src = "MMSRedShredder/seat covers.png" alt = "seat cover image">
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img src = "MMSRedShredder/MMSRed Shredder1.png" alt = "bike image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img src = "MMSRedShredder/MMSRed Shredder2.png" alt = "bike image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img src = "MMSRedShredder/MMSRed Shredder3.png" alt = "bike image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img src = "MMSRedShredder/Number-font-style.png" alt = "number font style image">
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "5">
                <img src = "MMSRedShredder/seat covers.png" alt = "seat cover image">
              </a>
            </div>
          </div>
        </div>
        <!-- card right -->
        <div class = "product-content">
          <h2 class = "product-title">MotoModsStudio Red Shredder</h2>

          <div class = "product-price">
            <p class = "last-price">Price: <span id="originalPrice">$15.00</span></p>
            <p class = "discounted-price" style="display: none;">Discounted Price: <span id="discountedPrice"></span></p>
          </div>

          <div class = "product-detail">
            <h2>Description: </h2>
            <p>The MotoModsStudio Red Shredder is a custom Honda dirt bike built for tearing up the track. The eye-catching<span id="dots">...</span><span id="more"> design features a bold red base accented with black detailing, giving it an aggressive and ready-to-race look.<br>
            Performance-focused upgrades are likely throughout the machine, although specifics are obscured in the image. This custom Honda is sure to turn heads and dominate the competition.</span></p>
              <button onclick="myFunction3()" id="myBtn" style="width: 6rem;font-size: 15px;padding: 5px;">Read more</button>
            <ul>
              <li>Available: <span>Mx simulator<span style="color: green;">✓</span><span> Mx bikes<span style="color: green;">✓</span></span></span></li>
              <li>Category: <span>Honda</span></li>
            </ul>
          </div>

          <div class="discount-code">
            <label for="discountCode">Enter Discount Code:</label>
            <input type="text" id="discountCode" name="discountCode" style="width:120px;">
            <button onclick="applyDiscount()">Apply</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="availableBikes">Available Bike year</h2>
    <table class="tabula">
      <tr>
        <th>Bike</th>
        <th>Mx Simulator</th>
        <th>Mx Bikes</th>
      </tr>
      <tr>
        <td>Honda</td>
        <td>2023, 2022, 2021</td>
        <td>2023</td>
      </tr>
    </table>

    <div class="container">
      <form action="https://formspree.io/f/mnqyojgj" method="POST">
        <input type="text" name="Honda" value="MotoModsStudio Red Shredder" style="display: none;">
        <h2>GAME</h2>
<select name="Game" id="slct1" style="max-width: 60%;">
    <option>Select an option...</option>
</select>

<div id="secondDropdownContainer"></div>

          
<h2>FOR THE TEAM</h2><div class="tooltip"><img src="https://cdn.iconscout.com/icon/free/png-256/free-information-notice-info-ui-tooltip-guide-30515.png" style="width:30px;"><span class="tooltiptext">You Pay For The Design Of Each Rider. Example (3 Team Riders * 15$ = 45$).</span></div>
        <select name="Team" id="slct4" style="max-width: 60%;" onchange="showRiderInputs()"></select>

<div id="riderInputsContainer"></div>

<h2 id="modelcc">MODEL / CC</h2>
<select name="Model" id="slct2" style="max-width: 60%;">
    <option>Select an option...</option>
</select>

<h2>NUMBER FONT STYLE</h2>
<select name="Number font style" id="slct3" style="max-width: 60%;">
    <option>Select an option...</option>
</select>

<h2>SEAT COVER</h2>
            <select name="Seat cover" id="slct5" style="max-width: 60%;" onchange="applyDiscount()">
                 <option>Select an option...</option>
            </select>
<!-- <input type="text" id="otherSeatCover" name="Other Seat cover" placeholder="Seat cover" style="max-width: 60%; display: none;"> -->

<h2 id="racenumber">RACE NUMBER</h2>
<select name="Race number" id="numberSelect" style="width: 140px;">
    <option></option>
</select>

        <input type="text" name="Full Name" placeholder="Full name" id="fullname" style="max-width: 60%;">
          <input type="email" name="gmail" placeholder="gmail" style="max-width: 60%;">

          <h2>LOGOS</h2>
          <p>Rank the logo modifications in descending order of significance, <br>or, if you prefer the ones showcased, type "as shown".</p>
          <textarea name="Message" placeholder="Logos" style="max-width: 60%;"></textarea>

          <textarea name="Message" placeholder="Message (Optional)" style="max-width: 60%;" ></textarea>
          <input type="hidden" name="DiscountCodeUsed" id="discountCodeUsed">
          <button type="submit">Send</button>
      </form>
  </div>

  <script>
    function myFunction3() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      }
    }
    </script>  
    <script src="../../dropdown.js"></script>
    <script src="select.js"></script>
    <script src="../../DesignPageFiles/select.js"></script>
    <script src="../../script.js"></script>
    <script src="../../discount.js"></script>
  </body>
</html>
<?php
include("../../footer.php");
?>