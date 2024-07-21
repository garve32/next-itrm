import {I18nProvider, useLocale} from "@react-aria/i18n";
import {today, getLocalTimeZone, isWeekend } from "@internationalized/date";
import { useEffect } from "react";
import { Calendar } from "@nextui-org/react";
import { calDateToStr } from "@/utils/DateUtils";

export default function ItrmCal({ handler, selDate, setSelDate }) {
  let {locale} = useLocale();
  let isInvalid = isWeekend(selDate, locale);
  const weekendMsg = '주말점검은 선택사항입니다.';

  useEffect(() => {
    // console.log(handler)
    selectDate(selDate);
  }, []);

  const selectDate = (sdate) => {
    // 선택한 데이터를 저장하고(date 형식)
    setSelDate(sdate);
    // YYYYMMDD 형식으로 변환한 후
    const formedDate = calDateToStr(sdate.toDate());
    // getList 핸들러 수행
    handler(formedDate);
  }
  
  return (
    <I18nProvider locale="ko-KR">
      <Calendar
      aria-label="calendar"
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
      errorMessage={isInvalid ? weekendMsg : undefined}
      isInvalid={isInvalid}
      // value={'20230303'}
      onChange={(calDate) => {selectDate(calDate) }}
      />
    </I18nProvider>
  )
}
