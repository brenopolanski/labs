<template>
  <div class="wrapper">
    <div class="table">
      <div class="row header">
        <div class="cell">Name</div>
        <div class="cell">Age</div>
        <div class="cell">Occupation</div>
        <div class="cell">Location</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Name">Luke Peters</div>
        <div class="cell" data-title="Age">25</div>
        <div class="cell" data-title="Occupation">Freelance Web Developer</div>
        <div class="cell" data-title="Location">Brookline, MA</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Name">Joseph Smith</div>
        <div class="cell" data-title="Age">27</div>
        <div class="cell" data-title="Occupation">Project Manager</div>
        <div class="cell" data-title="Location">Somerville, MA</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Name">Maxwell Johnson</div>
        <div class="cell" data-title="Age">26</div>
        <div class="cell" data-title="Occupation">UX Architect & Designer</div>
        <div class="cell" data-title="Location">Arlington, MA</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Name">Harry Harrison</div>
        <div class="cell" data-title="Age">25</div>
        <div class="cell" data-title="Occupation">Front-End Developer</div>
        <div class="cell" data-title="Location">Boston, MA</div>
      </div>
    </div>

    <div class="table">
      <div class="row header green">
        <div class="cell">Product</div>
        <div class="cell">Unit Price</div>
        <div class="cell">Quantity</div>
        <div class="cell">Date Sold</div>
        <div class="cell">Status</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Product">Solid oak work table</div>
        <div class="cell" data-title="Unit Price">$800</div>
        <div class="cell" data-title="Quantity">10</div>
        <div class="cell" data-title="Date Sold">03/15/2014</div>
        <div class="cell" data-title="Status">Waiting for Pickup</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Product">Leather iPhone wallet</div>
        <div class="cell" data-title="Unit Price">$45</div>
        <div class="cell" data-title="Quantity">120</div>
        <div class="cell" data-title="Date Sold">02/28/2014</div>
        <div class="cell" data-title="Status">In Transit</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Product">27" Apple Thunderbolt displays</div>
        <div class="cell" data-title="Unit Price">$1000</div>
        <div class="cell" data-title="Quantity">25</div>
        <div class="cell" data-title="Date Sold">02/10/2014</div>
        <div class="cell" data-title="Status">Delivered</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Product">Bose studio headphones</div>
        <div class="cell" data-title="Unit Price">$60</div>
        <div class="cell" data-title="Quantity">90</div>
        <div class="cell" data-title="Date Sold">01/14/2014</div>
        <div class="cell" data-title="Status">Delivered</div>
      </div>
    </div>

    <div class="table">
      <div class="row header blue">
        <div class="cell">Username</div>
        <div class="cell">Email</div>
        <div class="cell">Password</div>
        <div class="cell">Active</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Username">ninjalug</div>
        <div class="cell" data-title="Email">misterninja@hotmail.com</div>
        <div class="cell" data-title="Password">************</div>
        <div class="cell" data-title="Active">Yes</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Username">jsmith41</div>
        <div class="cell" data-title="Email">joseph.smith@gmail.com</div>
        <div class="cell" data-title="Password">************</div>
        <div class="cell" data-title="Active">No</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Username">1337hax0r15</div>
        <div class="cell" data-title="Email">hackerdude1000@aol.com</div>
        <div class="cell" data-title="Password">************</div>
        <div class="cell" data-title="Active">Yes</div>
      </div>

      <div class="row">
        <div class="cell" data-title="Username">hairyharry19</div>
        <div class="cell" data-title="Email">harryharry@gmail.com</div>
        <div class="cell" data-title="Password">************</div>
        <div class="cell" data-title="Active">Yes</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "table"
};
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, Arial;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #3b3b3b;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  background: #2b2b2b;
}

@media screen and (max-width: 580px) {
  body {
    font-size: 16px;
    line-height: 22px;
  }
}

.wrapper {
  margin: 0 auto;
  padding: 40px;
  max-width: 800px;
}

.table {
  margin: 0 0 40px 0;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
}

@media screen and (max-width: 580px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: #f6f6f6;
}

.row:nth-of-type(odd) {
  background: #e9e9e9;
}

.row.header {
  font-weight: 900;
  color: #ffffff;
  background: #ea6153;
}

.row.green {
  background: #27ae60;
}

.row.blue {
  background: #2980b9;
}

@media screen and (max-width: 580px) {
  .row {
    padding: 14px 0 7px;
    display: block;
  }
  .row.header {
    padding: 0;
    height: 6px;
  }
  .row.header .cell {
    display: none;
  }
  .row .cell {
    margin-bottom: 10px;
  }
  .row .cell:before {
    margin-bottom: 3px;
    content: attr(data-title);
    min-width: 98px;
    font-size: 10px;
    line-height: 10px;
    font-weight: bold;
    text-transform: uppercase;
    color: #969696;
    display: block;
  }
}

.cell {
  padding: 6px 12px;
  display: table-cell;
}

@media screen and (max-width: 580px) {
  .cell {
    padding: 2px 16px;
    display: block;
  }
}
</style>
