import './App.css';
import React, { useState } from "react";


function App() 
{
  const [cart, setadd] = useState(true);

  return (
    <div className="App">
      <div className="navbar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-bra
            
            nd" href="#">Start Bootstarp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">All Products</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Popular Items</a></li>
                    <li><a class="dropdown-item" href="#">New Arrivals</a></li>
                  </ul>
                </li>

              </ul>
              <div className="cart">
                <form class="d-flex" role="search">
                  <button type="button" class="btn btn-Light border border-black">
                    🛒cart <span class="badge text-bg-dark">0</span>
                  </button>

                </form>
              </div>

            </div>
          </div>
        </nav>
      </div>

      <div className="display">
        <span class="d-block p-2 " id="display1">Shop In Style</span>
        <span class="d-block p-2 " id="display2">With this homepage template</span>
      </div>

      <div>
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-3" id="one">
              <p className="card1">450✖️300</p>
              <p className="name1">Fancy Product</p>
              <p>＄40.00-＄80.00</p><br></br><br></br>
              <button>View Options</button>
            </div>
            <div class="col-3" id="two">
              <p className="card2">450✖️300</p>
              <button type="button" class="btn btn-dark" id="sale1">Sale</button>
              <p className="name2">Special Item</p>
              <p className="rating1">⭐⭐⭐⭐⭐</p>
              <span className="strike1">$20.00 </span><span className="strike1">$18.00</span><br></br><br></br>
              <button className="b3" id="add1" onClick={() => setadd(cart + 1)}>Add to Cart</button>
            </div>
            <div class="col-3" id="three">
              <p className="card3">450✖️300</p>
              <button type="button" class="btn btn-dark" id="sale1">Sale</button>
              <p className="name3">Sale Item</p>
              <span className="strike2">$50.00</span><span>$25.00</span><br></br>
              <button className="b1" id="add1" onClick={() => setadd(cart + 1)}>Add to Cart</button>
            </div>
            <div class="col-3" id="four">
              <p className="card4">450✖️300</p>
              <p className="name4">Popular Item</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>$40.00</p><br></br>
              <button className="b2" id="add1" onClick={() => setadd(cart + 1)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>



      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-3" id="one">
            <p className="card1">450✖️300</p>
            <button type="button" class="btn btn-dark" id="sale1">Sale</button>
            <p className="name6">Fancy Product</p>
            <p className="name7">＄40.00-＄80.00</p><br></br><br></br>
            <button className="b4">View Options</button>
          </div>
          <div class="col-3" id="two">
            <p className="card2">450✖️300</p>
            <p className="name5">Special Item</p>
            <p>⭐⭐⭐⭐⭐</p>
            <span className="strike1">$20.00 </span><span>$18.00</span><br></br><br></br>
            <button id="add1" onClick={() => setadd(cart + 1)}>Add to Cart</button>
          </div>
          <div class="col-3" id="three">
            <p className="card3">450✖️300</p>
            <button type="button" class="btn btn-dark" id="sale1">Sale</button>
            <p className="name3">Sale Item</p>
            <span className="strike2">$50.00</span><span>$25.00</span><br></br>
            <button className="b1" id="add1">Add to Cart</button>
          </div>
          <div class="col-3" id="four">
            <p className="card4">450✖️300</p>
            <p className="name4">Popular Item</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$40.00</p><br></br>
            <button className="b2" id="add1" onClick={() => setadd(cart + 1)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <div>
        <p className="name8">Copywrite your website @ 2023</p>
      </div>
    </div >
  )
}

export default App();