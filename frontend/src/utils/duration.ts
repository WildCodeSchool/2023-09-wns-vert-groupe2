export default function foundDuration(dateStart: string, dateEnd: string) {
  const start = new Date(dateStart);
  const end = new Date(dateEnd);
  const differenceEnMilliseconds = Math.abs(end.getTime() - start.getTime());
  const secondes = Math.floor(differenceEnMilliseconds / 1000);
  const minutes = Math.floor(secondes / 60);
  const heures = Math.floor(minutes / 60);
  const minutesRestantes = minutes % 60;

  return { heures, minutes: minutesRestantes };
}
