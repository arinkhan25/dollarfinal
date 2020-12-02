import React, { Component } from 'react';
import meat from './images/meat.jpg';
import './css/slice.css';

function MeatLover() {
return(
<div className="MeatLover col-4">
<div className="card">
<img src={ meat } class="card-img-top" alt="..."/>
<div className="card-body">
<h5 className="card-title">Plain Slice</h5>
<p className="card-text">It's got cheese, it's got tomato sauce,its got the meats, and it's only a dollar. Best deal in the world.</p>
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">Price: $1.00</li>
</ul>
</div>
</div>
);
}

export default MeatLover;