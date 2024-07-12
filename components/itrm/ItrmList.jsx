import { Button, Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell, getKeyValue, Calendar} from "@nextui-org/react";
import styles from './ItrmList.module.css';
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import {I18nProvider, useLocale} from "@react-aria/i18n";
import { useState } from "react";

function ItrmList({ itrmList }) {

  let [date, setDate] = useState(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);
  const renderCell = ({item, columnKey}) => {
    const cellValue = item[columnKey];
    return (
      <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{item.MI_ID}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-row gap-4">
      <I18nProvider locale="ko-KR">
      <Calendar
      aria-label="cal"
      defaultValue={today(getLocalTimeZone())}
      maxValue={today(getLocalTimeZone())}
      showMonthAndYearPickers='true'
      errorMessage={isInvalid ? "주말엔 놀기" : undefined}
      isInvalid={isInvalid}
      onChange={setDate}
    />
    </I18nProvider>
    <div>
      {/* <div>{itrmList.data}</div> */}
      <Table color='primary'
        selectionMode="single" aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody items={itrmList.data}>
        {/* {(item) => (
          
          <TableRow key={item.TODO_ID}>
            console.log(item.MI_ID);
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
        )} */}
        {itrmList.data.map(d => {
          return (
            <TableRow key={d.TODO_ID}>
              <TableCell>{d.MI_ID}</TableCell>
              <TableCell>{d.TODO_ID}</TableCell>
              <TableCell>{d.PROGRESS}</TableCell>
              <TableCell>{d.UPDATE_ID}</TableCell>
            </TableRow>
          );
        })}
        {/* <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>Senior Developer</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
          <TableCell>Vacation</TableCell>
        </TableRow> */}
      </TableBody>
    </Table>
    </div>
		</div>
  )
}

export default ItrmList