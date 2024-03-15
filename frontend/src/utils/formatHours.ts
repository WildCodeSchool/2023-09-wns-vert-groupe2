export default function formatHours(dateString: string): {
  hours: string;
  minute: string;
} {
  const date = new Date(dateString);
  const hours = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  return { hours, minute };
}
