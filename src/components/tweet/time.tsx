import {
  UserTime,
} from "./styled";


const Time = ({ timestamp }: { timestamp: number }) => {
  const translateMonth = (monthIndex: number) => {
    return [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ][monthIndex - 1];
  };

  const timeDiffToText = (timestamp: number) => {
    const startDate = new Date(timestamp * 1000);
    const endDate = new Date();

    const differenceInMilliseconds = +endDate - +startDate;

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    let res: string = ``;

    if (startDate.getFullYear() !== endDate.getFullYear()) {
      const day = startDate.getDay();
      const monthText = translateMonth(startDate.getMonth());

      return `${monthText} asd${day}`;
    }
    if (differenceInSeconds > 86400) {
      const day = startDate.getDay();
      const monthText = translateMonth(startDate.getMonth());
      res = `${monthText} ${day}`;
    } else if (differenceInSeconds > 3600) {
      const hours = Math.floor(differenceInSeconds / 3600);
      res = `${hours}h`;
    } else if (differenceInSeconds > 60) {
      const minutes = Math.floor((differenceInSeconds % 3600) / 60);
      res = `${minutes}m`;
    } else {
      const seconds = differenceInSeconds % 60;
      res = `${seconds}s`;
    }

    return res;
  };

  const convertTime = (timestamp: number) => {
    const { locale } = Intl.DateTimeFormat().resolvedOptions();
    const moment = new Date(timestamp * 1000);
    const date = moment.toLocaleDateString(locale);
    const time = moment.toLocaleTimeString(locale);

    return [
      timeDiffToText(timestamp),
      `${time} - ${date}`,
      moment.toISOString(),
    ];
  };

  const [timeText, titleText, dateTimeText] = convertTime(timestamp);

  return (
    <UserTime title={titleText} dateTime={dateTimeText}>
      {timeText}
    </UserTime>
  );
};

export default Time;