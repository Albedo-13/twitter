import { UserTime } from "./styled";

const Time = ({ seconds }: { seconds: number }) => {
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

  const timeDiffToText = (seconds: number) => {
    const startDate = new Date(seconds * 1000);
    const endDate = new Date();

    const differenceInMilliseconds = +endDate - +startDate;

    const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);

    let res: string = ``;

    if (startDate.getFullYear() !== endDate.getFullYear()) {
      const day = startDate.getDay();
      const monthText = translateMonth(startDate.getMonth());
      const year = startDate.getFullYear();

      return `${monthText} ${day}, ${year}`;
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

  const convertTime = (seconds: number) => {
    const { locale } = Intl.DateTimeFormat().resolvedOptions();
    const moment = new Date(seconds * 1000);
    const date = moment.toLocaleDateString(locale);
    const time = moment.toLocaleTimeString(locale);

    return [timeDiffToText(seconds), `${time} - ${date}`, moment.toISOString()];
  };

  const [timeText, titleText, dateTimeText] = convertTime(seconds);

  return (
    <UserTime title={titleText} dateTime={dateTimeText}>
      {timeText}
    </UserTime>
  );
};

export default Time;
