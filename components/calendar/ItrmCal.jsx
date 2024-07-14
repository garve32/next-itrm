import {I18nProvider, useLocale} from "@react-aria/i18n";
import {today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useEffect, useState } from "react";
import { Calendar } from "@nextui-org/react";
import {useDateFormatter} from "@react-aria/i18n";

export default function ItrmCal({handler}) {
  let [date, setDate] = useState(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);

  let formatter = useDateFormatter({dateStyle: "short"});

  // useEffect(() => {
  //   console.log(handler)
  // }, []);

  const selectDate = async(sdate) => {
    // 선택한 데이터를 저장하고
    setDate(sdate);
    // console.log(sdate);
    console.log(sdate.toDate(getLocalTimeZone()))
    const shortDate = formatter.format(sdate.toDate(getLocalTimeZone())) ;
    console.log(shortDate)
    
    // getList 핸들러 수행
    handler(sdate);
  }
  
  return (
    <I18nProvider locale="ko-KR">
      <Calendar
      aria-label="cal"
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
      // showMonthAndYearPickers='true'
      errorMessage={isInvalid ? "주말엔 놀기" : undefined}
      isInvalid={isInvalid}
      value={date}
      onChange={(sdate) => {selectDate(sdate) }}
      />
    </I18nProvider>
  )
}
