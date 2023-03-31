// Copyright (c) 2023 Lily C All rights reserved
//
// Created by: Lily C
// Created on: 03/30/2023
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the volume of a triangular pyramid.
 */
function areaSent() {
  
  //declaration of variables
  let height = parseFloat(document.getElementById("height").value);
  let sideA = parseFloat(document.getElementById("side-a").value);
  let sideB = parseFloat(document.getElementById("side-b").value);
  let volumeOfPyramid = (1/6) * sideB * sideA * height;
  
  //displaying calculations to screen
  document.getElementById("display-results").innerHTML = "The volume of the triangular pyramid is " + volumeOfPyramid.toFixed(2) + " cm<sup>2</sup>"
}