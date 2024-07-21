import React from 'react'
import { getLocalTimeZone } from "@internationalized/date";

function calDateToStr( calDate ) {
  console.log(calDate);
  // const tt = calDate.year;
  // const date = calDate.toDate(getLocalTimeZone());
  let year = calDate.getFullYear();
  let month = calDate.getMonth()+1;
  let day = calDate.getDate();
  if(month < 10){
    month = "0"+month;
  }
  if(day < 10){
    day = "0"+day;
  }
  const result = year+month+day;
  // const result = '20200101'
  return result;
}

export {
  calDateToStr,
}