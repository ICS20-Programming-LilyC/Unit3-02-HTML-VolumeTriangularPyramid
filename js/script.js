// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 03/30/2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the area of the trapezoid.
 */
function areaSent() {
  
  //declaration of variables
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let sumOfLengths = sideA + sideB;
  let area = sumOfLengths * height / 2;
  
  //displaying calculations to screen
  document.getElementById("display-results").innerHTML = "The area of the trapezoid is " + area.toFixed(2) + " cm<sup>2</sup>."
}

